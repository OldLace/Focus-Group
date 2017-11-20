import React from 'react'

import UserDetails from './UserDetails'

class ClientPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user,
      userDetails: {}
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // componentDidMount() {
  //   fetch(`api/groups/${this.state.user.id}`)
  //   .then(res => res.json())
  //   .then(res => {
  //     this.setState({
  //       userDetails: res.data
  //     })
  //   })
  //   .catch(err => console.log(err))
  // }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState((prevState,props) => {
      return {
        userDetails: Object.assign({}, prevState.userDetails, {[name]: value})
      }
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    fetch('/api/client', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(this.state.userDetails)
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
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          userDetails={this.state.userDetails}
        />
      </div>
    )
  }
}

export default ClientPage
