import React, { Component } from 'react';


class Register extends Component {
    constructor() {
      super();
      this.state = {
       email: '',
       username: '',
       password: '',
       firstname: '',
       lastname: '',
       company: null
    };
   this.handleInputChange = this.handleInputChange.bind(this)
   this.setCompany = this.setCompany.bind(this)
}

handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
        [name]: value,
    });
}

setCompany(e) {
  let value = e.target.value
  let companyType
  if(value === 'client'){
    companyType = false
  }else{
    companyType = true
  }
  this.setState({
    company: companyType
  })
}

render() {
    return (
       <div className="login">
            <form className="loginform" onSubmit={(e) => {this.props.handleRegisterSubmit(e, this.state)}}>
                <input type="text" name="firstname" value={this.state.firstname} placeholder="First Name" onChange={this.handleInputChange} />
                <input type="text" name="lastname" value={this.state.lastname} placeholder="Last Name" onChange={this.handleInputChange} />
                <input type="text" name="email" value={this.state.email} placeholder="Email Address" onChange={this.handleInputChange} />
                <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.handleInputChange} />
                <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleInputChange} />
                <label><input onChange={this.setCompany} type="radio" name="company" id="companyChoice1" value="client" checked={this.state.company ? false : true} />Client Account</label>
                <label><input onChange={this.setCompany} type="radio" name="company" id="companyChoice2" value="company" />Corporate Account</label>
                <input type="submit" value="Register" />
            </form>
            <div id="switch-login" onClick={this.props.setAuthDisplay}>Already have an account?</div>
        </div>
            )
        }
}


export default Register;
