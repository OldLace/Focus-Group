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
          <ul>
            <li>Business Name: {props.bizDetails.bizname}</li>
            <li>Street Address: {props.bizDetails.street_address} {props.bizDetails.city}, {props.bizDetails.state} {props.bizDetails.zip}</li>
            <li>Website: <a href="{props.bizDetails.biz_url}">{props.bizDetails.biz_url}</a></li>
            <li>Description: {props.bizDetails.biz_description}</li>
          </ul>
        </div>
        <div className="edit-button">
          <button className="hidebutton" onClick={props.showEdit}>Profile Settings</button>
        </div>
      </div>
    </div>
  )
}

export default BizInfo

