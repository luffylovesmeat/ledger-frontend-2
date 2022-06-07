/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import search from "../images/search.svg";
import logo from "../images/logo.svg";
import wallet from "../images/wallet.svg";
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

function Register() {
  
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState("");
  const [otpPhoneNo, setOtpPhoneNo] = useState("")

  const signerIdentity = EthCrypto.createIdentity();
  const web3 = new Web3(Web3.givenProvider)

  const [totalClaims,setTotalClaims] = useState([])

  // const checkClaims = () =>{

  // }

  // const addClaims = () =>{
    
  // }

  const requestOtp = (e) => {
    if (phoneNumber.length >= 10) {
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
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const sendOtp = async() =>{
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
        }
        else{
          console.log("can not verify user")
        }
       })
    }
  }
  const signInWithFb = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        setTotalClaims(data => [...data, facebookType])
        alert("User signed in");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const registerClaims = async()=>{
   try {
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
   } catch (error) {
     console.log(error,"error")
   }
  }

  return (
    <div style={{ backgroundColor: "#F8F8FE" }}>
      <div className="flex pt-4 items-center pb-4 gap-x-16 ml-44">
        <div className="flex items-center">
          <img src={logo} width={35} height={35} />
          <p style={{ fontFamily: "Roboto", fontSize: 20, fontWeight: 700 }}>
            LedgerScore
          </p>
        </div>
        <div className="flex">
          <div
            style={{
              width: 38,
              height: 54,
              borderRadius: "10px 0px 0px 10px",
            }}
            className="flex justify-center items-center bg-white"
          >
            <img src={search} />
          </div>
          <input
            style={{
              width: 500,
              height: 54,
              borderRadius: "0px 10px 10px 0px",
            }}
            placeholder="Search..."
          />
        </div>
        <div className="flex items-center">
          <img src={logo} width={44} height={44} />
          <p style={{ fontFamily: "Roboto", fontWeight: 600, fontSize: 17 }}>
            $ 0.00156
          </p>
        </div>
        <div className="flex items-center">
          <div
            className="bg-white flex justify-center items-center"
            style={{ borderRadius: "50%", width: 60, height: 60 }}
          >
            <img src={wallet} width={32.36} height={30.2} />
          </div>
          <div
            className="bg-white"
            style={{
              width: 123,
              height: 26,
              borderRadius: "0px 11.5px 11.5px 0px",
            }}
          >
            <p
              style={{
                fontFamily: "Roboto",
                fontWeight: 600,
                fontSize: 17,
                paddingLeft: 22,
              }}
            >
              ox...edf8
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-4 w-3/5 m-auto">
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
              fontSize: 15,
              color: "#30364D",
            }}
          >
            Phone Number
          </p>
          <div>
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
              style={{
                width: 109,
                height: 40,
                background: "linear-gradient(90deg, #B279F7 0%, #6E51E2 100%)",
                borderRadius: "0px 10px 10px 0px",
                color: "white",
                fontFamily: "Roboto",
                fontWeight: 500,
                fontSize: 23,
              }}
              onClick={requestOtp}
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
            Enter OTP
          </p>
          <div>
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
              style={{
                width: 109,
                height: 40,
                background: "linear-gradient(90deg, #B279F7 0%, #6E51E2 100%)",
                borderRadius: "0px 10px 10px 0px",
                color: "white",
                fontFamily: "Roboto",
                fontWeight: 500,
                fontSize: 23,
              }}
              onClick={verifyOtp}
            >
              Enter
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
          <div>
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
              style={{
                width: 109,
                height: 40,
                background: "linear-gradient(90deg, #B279F7 0%, #6E51E2 100%)",
                borderRadius: "0px 10px 10px 0px",
                color: "white",
                fontFamily: "Roboto",
                fontWeight: 500,
                fontSize: 23,
              }}
              onClick={sendOtp}
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
            Enter OTP
          </p>
          <div>
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
              style={{
                width: 109,
                height: 40,
                background: "linear-gradient(90deg, #B279F7 0%, #6E51E2 100%)",
                borderRadius: "0px 10px 10px 0px",
                color: "white",
                fontFamily: "Roboto",
                fontWeight: 500,
                fontSize: 23,
              }}
              onClick={verifyEmailOtp}
            >
              Enter
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
            Facebook Verification
          </p>
          <div>
            <button
              style={{
                width: 672,
                height: 40,
                background: "linear-gradient(90deg, #B279F7 0%, #6E51E2 100%)",
                borderRadius: "10px 10px 10px 10px",
                color: "white",
                fontFamily: "Roboto",
                fontWeight: 500,
                fontSize: 23,
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
              marginTop: 40,
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
  );
}

export default Register;
