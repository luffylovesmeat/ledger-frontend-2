import React, { useEffect, useState } from "react";
import logo from "../images/logo.svg";
import eye from "../images/eye.svg";
import create from "../images/create.svg";
import ghost from "../images/ghost.svg";
import { Link } from "react-router-dom";
import Web3 from "web3";
import axios from "axios";

// Custom Hooks
import useResponsive from "../customhooks/useResponsive";

const Login = () => {
  const [address, setAddress] = useState("");
  const width = useResponsive();
  const web3 = new Web3(Web3.givenProvider);
  const fetchAddress = async () => {
    await window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then(async (res) => {
        const addresses = await web3.eth.getAccounts();
        setAddress(addresses[0]);
      });
  };

  const checkIfAvailable = async () => {
    var addresses;
    await window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then(async (res) => {
        addresses = await web3.eth.getAccounts();
        setAddress(addresses[0]);
      })
      .then(async (res) => {
        await axios
          .post(`${process.env.REACT_APP_BACKEND_URL}/id/getGhostId`, {
            address: addresses[0],
          })
          .then((res) => {
            console.log(res, "res");
            if (res.data.ghostId) {
              localStorage.setItem("GhostId", res.data.ghostId);
              window.location.href = "/dashboard";
            } else {
              window.location.href = "/wallet";
            }
          });
      });
  };

  useEffect(() => {
    checkIfAvailable();
  }, []);
  return (
    <div
      style={
        width > 778
          ? {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 30,
              paddingBottom: 30,
              backgroundColor: "#F8F8FE",
              height: "100vh",
            }
          : {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 30,
              paddingBottom: 30,
              backgroundColor: "#F8F8FE",
              height: "100vh",
              width: "80%",
              margin: "0 auto",
            }
      }
    >
      <div
        style={
          width > 778
            ? {
                height: 600,
                width: "100%",
                border: "1px solid white",
                backgroundColor: "white",
              }
            : {
                height: 600,
                width: "100%",
                border: "1px solid white",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }
        }
        className="flex flex-col gap-y-5"
      >
        <div
          className="flex items-center justify-center"
          style={{ paddingTop: 10 }}
        >
          <img src={logo} />
          <p style={{ fontFamily: "Roboto", fontWeight: 600, fontSize: 34 }}>
            LedgerScore
          </p>
        </div>
        <p
          style={{
            fontFamily: "Roboto",
            fontWeight: 600,
            fontSize: 15,
            paddingLeft: 97,
          }}
        >
          Ghost ID
        </p>
        <div style={{ marginLeft: 97, borderRadius: 10 }}>
          <input
            placeholder="Enter Ghost ID"
            style={{
              backgroundColor: "#F8F8FE",
              width: 476,
              height: 50,
              fontFamily: "Roboto",
              fontWeight: 400,
              fontSize: 18,
              paddingLeft: 22,
            }}
            value={address}
          />
          <button
            style={{
              width: 186,
              height: 50,
              background: "linear-gradient(90deg, #B279F7 0%, #6E51E2 100%)",
              borderRadius: "0px 10px 10px 0px",
              color: "white",
              fontFamily: "Roboto",
              fontWeight: 400,
              fontSize: 23,
            }}
            onClick={() => fetchAddress()}
          >
            Fetch Ghost ID
          </button>
        </div>
        <p
          style={{
            fontFamily: "Roboto",
            fontWeight: 600,
            fontSize: 15,
            paddingLeft: 97,
          }}
        >
          Password
        </p>
        <div style={{ marginLeft: 97, borderRadius: 10 }} className="flex ">
          <input
            placeholder="Enter Password"
            style={{
              backgroundColor: "#F8F8FE",
              width: 600,
              height: 50,
              fontFamily: "Roboto",
              fontWeight: 400,
              fontSize: 18,
              paddingLeft: 22,
            }}
          />
          <div
            style={{
              width: 62,
              height: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#F8F8FE",
              borderRadius: "0px 10px 10px 0px",
            }}
          >
            <img src={eye} width={38.17} height={36} />
          </div>
        </div>
        <Link to="/dashboard">
          <button
            style={{
              fontFamily: "Roboto",
              fontWeight: 600,
              fontSize: 32,
              width: 672,
              height: 50,
              background: "linear-gradient(90deg, #B279F7 0%, #6E51E2 100%)",
              borderRadius: 10,
              marginLeft: 97,
              color: "white",
              marginTop: 10,
            }}
          >
            LOGIN
          </button>
        </Link>
        <Link to="/wallet">
          <img src={create} style={{ paddingLeft: 97, paddingRight: 97 }} />
        </Link>
        <div className="flex justify-center items-center">
          <img src={ghost} />
        </div>
      </div>
    </div>
  );
};

export default Login;
