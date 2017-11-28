import React from 'react'

function UserForm(props) {
  let destination
  console.log(props.editDetails)
  if(props.editDetails){
    destination = 'edit'
  }else{
    destination = 'create'
  }
  return (
    <div className="UserDetails">
      <h1 className="title">Update your account info</h1>
      <form onSubmit={(e) => {props.handleSubmit(e, destination)}}>
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
        <div>
          Gender:
          <label>
            Male
            <input
              type="radio"
              onChange={props.handleInputChange}
              name="sex"
              value="male"
              checked={props.userDetails.sex && props.userDetails.sex === 'male' ? true : false}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              onChange={props.handleInputChange}
              name="sex"
              value="female"
              checked={props.userDetails.sex && props.userDetails.sex === 'female' ? true : false}
            />
          </label>
        </div>
        <input
          type="text"
          onChange={props.handleInputChange}
          name="zip"
          value={props.userDetails.zip ? props.userDetails.zip : ''}
          placeholder="Zipcode"
        />
        <input size="12px" type="submit" value="Submit" />
          <button size="12px" id="hidebutton" className={props.editDetails ? '' : 'nodisplay'} onClick={props.showEdit}>Back</button>
      </form>
    </div>
  )
}

export default UserForm
