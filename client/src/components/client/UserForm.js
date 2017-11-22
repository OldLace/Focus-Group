import React from 'react'

function UserForm(props) {
  return (
    <div className="UserDetails">
      <h1>Update your account info</h1>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          onChange={props.handleInputChange}
          name="age"
          value={props.userDetails.age ? props.userDetails.age : ''}
          placeholder="Age"
        />
        <input
          type="text"
          onChange={props.handleInputChange}
          name="height"
          value={props.userDetails.height ? props.userDetails.height : ''}
          placeholder="Height"
        />
        <input
          type="text"
          onChange={props.handleInputChange}
          name="weight"
          value={props.userDetails.weight ? props.userDetails.weight : ''}
          placeholder="Weight"
        />
        <input
          type="number"
          onChange={props.handleInputChange}
          name="income"
          value={props.userDetails.income ? props.userDetails.income : ''}
          placeholder="Income"
        />
        <input
          type="text"
          onChange={props.handleInputChange}
          name="street_address"
          value={props.userDetails.street_address ? props.userDetails.street_address : ''}
          placeholder="Street address"
        />
        <input
          type="text"
          onChange={props.handleInputChange}
          name="city"
          value={props.userDetails.city ? props.userDetails.city : ''}
          placeholder="City"
        />
        <input
          type="text"
          onChange={props.handleInputChange}
          name="state"
          value={props.userDetails.state ? props.userDetails.state : ''}
          placeholder="State"
        />
        <input
          type="text"
          onChange={props.handleInputChange}
          name="zip"
          value={props.userDetails.zip ? props.userDetails.zip : ''}
          placeholder="Zipcode"
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default UserForm
