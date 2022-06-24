import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate ,NavLink} from "react-router-dom";
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
import Header from "../components/header";
import { Tooltip } from '@mui/material'
import Button from '@mui/material/Button';
import GhostIdTable from "../components/GhostIdTable";

const Dashboard = () => {
  let navigate = useNavigate();
  const [ghostId, setGhostId] = useState('')
  const [counts, setCounts] = useState('')
  const [phVerified, setPhVerified] = useState(false)
  const [emailVerified, setEmailVerified] = useState(false)
  const [fbVarified, setFbVarified] = useState(false)
  const [kyc,setKyc] = useState(false)
  const [multiWallet,setMultiWallet] = useState("")
  const web3 = new Web3(Web3.givenProvider)

  const checkClaims = async () => {
    try {
      if (ghostId !== '') {
        const contract = new web3.eth.Contract(rawData.abi, ghostId)
        var count = 0;
        for (let i = 1; i <= 5; i++) {
          const data = await contract.methods.getClaimIdsByType(i).call()
          if (data.length > 0) {
            count++;
            if(i==1){
              setPhVerified(true)
            }
            if(i==2){
              setEmailVerified(true)
            }
            if(i==3){
              setFbVarified(true)
            }
            if(i==4) {
              setKyc(true)
            }
            if(i==5) {
              setMultiWallet(true)
            }
          }
        }
        console.log(count,"count")
        setCounts(count)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getGhostId = async () => {
    const account = await web3.eth.getAccounts()
    const id = localStorage.getItem("GhostId");
    console.log("id ",id);
    if (id) {
      setGhostId(id)
    }
    else {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/id/getGhostId`,
        {
          address: account[0]
        })
        .then((res) => {
          console.log("AAA ",res)
          if(res.data?.ghostId) {
            localStorage.setItem("GhostId", res.data.ghostId)
            console.log("BBB ",res)
            setGhostId(res.data.ghostId)
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }
 
  useEffect(() => {
    getGhostId()
  }, [])

  useEffect(() => {
    checkClaims()
  }, [ghostId])
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
        <div className="flex flex-col gap-y-4" >
          <p
            style={{
              color: "rgba(48, 54, 77, 0.67)",
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: 19,
              width: "200px",
              height: "45px",
              paddingTop: "8px",
              paddingLeft: "8px",
              borderRadius: "5px",
              
            }}
          >
          <NavLink to="/dashboard">Dashboard</NavLink>
          </p>
          <p
            style={{
              color: "rgba(48, 54, 77, 0.67)",
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: 19,
              background: "linear-gradient(90deg, #B279F7 0%, #6E51E2 100%)",
              width: "200px",
              height: "45px",
              paddingTop: "8px",
              paddingLeft: "8px",
              borderRadius: "5px",
              color:"white"
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
              width: "200px",
              height: "45px",
              paddingTop: "8px",
              paddingLeft: "8px",
              borderRadius: "5px",
            }}
          >
            Card
          </p>
        </div>
        <div
          style={{ backgroundColor: "#F8F8FE", width: 280, height: 200 }}
          className="flex flex-col gap-y-3"
        >
            <Button
              className={counts>=3 ? "disableBackground":"buttonRegisterClass"}
              disabled={counts>=3}
              onClick={() => {
                  if(counts<3) {
                    navigate("/register")
                  }
                }}
            >
              Register Claims
            </Button>
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
        <Header />
        <GhostIdTable/>
      </div>
    </div>
  );
};

export default Dashboard;
