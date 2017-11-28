import React from 'react'

function BizInfo(props) {
  return (
    <div className="biz-info">
      <div className="biz-account-details">
        <h1>Account Details</h1>
      </div>
      <div className="biz-details-wrap">
        <div className="photo"></div>
        <div className="biz-details">
          <p>Business Name: {props.bizDetails.bizname}</p>
          <p>Street Address: {props.bizDetails.street_address}</p>
        </div>
        <div className="edit-button">
          <button>Profile Settings</button>
        </div>
      </div>
    </div>
  )
}

export default BizInfo

