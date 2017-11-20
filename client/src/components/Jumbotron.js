import React from 'react';
import Login from './auth/Login'
import Register from './auth/Register'

class Jumbotron extends React.Component {
  constructor() {
    super()
    this.state = {
      authDisplay:false
    }
  }
  render() {
    return (
      <div className="hero">
        <div>
        {this.state.authDisplay ?
          <Register
            handleRegisterSubmit={this.props.handleRegisterSubmit}
          /> :
          <Login handleLoginSubmit={this.props.handleRegisterSubmit} />
        }
        </div>
      </div>
    )
  }
}

export default Jumbotron
