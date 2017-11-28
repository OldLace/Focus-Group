import React from 'react'

import UserForm from './UserForm'
import UserInfo from './UserInfo'
import ClientTasks from './ClientTasks'


class ClientPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user,
      userDetails: {},
      apiDataLoaded: false,
      editDetails: false
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.showEdit = this.showEdit.bind(this)
  }

  componentDidMount() {
    fetch(`api/client/${this.state.user.id}`,{
      credentials: 'include'
    })
    .then(res => res.json())
    .then(res => {
      if(res.client.user){
        this.setState({
          userDetails: res.client.user,
          apiDataLoaded: true
        })
        console.log(res.client.user)
      }
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

  handleSubmit(e, destination) {
    e.preventDefault()
    let method
    if(destination === 'create'){
      method = 'POST'
    }else{
      method = 'PUT'
    }
    fetch('/api/client', {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(this.state.userDetails)
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        userDetails: res.client.biz,
        apiDataLoaded: true,
        editDetails: false
      })
    })
    .catch(err => console.log(err))
  }

  showEdit() {
    this.setState({
      editDetails: !this.state.editDetails
    })
  }

  render() {
    return (
      <div className="client-page">
        {this.state.apiDataLoaded && !this.state.editDetails ?
          <UserInfo
            user={this.state.user}
            userDetails={this.state.userDetails}
            showEdit={this.showEdit}
          />
          :
          <UserForm
            handleSubmit={this.handleSubmit}
            handleInputChange={this.handleInputChange}
            userDetails={this.state.userDetails}
            editDetails={this.state.editDetails}
            showEdit={this.showEdit}
          />
        }
        <ClientTasks />
      </div>
    )
  }
}

export default ClientPage
