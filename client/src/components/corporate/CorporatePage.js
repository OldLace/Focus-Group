import React from 'react'

import BizInfo from './BizInfo'
import BizForm from './BizForm'
import SearchUsers from './SearchUsers'
import BizUsers from './BizUsers'

const query = {
  height:[false,false,false,false],
  weight:[false,false,false,false],
  income:[false,false,false,false],
  age:[false,false,false,false]
}
class CorporatePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user,
      bizDetails: {},
      apiDataLoaded: false,
      searchQuery: query,
      searchResults: {},
      searchResultsLoaded: false,
      bizUsers: {},
      bizUsersLoaded: false
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

  handleInputChange(e, destination) {
    const name = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const checkValue = e.target.value;
    if(destination === 'bizDetails'){
      this.setState((prevState,props) => {
        return {
          bizDetails: Object.assign({}, prevState.bizDetails, {[name]: value})
        }
      })
    }else{
      let filteredState = this.state.searchQuery[name];
      filteredState[checkValue] = value;
      this.setState((prevState,props) => {
      return {
          searchQuery: Object.assign({}, prevState.searchQuery, {[name]: filteredState })
        }
      })
    }
  }

  handleSubmit(e, destination) {
    e.preventDefault()
    let urel, data, method
    switch(destination) {
      case 'bizDetails':
        urel = '/api/biz'
        data = this.state.bizDetails
        method = 'POST'
        break
      case 'searchUsers':
        urel = '/api/biz/search'
        data = this.state.searchQuery
        method = 'POST'
        break
      case 'bizUsers':
        urel = '/api/biz/groups'
        method = 'GET'
        break
      default:
        break;
    }
    fetch(urel, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: data ? JSON.stringify(data) : null
    })
    .then(res => res.json())
    .then(res => {
      switch(destination) {
        case 'bizDetails':
          this.setState({
            bizDetails: res.biz.biz,
            apiDataLoaded: true
          })
          break
        case 'searchUsers':
          this.setState({
            searchResults: res.data,
            searchResultsLoaded: true,
            searchQuery: query
          })
          break
        case 'bizUsers':
          this.setState({
            bizUsers: res.data,
            bizUsersLoaded: true
          })
          break
        default:
          break
      }
    })
  }
    // if(destination === 'bizDetails'){
    //   fetch('/api/biz', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     credentials: 'include',
    //     body: JSON.stringify(this.state.bizDetails)
    //   })
    //   .then(res => res.json())
    //   .then(res => {
    //     this.setState({
    //       bizDetails: res.biz.biz,
    //       apiDataLoaded: true
    //     })
    //   })
    //   .catch(err => console.log(err))
    // }else{
    //   fetch('/api/biz/search', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     credentials: 'include',
    //     body: JSON.stringify(this.state.searchQuery)
    //   })
    //   .then(res => res.json())
    //   .then(res => {
    //     this.setState({
    //       searchResults: res.searchResults,
    //       searchResultsLoaded: true
    //     })
    //   })
    // }

  render() {
    return (
      <div className="biz-page">
        <div className="business-left">
          {this.state.apiDataLoaded ?
            <div>
              <BizInfo
                user={this.state.user}
                bizDetails={this.state.bizDetails}
              />
              <BizUsers
                bizUsers={this.state.bizUsers}
                bizUsersLoaded={this.state.bizUsersLoaded}
              />
            </div>
            :
            <BizForm
              handleSubmit={this.handleSubmit}
              handleInputChange={this.handleInputChange}
              bizDetails={this.state.bizDetails}
            />
          }
        </div>
        <div className="business-right">
          <SearchUsers
            searchQuery={this.state.searchQuery}
            searchResults={this.state.searchResults}
            searchResultsLoaded={this.state.searchResultsLoaded}
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    )
  }
}

export default CorporatePage
