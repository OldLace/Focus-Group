import React from 'react'

import UserDetails from './UserDetails'

class ClientPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user,
      userDetails: null
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleDetailSubmit = this.handleDetailSubmit.bind(this)
  }

  componentDidMount() {
    fetch(`api/groups/${this.state.user.id}`)
    .then(res => res.json())
    .then(res => {
      this.setState({
        userDetails: res.data
      })
    })
    .catch(err => console.log(err))
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState((prevState,props) => {
      return {
        userDetails: Object.assign({}, prevState.userDetails, {[name]: value})
      }
    })
  }

  handleDetailSubmit(e, data) {
    e.preventDefault()
    fetch('/api/groups', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        userDetails: res.data
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="client-page">
        <UserDetails
          handleDetailSubmit={this.handleDetailSubmit}
          handleInputChange={this.handleInputChange}
          userDetails={this.state.userDetails}
        />
      </div>
    )
  }
}

export default ClientPage
