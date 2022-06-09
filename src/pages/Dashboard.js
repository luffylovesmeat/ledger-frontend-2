import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import search from "../images/search.svg";
import logo from "../images/logo.svg";
import wallet from "../images/wallet.svg";
import meter from "../images/meter.svg";
import credit from "../images/credit.svg";
import crypto from "../images/crypto.svg";
import excellent from "../images/excellent.svg";
import pointer from "../images/pointer.svg";
import arr from "../images/arr.svg";
import upd from "../images/upd.svg";
import m1 from "../images/m1.svg";
import m2 from "../images/m2.svg";
import m3 from "../images/m3.svg";
import m4 from "../images/m4.svg";
import m5 from "../images/m5.svg";
import m6 from "../images/m6.svg";
import m7 from "../images/m7.svg";
import bell from "../images/bell.svg";
import { Graph } from "../components/Graph";
import axios from "axios";
import Web3 from "web3";
import { Loader } from "../shared/Loader";
import rawData from "../contracts/identity"

const Dashboard = () => {

  const [ghostId, setGhostId] = useState('')
  const [counts, setCounts] = useState('')
  const web3 = new Web3(Web3.givenProvider)

  const checkClaims = async() =>{
     try {
      if(ghostId !== ''){
        const contract = new web3.eth.Contract(rawData.abi,ghostId)
      var count =0;
      for(let i=1;i<=3;i++){
        const data = await contract.methods.getClaimIdsByType(i).call()
        if(data.length > 0){
          count++;
        }
      }
      setCounts(count)
      }
     } catch (error) {
       console.log(error)
     }
  }

  const getGhostId = async() =>{
    const account = await web3.eth.getAccounts()
    const id = localStorage.getItem("GhostId");
    if(id){
      setGhostId(id)
    }
    else{
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/id/getGhostId`,
      {
        address: account[0]
      })
      .then((res)=>{
        console.log(res,"res")
        localStorage.setItem("GhostId" , res.data.ghostId)
        setGhostId(res.data.ghostId)
      })
    }
  }

  useEffect(()=>{
    getGhostId()
  },[])

  useEffect(()=>{
    checkClaims()
  },[ghostId])
  return (
    <div
      style={{ backgroundColor: "#F8F8FE", height: "1400px" }}
      className="flex"
    >
      <div className="left w-1/5 bg-white flex flex-col items-center pt-9 gap-y-9">
        <div className="flex items-center">
          <img src={logo} width={35} height={35} />
          <p style={{ fontFamily: "Roboto", fontSize: 20, fontWeight: 700 }}>
            LedgerScore
          </p>
        </div>
        <div className="flex flex-col gap-y-4">
          <p
            style={{
              color: "rgba(48, 54, 77, 0.67)",
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: 19,
            }}
          >
            Dashboard
          </p>
          <p
            style={{
              color: "rgba(48, 54, 77, 0.67)",
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: 19,
            }}
          >
            Ghost ID
          </p>
          <p
            style={{
              color: "rgba(48, 54, 77, 0.67)",
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: 19,
            }}
          >
            Card
          </p>
        </div>
        <div
          style={{ backgroundColor: "#F8F8FE", width: 280, height: 200 }}
          className="flex flex-col gap-y-3"
        >
          <Link to="/register">
            <button
              style={{
                background: "linear-gradient(90deg, #B279F7 0%, #6E51E2 100%)",
                borderRadius: 6,
                height: 48,
                width: 280,
                color: "white",
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: 16,
              }}
            >
              Register Claims
            </button>
          </Link>
          <p
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: 13,
              paddingLeft: 15,
              color: "rgba(48, 54, 77, 0.67)",
            }}
          >
            Email
          </p>
          <p
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: 13,
              paddingLeft: 15,
              color: "rgba(48, 54, 77, 0.67)",
            }}
          >
            Mobile Number
          </p>
          <p
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: 13,
              paddingLeft: 15,
              color: "rgba(48, 54, 77, 0.67)",
            }}
          >
            Social Account
          </p>
          <p
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: 13,
              paddingLeft: 15,
              color: "rgba(48, 54, 77, 0.67)",
            }}
          >
            KYC
          </p>
        </div>
      </div>
      <div className="right w-4/5 pl-5">
        <div className="flex pt-9 items-center pb-10 gap-x-10">
          <p
            style={{
              fontFamily: "Roboto",
              fontWeight: 500,
              fontSize: 25,
              color: "#30364D",
            }}
          >
            Dashboard
          </p>
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
        <div className="flex items-center justify-between mr-28 pb-7">
          <div
            style={{
              backgroundColor: "white",
              width: 522,
              height: 279,
              borderRadius: 15,
            }}
            className="flex flex-col gap-y-7 pl-7 pt-7"
          >
            <p style={{ fontFamily: "Inter", fontWeight: 500, fontSize: 20 }}>
              Asset Portfolio
            </p>
            <p style={{ fontFamily: "Inter", fontWeight: 400, fontSize: 14 }}>
              No details available
            </p>
            <button
              style={{
                background: "linear-gradient(90deg, #B279F7 0%, #6E51E2 100%)",
                borderRadius: 6,
                width: 159,
                height: 48,
                color: "white",
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: 14,
                marginTop: 40,
              }}
            >
              Pull Asset details
            </button>
          </div>
          <div
            style={{
              backgroundColor: "white",
              width: 522,
              height: 279,
              borderRadius: 15,
            }}
            className="flex flex-col gap-y-7 pl-7 pt-7"
          >
            <p style={{ fontFamily: "Inter", fontWeight: 500, fontSize: 20 }}>
              Ghost ID
            </p>
            <div className="flex flex-col">
              <p style={{ fontFamily: "Inter", fontWeight: 400, fontSize: 14 }}>
                ID: {ghostId}
              </p>
              <p style={{ fontFamily: "Inter", fontWeight: 400, fontSize: 14 }}>
                Claims completed: {counts}
              </p>
            </div>
            <Link to="/register">
              <button
                style={{
                  background:
                    "linear-gradient(90deg, #B279F7 0%, #6E51E2 100%)",
                  borderRadius: 6,
                  width: 159,
                  height: 48,
                  color: "white",
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  fontSize: 14,
                  marginTop: 22,
                }}
              >
                Register Claims
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <div
            style={{
              width: 675,
              height: 540,
              backgroundColor: "white",
              borderRadius: "30px 0px 0px 30px",
            }}
          >
            <div
              style={{ width: "100%", height: 69 }}
              className="flex items-center pl-12 gap-x-96"
            >
              <p style={{ fontFamily: "Inter", fontWeight: 500, fontSize: 23 }}>
                LED/USD
              </p>
              <button
                style={{
                  background:
                    "linear-gradient(90deg, #B279F7 0%, #6E51E2 100%)",
                  borderRadius: 5,
                  width: 70,
                  height: 33,
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: 17,
                  color: "white",
                }}
              >
                BUY
              </button>
            </div>
            <div
              style={{ width: "100%", height: 69, backgroundColor: "#F8F8FE" }}
              className="flex justify-around items-center"
            >
              <div className="flex gap-x-3">
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: 400,
                    fontSize: 17,
                    color: "#C4C4C4",
                  }}
                >
                  High
                </p>
                <span
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: 400,
                    fontSize: 20,
                    color: "#30364D",
                  }}
                >
                  $0.001609
                </span>
              </div>
              <div className="flex gap-x-3">
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: 400,
                    fontSize: 17,
                    color: "#C4C4C4",
                  }}
                >
                  Low
                </p>
                <span
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: 400,
                    fontSize: 20,
                    color: "#30364D",
                  }}
                >
                  $0.001537
                </span>
              </div>
              <div className="flex gap-x-3">
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: 400,
                    fontSize: 17,
                    color: "#C4C4C4",
                  }}
                >
                  Price Alert
                </p>
                <img src={bell} />
              </div>
            </div>
            <div
              style={{ width: "100%", height: 69 }}
              className="flex items-center gap-x-16 pl-16"
            >
              <p
                style={{
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  fontSize: 17,
                  color: "#C4C4C4",
                }}
              >
                1 min
              </p>
              <p
                style={{
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  fontSize: 17,
                  color: "#C4C4C4",
                }}
              >
                5 min
              </p>
              <p
                style={{
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  fontSize: 17,
                  color: "#C4C4C4",
                }}
              >
                15 min
              </p>
              <p
                style={{
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  fontSize: 17,
                  color: "black",
                }}
              >
                1 hr
              </p>
              <p
                style={{
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  fontSize: 17,
                  color: "#C4C4C4",
                }}
              >
                4 hr
              </p>
              <p
                style={{
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  fontSize: 17,
                  color: "#C4C4C4",
                }}
              >
                1 day
              </p>
            </div>
            <Graph />
          </div>
          <div style={{ width: 406, height: 540 }}>
            <div
              className="bg-white flex items-center pl-5 gap-x-10"
              style={{ width: 406, height: 65 }}
            >
              <img src={arr} />
              <p
                style={{
                  fontFamily: "Roboto",
                  fontWeight: 500,
                  fontSize: 20,
                  color: "#969696",
                }}
              >
                Market Cap
              </p>
              <img src={upd} className="ml-36" />
            </div>
            <img src={m1} />
            <img src={m2} />
            <img src={m3} />
            <img src={m4} />
            <img src={m5} />
            <img src={m6} />
            <img src={m7} />
          </div>
        </div>
        <div className="flex items-center mt-10 gap-x-12">
          <div>
            <img
              src={credit}
              zIndex={1}
              style={{ position: "absolute", left: 330, top: 1030 }}
            />
            <img
              src={meter}
              zIndex={2}
              style={{ position: "absolute", left: 400, top: 1120 }}
            />
            <img
              src={excellent}
              zIndex={3}
              style={{ position: "absolute", left: 440, top: 1220 }}
            />
            <img
              src={pointer}
              zIndex={4}
              style={{ position: "absolute", left: 460, top: 1170 }}
            />
          </div>
          <img
            src={crypto}
            zIndex={5}
            style={{ position: "absolute", left: 900, top: 1030 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
