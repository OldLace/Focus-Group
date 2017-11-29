import React from 'react'

function ClientDetails(props) {
  if(props.userInfoLoaded){
    return (
      <div className="client-details-container">
        <div className={props.shown ? 'client-details' : 'nodisplay'}>
          <ul>
            <li>Username: {props.userInfo.username}</li>
            <li>Name: {props.userInfo.firstname} {props.userInfo.lastname}</li>
            <li>Address: {props.userInfo.address} {props.userInfo.city} {props.userInfo.state} {props.userInfo.zip}</li>
            <li>Height: {props.userInfo.height}</li>
            <li>Weight: {props.userInfo.weight}</li>
            <li>Age: {props.userInfo.age}</li>
            <li>Income: {props.userInfo.income}</li>
          </ul>
        </div>
      </div>
    )
  }else{
    return (
      <div></div>
    )
  }
}//Display expanded details about a group member when 'info' is clicked

export default ClientDetails
