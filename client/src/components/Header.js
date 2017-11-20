import React from 'react';
import {Link} from 'react-router-dom'
import FontAwesome from 'react-fontawesome'


function Dropdown(props) {
  return (
    <div className={ props.toggled ? 'header-dropdown' : 'nodisplay header-dropdown' }>
      <ul>
        <li>Login (Placeholder)</li>
        <li>Logout (Placeholder)</li>
      </ul>
    </div>
  )
}

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      dropDown: false
    }
    this.toggleDropdown = this.toggleDropdown.bind(this)
  }

  toggleDropdown() {
    this.setState({
      dropDown: !this.state.dropDown
    })
  }

  render() {
    return (
      <header>
        <Link to="/"><div className="logo">Home</div></Link>
        <FontAwesome name="bars" onClick={this.toggleDropdown}/>
        <Dropdown toggled={this.state.dropDown} />
      </header>
    )
  }
}

export default Header
