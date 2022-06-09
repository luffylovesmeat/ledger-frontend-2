/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { authentication } from "../firebase.config";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import axios from "axios";
import EthCrypto from "eth-crypto";
import {phoneNotype, emailType, facebookType} from '../claimType'
import rawData from '../contracts/identity'
import Web3 from "web3";
import {issuer} from "../config"
import "./Login.css"
import { Loader } from "../shared/Loader";
import Header from "../components/header";


function Register() {
  
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState("");
  const [otpPhoneNo, setOtpPhoneNo] = useState("")
  const [loading, setLoading] = useState(false)
  const [resendPhOtp, setResendPhOtp] = useState(false)
  const [resendEmailOtp, setResendEmailOtp] = useState(false)
  const [phVerified, setPhVerified] = useState(false)
  const [emailVerified, setEmailVerified] = useState(false)
  const [fbVarified, setFbVarified] = useState(false)

  const signerIdentity = EthCrypto.createIdentity();
  const web3 = new Web3(Web3.givenProvider)

  const [totalClaims,setTotalClaims] = useState([])

  const requestOtp = (e) => {
    if (phoneNumber.length >= 10) {
      setResendPhOtp(true)
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
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const verifyOtp = () => {
    if (otpPhoneNo.length === 6) {
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otpPhoneNo)
        .then((result) => {
          const user = result.user;
          setTotalClaims(data => [...data, phoneNotype])
          setPhVerified(true)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const sendOtp = async() =>{
    setResendEmailOtp(true)
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/emailotp`,
     {
       email
     }
    )
  }

  const verifyEmailOtp = async(e) => {
    console.log(otp,"otp")
    if(otp.length == 4){
       await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/verifyotp`,
       {
         email,
         otp
       }
       ).then((res)=>{
        if(res.data.isValid == true){
          setTotalClaims(data => [...data, emailType])
          setEmailVerified(true)
        }
        else{
          console.log("can not verify user")
        }
       })
    }
  }
  const signInWithFb = () => {
    try {
      setLoading(true)
      const provider = new FacebookAuthProvider();
      signInWithPopup(authentication, provider)
        .then((re) => {
          setTotalClaims(data => [...data, facebookType])
          setFbVarified(true)
          // alert("User signed in");
          setLoading(false)
        })
        .catch((error) => {
          setLoading(false)
          console.log(error.message);
        });
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  };

  const registerClaims = async()=>{
   try {
    setLoading(true)
    const id = localStorage.getItem("GhostId");
    const accounts = await web3.eth.getAccounts()
    const identityContract = new web3.eth.Contract(rawData.abi,id)
    var claimTypes = []
    var scheme = []
    var issuerAddress = []
    var sign = []
    var data = []
    var uri = []

    for(let i=0 ;i<totalClaims.length;i++){
      claimTypes.push(totalClaims[i])
      scheme.push(totalClaims[i])
      issuerAddress.push(issuer)
      uri.push('')
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/getSigns`,{
        identityAddress : id,
        claimType: totalClaims[i]
      }).then((res)=>{
         const split = res.data.data.split('$')
         sign.push(split[0])
         data.push(split[1])
      })
    }

    console.log(claimTypes,
      scheme,
      issuerAddress,
      sign,
      data,
      uri)

    await identityContract.methods.addMultipleClaim(
          claimTypes,
          scheme,
          issuerAddress,
          sign,
          data,
          uri
    ).send({from:accounts[0]})
    .then((res)=>{
      setLoading(false)
    })
    .catch((err)=>{
      setLoading(false)
    })
   } catch (error) {
     setLoading(false)
     console.log(error,"error")
   }
  }

  return (
    <>
           {loading && <Loader />}
    <div className="register-page" >
      <Header/>
      <div className="flex flex-col items-center gap-y-4 w-full lg:w-3/5 m-auto">
        <p
          style={{ fontFamily: "Roboto", fontWeight: 600, fontSize: 20 }}
          className="text-center"
        >
          Register Claims
        </p>
        <div className="flex flex-col gap-y-4">
          <p
            style={{
              fontFamily: "Roboto",
              fontWeight: 600,
              fontSize: 18,
              color: "#30364D",
            }}
          >
            Phone Number
          </p>
          <div className="input-register-field">
            <input
              placeholder="1234567898"
              style={{
                width: 566,
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
            <button
              className={phVerified == true? "disabled:cursor-not-allowed diabled--button":""}
              disabled={phVerified == true? true:false}
              style={{
                width: 109,
                height: 40,
                background: "linear-gradient(90deg, #B279F7 0%, #6E51E2 100%)",
                color: "white",
                borderRadius: "0px 10px 10px 0px",
                fontFamily: "Roboto",
                fontWeight: 500,
                fontSize: 17,
              }}
              onClick={requestOtp}
            >
              {resendPhOtp == false? "Send OTP": "Resend OTP"}
            </button>
          </div>
          <p
            style={{
              fontFamily: "Roboto",
              fontWeight: 600,
              fontSize: 18,
              color: "#30364D",
            }}
          >
            Enter OTP
          </p>
          <div className="input-register-field">
            <input
              placeholder="_ _ _ _"
              style={{
                width: 566,
                height: 40,
                borderRadius: 10,
                paddingLeft: 20,
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: 15,
              }}
              onChange={(e)=>setOtpPhoneNo(e.target.value)}
            />
            <button
              className={phVerified == true? "disabled:cursor-not-allowed diabled--button":""}
              disabled={phVerified == true? true:false}
              style={{
                width: 109,
                height: 40,
                background: "linear-gradient(90deg, #B279F7 0%, #6E51E2 100%)",
                borderRadius: "0px 10px 10px 0px",
                color: "white",
                fontFamily: "Roboto",
                fontWeight: 500,
                fontSize: 17,
              }}
              onClick={verifyOtp}
            >
              Verify
            </button>
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
                width: 566,
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
            <button
              className={emailVerified == true? "disabled:cursor-not-allowed diabled--button":""}
              disabled={emailVerified == true? true:false}
              style={{
                width: 109,
                height: 40,
                background: "linear-gradient(90deg, #B279F7 0%, #6E51E2 100%)",
                borderRadius: "0px 10px 10px 0px",
                color: "white",
                fontFamily: "Roboto",
                fontWeight: 500,
                fontSize: 17,
              }}
              onClick={sendOtp}
            >
              {resendEmailOtp == false? "Send OTP": "Resend OTP"}
            </button>
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
                width: 566,
                height: 40,
                borderRadius: 10,
                paddingLeft: 20,
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: 15,
              }}
              onChange={(e)=>setOtp(e.target.value)}
            />
            <button
              className={emailVerified == true? "disabled:cursor-not-allowed diabled--button":""}
              disabled={emailVerified == true? true:false}
              style={{
                width: 109,
                height: 40,
                background: "linear-gradient(90deg, #B279F7 0%, #6E51E2 100%)",
                borderRadius: "0px 10px 10px 0px",
                color: "white",
                fontFamily: "Roboto",
                fontWeight: 500,
                fontSize: 17,
              }}
              onClick={verifyEmailOtp}
            >
              Verify
            </button>
          </div>

          <div className="input-register-field">
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
            <button
              className={fbVarified == true? "disabled:cursor-not-allowed diabled--button":""}
              disabled={fbVarified == true? true:false}
              style={{
                width: 200,
                height: 40,
                background: "linear-gradient(90deg, #B279F7 0%, #6E51E2 100%)",
                borderRadius: "10px 10px 10px 10px",
                color: "white",
                fontFamily: "Roboto",
                fontWeight: 500,
                fontSize: 17,
              }}
              onClick={signInWithFb}
            >
              Verify
            </button>
          </div>

          <button
            style={{
              width: 672,
              height: 40,
              background: "linear-gradient(90deg, #B279F7 0%, #6E51E2 100%)",
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
            Register Claims
          </button>
        </div>
      </div>
      <div id="recaptcha-container"></div>
    </div>
    </>
  );
}

export default Register;
