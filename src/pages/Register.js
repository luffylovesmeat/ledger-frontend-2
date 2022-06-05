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

function Register() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
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
  const verifyOtp = (e) => {
    let p = e.target.value;
    setOtp(p);
    if (p.length === 6) {
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(p)
        .then((result) => {
          const user = result.user;
          alert("User Created", user);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const signInWithFb = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        alert("User signed in");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
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
                width: 675,
                height: 40,
                borderRadius: 10,
                paddingLeft: 20,
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: 15,
              }}
              value={otp}
              onChange={verifyOtp}
            />
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
                width: 675,
                height: 40,
                borderRadius: 10,
                paddingLeft: 20,
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: 15,
              }}
            />
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
            <input
              placeholder="Enter Facebook ID"
              style={{
                width: 566,
                height: 40,
                borderRadius: "10px 0px 0px 10px",
                paddingLeft: 20,
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: 15,
              }}
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
              onClick={signInWithFb}
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
                width: 675,
                height: 40,
                borderRadius: 10,
                paddingLeft: 20,
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: 15,
              }}
            />
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
              marginTop: 20,
              marginBottom: 20,
            }}
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
