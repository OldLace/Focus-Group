import React from 'react'

function UserInfo(props) {
  return (
    <div className="user-info">
      <h1>Account Details</h1>
      <div>
        <ul>
          <li>First Name: {props.user.firstname}</li>
          <li>Last Name: {props.user.lastname}</li>
          <li>Username: {props.user.username}</li>
          <li>Email: {props.user.email}</li>
          <li>Age: {props.userDetails.age}</li>
          <li>Gender: {props.userDetails.sex}</li>
          <li>Height: {props.userDetails.height}</li>
          <li>Weight: {props.userDetails.weight}</li>
          <li>Income: {props.userDetails.income}</li>
          <li>Street address: {props.userDetails.street_address}</li>
          <li>City: {props.userDetails.city}</li>
          <li>State: {props.userDetails.state}</li>
          <li>Zip Code: {props.userDetails.zip}</li>
        </ul>
      </div>
    </div>
  )
}

export default UserInfo
