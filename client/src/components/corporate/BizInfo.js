import React from 'react'

function BizInfo(props) {
  return (
    <div className="biz-info">
      <h1>Business Details</h1>
      <div>
        <ul>
          <li>Business Name: {props.bizDetails.bizname}</li>
          <li>Street Address: {props.bizDetails.street_address}</li>
          <li>City: {props.bizDetails.city}</li>
          <li>State: {props.bizDetails.state}</li>
          <li>Zipcode: {props.bizDetails.zip}</li>
          <li>Company URL: {props.bizDetails.biz_url}</li>
          <li>Business description: {props.bizDetails.biz_description}</li>
        </ul>
      </div>
    </div>
  )
}

export default BizInfo
