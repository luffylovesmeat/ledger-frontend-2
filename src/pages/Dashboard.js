import React from "react";
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
import cx from "../images/cx.svg";
import { Graph } from "../components/Graph";

const Dashboard = () => {
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
                ID: xndjsdiumn878734
              </p>
              <p style={{ fontFamily: "Inter", fontWeight: 400, fontSize: 14 }}>
                Claims completed: None
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
            <img src={cx} />
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
