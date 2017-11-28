import React from 'react'


function UserInfo(props) {
  return (
    <div className="user-info">
      <div className="account-details">
        <h1>Account Details</h1>
      </div>
      <div className="client-details-wrap">
        <div className="photo"></div>
        <div className="details">
          <p>Name: {props.user.firstname}{props.user.lastname}</p>
          <p>Age: {props.userDetails.age}</p>
          <p>Gender: {props.userDetails.sex}</p>
          <p>Zip: {props.userDetails.zip}</p>
        </div>
        <div className="edit-button">
          <button className="hidebutton" onClick={props.showEdit}>Profile Settings</button>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
