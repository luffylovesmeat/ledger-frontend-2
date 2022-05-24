import React from "react";
import ghost from "../images/ghost.svg";
import meta from "../images/meta.svg";

const Wallet = () => {
  return (
    <div
      style={{
        height: 900,
        width: 866,
        border: "1px solid white",
        backgroundColor: "white",
      }}
      className="flex flex-col gap-y-20"
    >
      <div className="flex justify-center items-center mt-24">
        <img src={ghost} />
      </div>
      <div className="flex justify-center items-center">
        <img src={meta} />
      </div>
      <button
        style={{
          fontFamily: "Roboto",
          fontWeight: 600,
          fontSize: 32,
          width: 603,
          height: 88,
          background: "linear-gradient(90deg, #B279F7 0%, #6E51E2 100%)",
          borderRadius: 10,
          marginLeft: 132,
          color: "white",
          marginTop: 30,
        }}
      >
        Connect your Wallet
      </button>
      <div style={{ marginLeft: 161 }} className="flex items-center gap-x-6">
        <input
          type="checkbox"
          style={{ width: 13, height: 11, transform: "scale(3)" }}
        />
        <p style={{ fontFamily: "Rubik", fontSize: 22, fontWeight: 400 }}>
          By continuing you are agreeing to our{" "}
          <span className="text-purple-600">Terms of use</span>
        </p>
      </div>
    </div>
  );
};

export default Wallet;
