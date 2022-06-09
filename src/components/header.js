import { Tooltip } from '@mui/material'
import { Link,useLocation } from "react-router-dom";
import search from "../images/search.svg";
import logo from "../images/logo.svg";
import wallet from "../images/wallet.svg";
const Header =()=> {
    const location = useLocation()
    console.log(location,"location")
  return(
    <div className="container flex pt-4 items-center justify-center pb-4 gap-x-16 mx-auto px-8">
    {
        location.pathname !== "/dashboard"?
        <Link to="/dashboard">
        <div className="flex items-center">
        <img src={logo} width={35} height={35} />

            <p style={{ fontFamily: "Roboto", fontSize: 20, fontWeight: 700 }}>
            LedgerScore
            </p>
        </div>
    </Link>:
    <p
    className='nav--logo'
    >Dashboard</p>
    }
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
          maxWidth:"500px"
        }}
        placeholder="Search..."
      />
    </div>
    <div className="flex items-center">
      <img src={logo} width={44} height={44} />
      <p style={{ fontFamily: "Roboto", fontWeight: 600, fontSize: 17, minWidth:"120px" }}>
        $ 0.00156
      </p>
    </div>
    <Tooltip interactive={true}
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
                                            // onClick={() => {
                                            //     if (!userAccount) {
                                            //         openModal();
                                            //     }
                                            // }}
                                        >
                                            Disconnect
                                        </button>
                                    
                                }>
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
            ox...edf8
          </p>
        </div>
      
    </div></Tooltip>
  </div>
  )
}

export default Header