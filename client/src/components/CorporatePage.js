import React from 'react'

import BizInfo from './BizInfo'
import BizForm from './BizForm'

class CorporatePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user,
      bizDetails: {},
      apiDataLoaded: false
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    fetch(`api/biz/${this.state.user.id}`)
    .then(res => res.json())
    .then(res => {
      if(res.biz.biz){
        this.setState({
          bizDetails: res.biz.biz,
          apiDataLoaded: true
        })
        console.log(res.biz)
      }
    })
    .catch(err => console.log(err))
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState((prevState,props) => {
      return {
        bizDetails: Object.assign({}, prevState.bizDetails, {[name]: value})
      }
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    fetch('/api/biz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(this.state.bizDetails)
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        bizDetails: res.biz.biz,
        apiDataLoaded: true
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="biz-page">
        {this.state.apiDataLoaded ?
          <BizInfo
            user={this.state.user}
            bizDetails={this.state.bizDetails}
          />
          :
          <BizForm
            handleSubmit={this.handleSubmit}
            handleInputChange={this.handleInputChange}
            bizDetails={this.state.bizDetails}
          />
        }
      </div>
    )
  }
}

export default CorporatePage
