import React,{ useEffect, useState }  from 'react'
import './GhostID.css'
import axios from "axios";
import Web3 from "web3";
import rawData from "../contracts/identity"

const GhostID = () => {

  const [ghostId, setGhostId] = useState('')
  const [counts, setCounts] = useState('')
  const [ph, setPh] = useState(false)
  const [email, setEmail] = useState(false)
  const [fb, setFb] = useState(false)
  const [kyc,setKyc] = useState(false)
  const [multiWallet,setMultiWallet] = useState([])
  const web3 = new Web3(Web3.givenProvider)

  const checkClaims = async () => {
    try {
      if (ghostId !== '') {
        const contract = new web3.eth.Contract(rawData.abi, ghostId)
        var count = 0;
        for (let i = 1; i <= 4; i++) {
          const data = await contract.methods.getClaimIdsByType(i).call()
          console.log(data,"data")
          if (data.length > 0) {
            count++;
            if(i==1){
              setPh(data.uri)
            }
            if(i==2){
              setEmail(data.uri)
            }
            if(i==3){
              setFb(true)
            }
            if(i==4) {
              setKyc(true)
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

  const getMultipleWallet = async () =>{
    try {
      if (ghostId !== '') {
        const contract = new web3.eth.Contract(rawData.abi, ghostId)
        var count = 0;
        var i = 5
        while(count == 1){
          const data = await contract.methods.getClaimIdsByType(i).call()
          if (data.uri == '') {
            count++;
          }
          else{
            setMultiWallet(wallets => [wallets,data.uri])
          }
          i++;
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
    getMultipleWallet()
  }, [ghostId])
  

  return (
    
      <div className='main'> 
      <div className="claimBox">
        <span className='heading'>My Claim</span>
        <span className='ghostId'>Ghost ID : { ghostId.slice(0,4)}...{ ghostId.slice(-3,-1)}</span>
        <span className='registerClaim'>
          <button>Register Claims</button>
        </span>
      </div>
      <div className="claimList">
        <div className="listHead">
          <span className='claimHead'>Claim</span>
          <span className='valueHead'>Value</span>
        </div>
        <div className="item">
        { ph? <div className="slot">
            <span className="claim">Phone No</span>
            <span className="value">{ph}</span>
          </div>:<></>}
          {email? <div className="slot">
            <span className="claim">Email</span>
            <span className="value">{email}</span>
          </div>:<></>}
          {fb?<div className="slot">
            <span className="claim">Facebook</span>
            <span className="value">Varified</span>
          </div>:<></>}
          {kyc?<div className="slot">
            <span className="claim">KYC</span>
            <span className="value">Varified</span>
          </div>:<></>}
          {/* <div className="slot">
            <span className="claim"></span>
            <span className="value"></span>
          </div>
          <div className="slot">
            <span className="claim"></span>
            <span className="value"></span>
          </div>
          <div className="slot">
            <span className="claim"></span>
            <span className="value"></span>
          </div>
          <div className="slot">
            <span className="claim"></span>
            <span className="value"></span>
          </div> */}
        </div>
      </div>
      </div>
    )
    
}

export default GhostID