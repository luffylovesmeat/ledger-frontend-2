import React, { useState } from "react";
import ghost from "../images/ghost.svg";
import meta from "../images/meta.svg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Web3 from "web3";
import rawData from "../contracts/identity";
import axios from "axios";
import { Loader } from "../shared/Loader";

const Wallet = () => {
    const [address, setAddress] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [loading, setLoading] = useState(false);
    const [terms, setTerms] = useState(false);

    const web3 = new Web3(Web3.givenProvider);
    let navigate = useNavigate();

    const connectWallet = async () => {
        try {
            console.log(terms, "terms");
            setLoading(true);
            const addresses = await window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then(async (res) => {
                    setAddress(res[0]);
                    console.log("dshfklsdnf");
                    generateGhostId();
                });
        } catch (error) {
            setLoading(false);
        }
    };

    const handleClick = () => {
        if (terms == true) {
            connectWallet();
        } else {
            acceptTerms();
        }
    };
    const handleChange = async () => {
        if (terms == true) {
            setTerms(false);
        } else {
            setTerms(true);
        }
    };

    const acceptTerms = async () => {
        window.alert("Please accept the terms and conditions!");
    };

    const generateGhostId = async () => {
        try {
            console.log("it runs");
            const walletSwitch = await window?.ethereum
                .request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: "0x4" }],
                })
                .then(async (walletAdd) => {
                    const account = await web3.eth.getAccounts();
                    var RawContract = rawData;
                    var Contract = new web3.eth.Contract(RawContract.abi);
                    var tx = Contract.deploy({
                        data: "0x" + RawContract.data,
                        arguments: [[], [], [], "0x", "0x", "", [], [], []],
                    })
                        .send({ gas: 4612388, from: account[0] })
                        .on("receipt", async function (receipt) {
                            console.log("receipt ",receipt.contractAddress);
                            const getGhostId = await axios.post(
                                `${process.env.REACT_APP_BACKEND_URL}/id/saveGhostId`,
                                {
                                    address: account[0],
                                    ghostId: receipt.contractAddress,
                                }
                            );
                              console.log(getGhostId, " getGhostId");
                              localStorage.setItem("GhostId",receipt.contractAddress);
                              navigate("/dashboard");
                            setLoading(false);
                            
                        })
                        .catch((err) => {
                            console.log("err");
                            setLoading(false);
                        });
                })
                .catch(async (err) => {
                    console.log(err);
                    await window?.ethereum.request({
                        method: "wallet_addEthereumChain",
                        params: [
                            {
                                chainId: "0x4",
                                chainName: "Rinkeby",
                                rpcUrls: [
                                    "https://speedy-nodes-nyc.moralis.io/362fc40c1ab324c15e79d4da/eth/rinkeby",
                                ],
                                blockExplorerUrls: [
                                    "https://rinkeby.etherscan.io/",
                                ],
                                nativeCurrency: {
                                    symbol: "ETH",
                                    decimals: 18,
                                },
                            },
                        ],
                    });
                });
        } catch (error) {
            setLoading(false);
        }
    };

    return (
        <>
            {loading && <Loader />}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: 30,
                    paddingBottom: 30,
                    backgroundColor: "#F8F8FE",
                    height: "100vh",
                }}
            >
                <div
                    style={{
                        height: 600,
                        width: 866,
                        border: "1px solid white",
                        backgroundColor: "white",
                    }}
                    className="flex flex-col gap-y-12"
                >
                    <div className="flex justify-center items-center mt-4">
                        <img src={ghost} />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={meta} />
                    </div>
                    {/* <Link to="/dashboard"> */}
                    <button
                        style={{
                            fontFamily: "Roboto",
                            fontWeight: 600,
                            fontSize: 32,
                            width: 603,
                            height: 88,
                            background:
                                "linear-gradient(90deg, #B279F7 0%, #6E51E2 100%)",
                            borderRadius: 10,
                            marginLeft: 132,
                            color: "white",
                            marginTop: 10,
                        }}
                        onClick={() => handleClick()}
                    >
                        Create Ghost Id
                    </button>
                    {/* </Link> */}
                    <div
                        style={{ marginLeft: 161 }}
                        className="flex items-center gap-x-6"
                    >
                        <input
                            type="checkbox"
                            style={{
                                width: 13,
                                height: 11,
                                transform: "scale(3)",
                            }}
                            onChange={handleChange}
                        />
                        <p
                            style={{
                                fontFamily: "Rubik",
                                fontSize: 22,
                                fontWeight: 400,
                            }}
                        >
                            By continuing you are agreeing to our{" "}
                            <span className="text-purple-600">
                                Terms of use
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Wallet;
