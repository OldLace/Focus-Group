import React from 'react';
import Login from './auth/Login'
import Register from './auth/Register'

class Jumbotron extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      authDisplay:false
    }
    this.setAuthDisplay = this.setAuthDisplay.bind(this)
  }
  setAuthDisplay(){
    this.setState({
      authDisplay:!this.state.authDisplay
    })
  }

  render() {
    return (
      <div className="hero">
        <div>
        {this.state.authDisplay ?
          <Register
            handleRegisterSubmit={this.props.handleRegisterSubmit}
            setAuthDisplay={this.setAuthDisplay}
            apiError={this.props.apiError}
          /> :
          <Login
            handleLoginSubmit={this.props.handleLoginSubmit}
            setAuthDisplay={this.setAuthDisplay}
            apiError={this.props.apiError}
          />
        }
        </div>
      </div>
    )
  }
}

export default Jumbotron
