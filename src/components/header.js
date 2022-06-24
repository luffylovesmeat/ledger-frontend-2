import { Tooltip } from "@mui/material";
import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import search from "../images/search.svg";
import logo from "../images/logo.svg";
import wallet from "../images/wallet.svg";
import { useEffect } from "react";
import Web3 from "web3";
const Header = () => {
    const location = useLocation();
    let navigate = useNavigate();
    const [userAccount, setUserAccount] = useState("");
    const web3 = new Web3(
        Web3.givenProvider ||
            "https://speedy-nodes-nyc.moralis.io/362fc40c1ab324c15e79d4da/eth/rinkeby"
    );
    const getAddress = async () => {
        try {
            const account = await web3.eth.getAccounts();
            setUserAccount(account[0]);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getAddress();
    }, []);
    return (
        <div className="container flex pt-4 items-center justify-center pb-4 gap-x-16 mx-auto px-8">
            {location.pathname == "/dashboard" ? (
                <p className="nav--logo">Dashboard</p>

            ) : (
                location.pathname == "/ghostid" ? (
                    <p className="nav--logo">Ghost ID</p>
            ) : (
                <div className="flex items-center">
                <img src={logo} width={35} height={35} />

                <p
                    style={{
                        fontFamily: "Roboto",
                        fontSize: 20,
                        fontWeight: 700,
                    }}
                >
                    LedgerScore
                </p>
            </div>
            )
            )}
            <div className="flex w-full">
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
                    className="min-w-[40px] w-full max-w-[500px]"
                    style={{
                        height: 54,
                        borderRadius: "0px 10px 10px 0px",
                        maxWidth: "500px",
                    }}
                    placeholder="Search..."
                />
            </div>
            <div className="flex items-center">
                <img src={logo} width={44} height={44} />
                <p
                    style={{
                        fontFamily: "Roboto",
                        fontWeight: 600,
                        fontSize: 17,
                        minWidth: "120px",
                    }}
                >
                    $ 0.00156
                </p>
            </div>
            <Tooltip
                interactive={true}
                disableFocusListener
                arrow
                componentsProps={{
                    tooltip: {
                        sx: {
                            bgcolor: "common.white",
                            "& .MuiTooltip-arrow": {
                                color: "common.white",
                            },
                        },
                    },
                }}
                title={
                    <button
                        className="disconnectWallet"
                        onClick={() => {
                            localStorage.clear();
                            // window.location.reload();
                            navigate("/")
                        }}
                    >
                        Disconnect
                    </button>
                }
            >
                <div className="flex items-center">
                    <div
                        className="bg-white flex justify-center items-center"
                        style={{ borderRadius: "50%", width: 60, height: 60 }}
                    >
                        <img src={wallet} width={32.36} height={30.2} />
                    </div>

                    <div
                        className="bg-white cursor-pointer"
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
                                // paddingLeft: 22,
                            }}
                        >
                            {userAccount?.slice(0, 4)}...
                            {userAccount?.slice(-4)}
                        </p>
                    </div>
                </div>
            </Tooltip>
        </div>
    );
};

export default Header;
