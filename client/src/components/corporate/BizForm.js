import React from 'react'

function bizDetails(props) {
  return (
    <div className="biz-form">
      <h1>Update your account info</h1>
      <form onSubmit={(e)=>{props.handleSubmit(e, 'bizDetails')}}>
        <input
          type="text"
          onChange={(event)=>{props.handleInputChange(event, 'bizDetails')}}
          name="bizname"
          value={props.bizDetails.bizname ? props.bizDetails.bizname : ''}
          placeholder="Business Name"
        />
        <input
          type="text"
          onChange={(event)=>{props.handleInputChange(event, 'bizDetails')}}
          name="street_address"
          value={props.bizDetails.street_address ? props.bizDetails.street_address : ''}
          placeholder="Street Address"
        />
        <input
          type="text"
          onChange={(event)=>{props.handleInputChange(event, 'bizDetails')}}
          name="city"
          value={props.bizDetails.city ? props.bizDetails.city : ''}
          placeholder="City"
        />
        <input
          type="text"
          onChange={(event)=>{props.handleInputChange(event, 'bizDetails')}}
          name="state"
          value={props.bizDetails.state ? props.bizDetails.state : ''}
          placeholder="State"
        />
        <input
          type="text"
          onChange={(event)=>{props.handleInputChange(event, 'bizDetails')}}
          name="zip"
          value={props.bizDetails.zip ? props.bizDetails.zip : ''}
          placeholder="Zipcode"
        />
        <input
          type="text"
          onChange={(event)=>{props.handleInputChange(event, 'bizDetails')}}
          name="biz_url"
          value={props.bizDetails.biz_url ? props.bizDetails.biz_url : ''}
          placeholder="Business website URL"
        />
        <input
          type="text"
          onChange={(event)=>{props.handleInputChange(event, 'bizDetails')}}
          name="biz_description"
          value={props.bizDetails.biz_description ? props.bizDetails.biz_description : ''}
          placeholder="Business Description"
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default bizDetails
