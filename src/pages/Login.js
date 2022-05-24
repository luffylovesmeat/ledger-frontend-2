import React from "react";
import logo from "../images/logo.svg";
import eye from "../images/eye.svg";
import create from "../images/create.svg";
import ghost from "../images/ghost.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      style={{
        height: 900,
        width: 866,
        border: "1px solid white",
        backgroundColor: "white",
      }}
      className="flex flex-col gap-y-10"
    >
      <div
        className="flex items-center justify-center"
        style={{ paddingTop: 39 }}
      >
        <img src={logo} />
        <p style={{ fontFamily: "Roboto", fontWeight: 600, fontSize: 44 }}>
          LedgerScore
        </p>
      </div>
      <p
        style={{
          fontFamily: "Roboto",
          fontWeight: 600,
          fontSize: 25,
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
            height: 79,
            fontFamily: "Roboto",
            fontWeight: 400,
            fontSize: 23,
            paddingLeft: 22,
          }}
        />
        <Link to="/wallet">
          <button
            style={{
              width: 186,
              height: 79,
              background: "linear-gradient(90deg, #B279F7 0%, #6E51E2 100%)",
              borderRadius: "0px 10px 10px 0px",
              color: "white",
              fontFamily: "Roboto",
              fontWeight: 400,
              fontSize: 23,
            }}
          >
            Fetch Ghost ID
          </button>
        </Link>
      </div>
      <p
        style={{
          fontFamily: "Roboto",
          fontWeight: 600,
          fontSize: 25,
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
            height: 79,
            fontFamily: "Roboto",
            fontWeight: 400,
            fontSize: 23,
            paddingLeft: 22,
          }}
        />
        <div
          style={{
            width: 62,
            height: 79,
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
      <button
        style={{
          fontFamily: "Roboto",
          fontWeight: 600,
          fontSize: 32,
          width: 672,
          height: 79,
          background: "linear-gradient(90deg, #B279F7 0%, #6E51E2 100%)",
          borderRadius: 10,
          marginLeft: 97,
          color: "white",
          marginTop: 30,
        }}
      >
        LOGIN
      </button>
      <Link to="/register">
        <img src={create} style={{ paddingLeft: 97, paddingRight: 97 }} />
      </Link>
      <div className="flex justify-center items-center">
        <img src={ghost} />
      </div>
    </div>
  );
};

export default Login;
