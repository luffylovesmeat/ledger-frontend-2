/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { authentication } from "../firebase.config";
import {
    RecaptchaVerifier,
    signInWithPhoneNumber,
    signInWithPopup,
    FacebookAuthProvider,
} from "firebase/auth";
import axios from "axios";
import EthCrypto from "eth-crypto";
import { phoneNotype, emailType, facebookType } from "../claimType";
import rawData from "../contracts/identity";
import Web3 from "web3";
import { issuer } from "../config";
import "./Login.css";
import { Loader } from "../shared/Loader";
import Header from "../components/header";
import LoadingButton from "@mui/lab/LoadingButton";
import { Navigate, useNavigate } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function Register() {
    let navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [fbEmail, setFbEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [otpPhoneNo, setOtpPhoneNo] = useState("");
    const [loading, setLoading] = useState(false);
    const [resendPhOtp, setResendPhOtp] = useState(false);
    const [resendEmailOtp, setResendEmailOtp] = useState(false);
    const [phVerified, setPhVerified] = useState(false);
    const [emailVerified, setEmailVerified] = useState(false);
    const [fbVarified, setFbVarified] = useState(false);

    const signerIdentity = EthCrypto.createIdentity();
    const [phoneNumberLoader, setPhoneNumberLoader] = useState(false);
    const [otpLoader, setOtpLoader] = useState(false);
    const [emailLoader, setEmailLoader] = useState(false);
    const [emailOtpLoader, setEmailOtpLoader] = useState(false);
    const [walletAddress, setWalletAddress] = useState({});
    const [walletAddressAmount, setWalletAddressAmount] = useState(1);

    const [verification, setVerification] = useState([]);
    const [kycVerified,setKycVerified] = useState(false);

    const web3 = new Web3(Web3.givenProvider);

    const [totalClaims, setTotalClaims] = useState([]);

    const requestOtp = (e) => {
        if (phoneNumber.length >= 10) {
            setPhoneNumberLoader(true);
            setResendPhOtp(true);
            window.recaptchaverifier = new RecaptchaVerifier(
                "recaptcha-container",
                {
                    size: "invisible",
                    callback: (response) => {},
                },
                authentication
            );
            let appVerifier = window.recaptchaverifier;
            signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
                .then((confirmationResult) => {
                    window.confirmationResult = confirmationResult;
                    setPhoneNumberLoader(false);
                })
                .catch((error) => {
                    console.log(error);
                    setPhoneNumberLoader(false);
                });
        }
    };
    const verifyOtp = () => {
        if (otpPhoneNo.length === 6) {
            setOtpLoader(true);
            let confirmationResult = window.confirmationResult;
            confirmationResult
                .confirm(otpPhoneNo)
                .then((result) => {
                    const user = result.user;
                    setTotalClaims((data) => [...data, phoneNotype]);
                    setPhVerified(true);
                    setOtpLoader(false);
                })
                .catch((error) => {
                    console.log(error);
                    setOtpLoader(false);
                });
        }
    };

    const sendOtp = async () => {
        setResendEmailOtp(true);
        setEmailLoader(true);
        await axios
            .post(`${process.env.REACT_APP_BACKEND_URL}/auth/emailotp`, {
                email,
            })
            .then((res) => {
                console.log(res);
                setEmailLoader(false);
            })
            .catch((err) => {
                console.log(err);
                setEmailLoader(false);
            });
    };

    const verifyEmailOtp = async (e) => {
        console.log(otp, "otp");
        if (otp.length == 4) {
            setEmailOtpLoader(true);
            await axios
                .post(`${process.env.REACT_APP_BACKEND_URL}/auth/verifyotp`, {
                    email,
                    otp,
                })
                .then((res) => {
                    if (res.data.isValid == true) {
                        setTotalClaims((data) => [...data, emailType]);
                        setEmailVerified(true);
                    } else {
                        console.log("can not verify user");
                    }
                    setEmailOtpLoader(false);
                })
                .catch((err) => {
                    console.log(err);
                    setEmailOtpLoader(false);
                });
        }
    };
    const signInWithFb = () => {
        try {
            setLoading(true);
            const provider = new FacebookAuthProvider();
            signInWithPopup(authentication, provider)
                .then((re) => {
                    console.log(re, "facebook");
                    setTotalClaims((data) => [...data, facebookType]);
                    setFbVarified(true);
                    setFbEmail(re?.user.email);
                    // alert("User signed in");
                    setLoading(false);
                })
                .catch((error) => {
                    setLoading(false);
                    console.log(error.message);
                });
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    const registerClaims = async () => {
        try {
            setLoading(true);
            const id = localStorage.getItem("GhostId");
            const accounts = await web3.eth.getAccounts();
            const identityContract = new web3.eth.Contract(rawData.abi, id);
            var claimTypes = [];
            var scheme = [];
            var issuerAddress = [];
            var sign = [];
            var data = [];
            var uri = [];

            for (let i = 0; i < totalClaims.length; i++) {
                claimTypes.push(totalClaims[i]);
                scheme.push(totalClaims[i]);
                issuerAddress.push(issuer);
                if (i == 0) {
                    uri.push(phoneNumber);
                }
                if (i == 1) {
                    uri.push(email);
                }
                if (i == 2) {
                    uri.push(fbEmail);
                }
                if (i == 3) {
                    uri.push("");
                }

                await axios
                    .post(
                        `${process.env.REACT_APP_BACKEND_URL}/auth/getSigns`,
                        {
                            identityAddress: id,
                            claimType: totalClaims[i],
                        }
                    )
                    .then((res) => {
                        const split = res.data.data.split("$");
                        sign.push(split[0]);
                        data.push(split[1]);
                        //  navigate('/dashboard')
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }

            for (var key in walletAddress) {
                console.log(key, typeof key, "dfhdsjhf");
                claimTypes.push(Number(key) + 4);
                scheme.push(Number(key) + 4);
                issuerAddress.push(issuer);
                uri.push(walletAddress[key]);
                await axios
                    .post(
                        `${process.env.REACT_APP_BACKEND_URL}/auth/getSigns`,
                        {
                            identityAddress: id,
                            claimType: Number(key) + 4,
                        }
                    )
                    .then((res) => {
                        const split = res.data.data.split("$");
                        sign.push(split[0]);
                        data.push(split[1]);
                        //  navigate('/dashboard')
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
            console.log(
                claimTypes,
                scheme,
                issuerAddress,
                sign,
                data,
                uri,
                "datatata"
            );

            await identityContract.methods
                .addMultipleClaim(
                    claimTypes,
                    scheme,
                    issuerAddress,
                    sign,
                    data,
                    uri
                )
                .send({ from: accounts[0] })
                .then((res) => {
                    setLoading(false);
                    navigate("/dashboard");
                })
                .catch((err) => {
                    setLoading(false);
                });
        } catch (error) {
            setLoading(false);
            console.log(error, "error");
        }
    };

    const verifyWalletAddress = async (idx) => {
        try {
            const getAccounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            const accounts = await web3.eth.getAccounts();
            let arr = verification;
            console.log("accounts ", accounts);
            console.log("wallet", walletAddress);
            if (!accounts.includes(walletAddress[idx])) {
                console.log("does not match");
            } else {
                console.log("Match...", verification[idx]);
                arr[idx] = walletAddress[idx];
                console.log(arr[idx], walletAddress[idx]);
                setVerification([...verification, arr[idx]]);
                console.log("arr ", arr);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const loadBlockpassWidget = () => {
        console.log(email);
        let blockpass = new window.BlockpassKYCConnect(
            "blokminers_01", // service client_id from the admin console
            {   
                refId: Date.now(), // assign the local user_id of the connected user
            }
        );
        blockpass.startKYCConnect();
        blockpass.on("KYCConnectSuccess", () => {
            //add code that will trigger when data have been sent.
            console.log("KYCConnectSuccess")
            alert("Success Data sent");
            setTotalClaims((data) => [...data, 4]);
            setKycVerified(true);
        });

        
    };
    useEffect(() => {
      loadBlockpassWidget();
    },[])

    useEffect(() => {
        console.log("verification ", verification);
    }, [verification]);
    return (
        <>
            {loading && <Loader />}
            <div className="register-page">
                <Header />
                <div className="flex flex-col items-center gap-y-4 w-full lg:w-3/5 m-auto">
                    <p
                        style={{
                            fontFamily: "Roboto",
                            fontWeight: 600,
                            fontSize: 20,
                        }}
                        className="text-center"
                    >
                        Register Claims
                    </p>
                    <div className="flex flex-col gap-y-4">
                        <p
                            style={{
                                fontFamily: "Roboto",
                                fontWeight: 600,
                                fontSize: 15,
                                color: "#30364D",
                            }}
                        >
                            Phone Number
                        </p>
                        <div className="input-register-field">
                            <input
                                placeholder="1234567898"
                                style={{
                                    width: 400,
                                    height: 40,
                                    borderRadius: "10px 0px 0px 10px",
                                    paddingLeft: 20,
                                    fontFamily: "Roboto",
                                    fontWeight: 400,
                                    fontSize: 15,
                                }}
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                            <LoadingButton
                                className={
                                    phVerified == true
                                        ? "disabled:cursor-not-allowed diabled--LoadingButton"
                                        : ""
                                }
                                disabled={phVerified == true ? true : false}
                                loading={phoneNumberLoader}
                                style={{
                                    width: 109,
                                    height: 40,
                                    background:
                                        "linear-gradient(90deg, #B279F7 0%, #6E51E2 100%)",
                                    color: "white",
                                    borderRadius: "0px 10px 10px 0px",
                                    fontFamily: "Roboto",
                                    fontWeight: 500,
                                    fontSize: 15,
                                }}
                                onClick={requestOtp}
                            >
                                {!phoneNumberLoader &&
                                    (resendPhOtp == false
                                        ? "Send OTP"
                                        : "Resend OTP")}
                            </LoadingButton>
                        </div>
                        <p
                            style={{
                                fontFamily: "Roboto",
                                fontWeight: 600,
                                fontSize: 15,
                                color: "#30364D",
                            }}
                        >
                            Enter OTP
                        </p>
                        <div className="input-register-field">
                            <input
                                placeholder="_ _ _ _"
                                style={{
                                    width: 400,
                                    height: 40,
                                    borderRadius: 10,
                                    paddingLeft: 20,
                                    fontFamily: "Roboto",
                                    fontWeight: 400,
                                    fontSize: 15,
                                }}
                                onChange={(e) => setOtpPhoneNo(e.target.value)}
                            />
                            <LoadingButton
                                className={
                                    phVerified == true
                                        ? "disabled:cursor-not-allowed diabled--LoadingButton"
                                        : ""
                                }
                                disabled={phVerified == true ? true : false}
                                loading={otpLoader}
                                style={{
                                    width: 109,
                                    height: 40,
                                    background:
                                        "linear-gradient(90deg, #B279F7 0%, #6E51E2 100%)",
                                    borderRadius: "0px 10px 10px 0px",
                                    color: "white",
                                    fontFamily: "Roboto",
                                    fontWeight: 500,
                                    fontSize: 15,
                                }}
                                onClick={verifyOtp}
                            >
                                {!otpLoader && "Verify"}
                            </LoadingButton>
                        </div>
                        <p
                            style={{
                                fontFamily: "Roboto",
                                fontWeight: 600,
                                fontSize: 15,
                                color: "#30364D",
                            }}
                        >
                            E-Mail
                        </p>
                        <div className="input-register-field">
                            <input
                                placeholder="johndoe@gmail.com"
                                style={{
                                    width: 400,
                                    height: 40,
                                    borderRadius: "10px 0px 0px 10px",
                                    paddingLeft: 20,
                                    fontFamily: "Roboto",
                                    fontWeight: 400,
                                    fontSize: 15,
                                }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <LoadingButton
                                className={
                                    emailVerified == true
                                        ? "disabled:cursor-not-allowed diabled--LoadingButton"
                                        : ""
                                }
                                disabled={emailVerified == true ? true : false}
                                loading={emailLoader}
                                style={{
                                    width: 109,
                                    height: 40,
                                    background:
                                        "linear-gradient(90deg, #B279F7 0%, #6E51E2 100%)",
                                    borderRadius: "0px 10px 10px 0px",
                                    color: "white",
                                    fontFamily: "Roboto",
                                    fontWeight: 500,
                                    fontSize: 15,
                                }}
                                onClick={sendOtp}
                            >
                                {!emailLoader &&
                                    (resendEmailOtp == false
                                        ? "Send OTP"
                                        : "Resend OTP")}
                            </LoadingButton>
                        </div>
                        <p
                            style={{
                                fontFamily: "Roboto",
                                fontWeight: 600,
                                fontSize: 15,
                                color: "#30364D",
                            }}
                        >
                            Enter OTP
                        </p>
                        <div className="input-register-field">
                            <input
                                placeholder="_ _ _ _"
                                style={{
                                    width: 400,
                                    height: 40,
                                    borderRadius: 10,
                                    paddingLeft: 20,
                                    fontFamily: "Roboto",
                                    fontWeight: 400,
                                    fontSize: 15,
                                }}
                                onChange={(e) => setOtp(e.target.value)}
                            />
                            <LoadingButton
                                className={
                                    emailVerified == true
                                        ? "disabled:cursor-not-allowed diabled--LoadingButton"
                                        : ""
                                }
                                disabled={emailVerified == true ? true : false}
                                loading={emailOtpLoader}
                                style={{
                                    width: 109,
                                    height: 40,
                                    background:
                                        "linear-gradient(90deg, #B279F7 0%, #6E51E2 100%)",
                                    borderRadius: "0px 10px 10px 0px",
                                    color: "white",
                                    fontFamily: "Roboto",
                                    fontWeight: 500,
                                    fontSize: 15,
                                    marginBottom: 24,
                                }}
                                onClick={verifyEmailOtp}
                            >
                                {!emailOtpLoader && "Verify"}
                            </LoadingButton>
                        </div>

                        <div className="flex flex-row items-center justify-between">
                            <p
                                style={{
                                    fontFamily: "Roboto",
                                    fontWeight: 600,
                                    fontSize: 15,
                                    color: "#30364D",
                                }}
                            >
                                Facebook Verification
                            </p>
                            <LoadingButton
                                className={
                                    fbVarified == true
                                        ? "disabled:cursor-not-allowed diabled--LoadingButton mt-4"
                                        : "mt-4"
                                }
                                disabled={fbVarified == true ? true : false}
                                style={{
                                    width: 110,
                                    height: 40,
                                    background:
                                        "linear-gradient(90deg, #B279F7 0%, #6E51E2 100%)",
                                    borderRadius: "10px 10px 10px 10px",
                                    color: "white",
                                    fontFamily: "Roboto",
                                    fontWeight: 500,
                                    fontSize: 15,
                                }}
                                onClick={signInWithFb}
                            >
                                {"Verify"}
                            </LoadingButton>
                        </div>

                        {/* wallet address add */}
                        <div className="flex flex-row">
                            <p
                                style={{
                                    fontFamily: "Roboto",
                                    fontWeight: 600,
                                    fontSize: 15,
                                    color: "#30364D",
                                    marginRight: 10,
                                }}
                            >
                                Wallet Address
                            </p>

                            <AddCircleOutlineIcon
                                className="cursor-pointer"
                                onClick={() => {
                                    setWalletAddressAmount(
                                        walletAddressAmount + 1
                                    );
                                }}
                            />
                        </div>
                        {[...Array(walletAddressAmount)].map((item, idx) => {
                            return (
                                <div className="input-register-field">
                                    <input
                                        placeholder="0x..."
                                        style={{
                                            width: 400,
                                            height: 40,
                                            borderRadius: 10,
                                            paddingLeft: 20,
                                            fontFamily: "Roboto",
                                            fontWeight: 400,
                                            fontSize: 15,
                                        }}
                                        name={"walletAddress"}
                                        value={walletAddress[idx]}
                                        onChange={(event) =>
                                            setWalletAddress({
                                                ...walletAddress,
                                                [idx]: event.target.value,
                                            })
                                        }
                                    />
                                    <LoadingButton
                                        className={
                                            verification.includes(
                                                walletAddress[idx]
                                            )
                                                ? "disabled:cursor-not-allowed diabled--LoadingButton opacity-75"
                                                : ""
                                        }
                                        disabled={
                                            verification.includes(
                                                walletAddress[idx]
                                            )
                                                ? true
                                                : false
                                        }
                                        // loading={emailOtpLoader}
                                        style={{
                                            width: 109,
                                            height: 40,
                                            background:
                                                "linear-gradient(90deg, #B279F7 0%, #6E51E2 100%)",
                                            borderRadius: "0px 10px 10px 0px",
                                            color: "white",
                                            fontFamily: "Roboto",
                                            fontWeight: 500,
                                            fontSize: 15,
                                        }}
                                        onClick={() => verifyWalletAddress(idx)}
                                    >
                                        {verification.includes(
                                            walletAddress[idx]
                                        )
                                            ? "Verified"
                                            : "Verify"}
                                    </LoadingButton>
                                </div>
                            );
                        })}

                        <div className="flex flex-row items-center justify-between">
                            <p
                                style={{
                                    fontFamily: "Roboto",
                                    fontWeight: 600,
                                    fontSize: 15,
                                    color: "#30364D",
                                }}
                            >
                                KYC Verification
                            </p>
                            <LoadingButton
                                className={kycVerified ? "disabled:cursor-not-allowed diabled--LoadingButton opacity-75" : ""}
                                disabled={kycVerified}
                                style={{
                                    width: 110,
                                    height: 40,
                                    background:
                                        "linear-gradient(90deg, #B279F7 0%, #6E51E2 100%)",
                                    borderRadius: "10px 10px 10px 10px",
                                    color: "white",
                                    fontFamily: "Roboto",
                                    fontWeight: 500,
                                    fontSize: 15,
                                }}
                                id="blockpass-kyc-connect"
                            >
                                {"Verify"}
                            </LoadingButton>
                        </div>
                        <LoadingButton
                            style={{
                                width: 509,
                                height: 40,
                                background:
                                    "linear-gradient(90deg, #B279F7 0%, #6E51E2 100%)",
                                borderRadius: 10,
                                fontFamily: "Roboto",
                                fontWeight: 600,
                                fontSize: 20,
                                color: "white",
                                marginTop: 10,
                                marginBottom: 20,
                            }}
                            onClick={registerClaims}
                        >
                            {"Register Claims"}
                        </LoadingButton>
                    </div>
                </div>
                <div id="recaptcha-container"></div>
            </div>
        </>
    );
}

export default Register;
