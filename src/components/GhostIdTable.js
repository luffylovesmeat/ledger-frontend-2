import React from 'react'
import './GhostID.css'

const GhostID = () => {

  const ghostID = 'abc.....xyz'
  

  return (
    
      <div className='main'> 
      <div className="claimBox">
        <span className='heading'>My Claim</span>
        <span className='ghostId'>Ghost ID : { ghostID}</span>
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
          </div>
          <div className="slot">
            <span className="claim"></span>
            <span className="value"></span>
          </div>
          <div className="slot">
            <span className="claim"></span>
            <span className="value"></span>
          </div>
        </div>
      </div>
      </div>
    )
    
}

export default GhostID