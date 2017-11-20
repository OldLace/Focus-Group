import React from 'react'

function UserDetails(props) {
  return (
    <div className="UserDetails">
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          onChange={props.handleInputChange}
          name="age"
          value={props.userDetails ? props.userDetails.age : ''}
          placeholder="Age"
        />
        <input
          type="text"
          onChange={props.handleInputChange}
          name="height"
          value={props.userDetails ? props.userDetails.height : ''}
          placeholder="Height"
        />
        <input
          type="text"
          onChange={props.handleInputChange}
          name="weight"
          value={props.userDetails ? props.userDetails.weight : ''}
          placeholder="Weight"
        />
        <input
          type="number"
          onChange={props.handleInputChange}
          name="income"
          value={props.userDetails ? props.userDetails.income : ''}
          placeholder="Income"
        />
        <input
          type="text"
          onChange={props.handleInputChange}
          name="street_address"
          value={props.userDetails ? props.userDetails.street_address : ''}
          placeholder="Street address"
        />
        <input
          type="text"
          onChange={props.handleInputChange}
          name="city"
          value={props.userDetails ? props.userDetails.city : ''}
          placeholder="City"
        />
        <input
          type="text"
          onChange={props.handleInputChange}
          name="state"
          value={props.userDetails ? props.userDetails.state : ''}
          placeholder="State"
        />
        <input
          type="text"
          onChange={props.handleInputChange}
          name="zip"
          value={props.userDetails ? props.userDetails.zip : ''}
          placeholder="Zipcode"
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default UserDetails
