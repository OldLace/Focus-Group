import React from 'react'

import BizInfo from './BizInfo'
import BizForm from './BizForm'
import SearchUsers from './SearchUsers'

class CorporatePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user,
      bizDetails: {},
      apiDataLoaded: false,
      searchQuery: {
        height:[false,false,false,false],
        weight:[false,false,false,false],
        income:[false,false,false,false],
        age:[false,false,false,false]
      },
      searchResults: {},
      searchResultsLoaded: false
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
    if(destination === 'bizDetails'){
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
    }else{
      fetch('/api/biz/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(this.state.searchQuery)
      })
      .then(res => res.json())
      .then(res => {
        this.setState({
          searchResults: res.searchResults,
          searchResultsLoaded: true
        })
      })
    }
  }

  render() {
    return (
      <div className="biz-page">
        <div className="business-details-top">
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
        <div className="business-search-right">
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
