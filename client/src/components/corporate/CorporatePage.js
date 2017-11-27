import React from 'react'

import BizInfo from './BizInfo'
import BizForm from './BizForm'
import SearchUsers from './SearchUsers'
import CreateGroup from './CreateGroup'
import BizShowGroups from './BizShowGroups'

const query = {
  height:[false,false,false,false],
  weight:[false,false,false,false],
  income:[false,false,false,false],
  age:[false,false,false,false],
  zip: ''
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
      bizUsersLoaded: false,
      searchResultsInvalid: null,
      newUser: {},
      groups: {},
      groupsLoaded: false,
      userInfo: {},
      userInfoLoaded: false,
      userDetailsShown: false
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearAll = this.clearAll.bind(this)
    this.userHandleInputChange = this.userHandleInputChange.bind(this)
    this.addToGroup = this.addToGroup.bind(this)
    this.removeFromGroup = this.removeFromGroup.bind(this)
    this.fetchGroups = this.fetchGroups.bind(this)
    this.deleteGroup = this.deleteGroup.bind(this)
    this.showUserDetails = this.showUserDetails.bind(this),
    this.hideUserDetails = this.hideUserDetails.bind(this)
    this.promptCheck = this.promptCheck.bind(this)
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
    .then(this.fetchGroups())
  }

  hideUserDetails() {
    this.setState({
      userDetailsShown: false
    })
  }//Used by 'X' button in show user details from group view to hide display

  promptCheck(message) {
    return window.confirm(message)
  }

  fetchGroups() {
      fetch(`api/groups/${this.state.user.id}`)
        .then(res => res.json())
        .then(res => {
          this.setState({
            groups: res.groups.groups,
            groupsLoaded: true
          })
        })
      .catch(err => console.log(err))
  }//Get list of groups associated with a corporate account

  addToGroup(id, name) {
    fetch(`/api/groups/${id}`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        biz_id: this.state.user.id,
        user_id: id,
        group_name: name
      })
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        groups: res.groups.groups,
        groupsLoaded: true
      })
    })
    .catch(err => console.log(err))
  }//Add a client to a group from a list returned from search results

  removeFromGroup(biz_id, user_id, group_name) {
    if(this.promptCheck('Are you sure you want to remove this user?')){
      fetch(`/api/groups/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          biz_id: biz_id,
          user_id: user_id,
          group_name: group_name
        })
      })
      .then(res => res.json())
      .then(res => {
          this.setState({
            groups: res.groups.groups,
            groupsLoaded: true
          })
        })
      .catch(err => console.log(err))
   }
  }//Remove from group - called when clicking the 'X' next to a group members name

  userHandleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    console.log('name: ', name)
    console.log('value: ', value)
    this.setState((prevState, props) => {
      return {
        newUser: Object.assign({}, prevState.newUser, {[name]: value})
      }
    })
  }//Ties state to the 'create new group' text input

  handleInputChange(e, destination) {
    const name = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;//Sets value to true/false if a checkbox, else the value of a text input
    const checkValue = e.target.value;//Gets 'value' of a checkbox input, its hidden info
    if(destination === 'bizDetails'){//Tells the function which form it is working with - the search field or the business details one.
      this.setState((prevState,props) => {
        return {
          bizDetails: Object.assign({}, prevState.bizDetails, {[name]: value})
        }
      })
    }else{
      let filteredState
      if(name === 'zip'){
        filteredState = value //If it is the zipcode field in the search form, set the value to the actual text value, otherwise to the true/false of a checkbox
      }else{
        filteredState = this.state.searchQuery[name]
        filteredState[checkValue] = value
      }
      this.setState((prevState,props) => {
      return {
          searchQuery: Object.assign({}, prevState.searchQuery, {[name]: filteredState })
        }
      })
    }
  }

  clearAll(e) {
    e.preventDefault()
    console.log('clearall fired')
    this.setState({
      searchQuery: {
        height:[false,false,false,false],
        weight:[false,false,false,false],
        income:[false,false,false,false],
        age:[false,false,false,false],
        zip: ''
      }
    })
  }//Clear all fields button used in the search form - resets all to empty.

  isValid(arr) {
    if(typeof(arr === 'string')){
       return arr !== ''
    }else{
      return arr.find((el) =>{
        return el === true
      })
    }
  }//Checks that there are actual search terms active in the search form

  handleSubmit(e, destination) {
    e.preventDefault()
    let urel, data, method
    switch(destination) {//Sets which API call to use and associated data to act upon dependent upon the destination argument
      case 'groups':
        urel= '/api/groups'
        data= this.state.newUser
        method='POST'
        break
      case 'bizDetails':
        urel = '/api/biz'
        data = this.state.bizDetails
        method = 'POST'
        break
      case 'searchUsers':
        urel = '/api/biz/search'
        let searchQuery = this.state.searchQuery
        let dataCheck = this.isValid([this.isValid(searchQuery.height),this.isValid(searchQuery.weight),this.isValid(searchQuery.income),this.isValid(searchQuery.age), this.isValid(searchQuery.zipCode)])
        data = dataCheck ? this.state.searchQuery : false
        method = 'POST'
        break
      case 'bizUsers':
        urel = '/api/groups'
        method = 'GET'
        break
      default:
        break;
    }
    if(data){
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
      switch(destination) {//What to do with the api call results according to the active form specified
        case 'groups':
          this.setState({
            groups: res.groups.groups,
            groupsLoaded: true
          })
          break
        case 'bizDetails':
          this.setState({
            bizDetails: res.biz.biz,
            apiDataLoaded: true
          })
          break
        case 'searchUsers':
          if(res.results&&res.results.filters&&res.results.filters.length){//Just typechecking because the backend needs work- result data structure can be inconsistent.
            this.setState({
              searchResults: res.results.filters,
              searchResultsLoaded: true,
              searchQuery: query,
              searchResultsInvalid: null
            })
          }else{
            this.setState({
              searchResultsInvalid: '0 matches'
            })
          }
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
    }else{//if(data) - if isValid function determines that there isn't a real search
      this.setState({
        searchResultsInvalid: 'Invalid/empty search'
      })
      return false
    }
  }

  deleteGroup(groupname) {
    if(this.promptCheck('Are you sure you want to delete this group?')){
      fetch(`/api/groups/${groupname}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          biz_id: this.state.user.id
        })
      })
      .then(res => res.json())
      .then(res => {
        this.setState({
          groups: res.groups.groups,
          groupsLoaded: true
        })
      })
      .catch(err => console.log(err))
    }
  }//Delete a group - called by clicking the X next to a group

  showUserDetails(user_id) {
    fetch(`/api/client/${user_id}`)
    .then(res => res.json())
    .then(res => {
      this.setState({
        userDetailsShown: true,
        userInfo: res.client.user,
        userInfoLoaded: true
      })
    })
  }//API call made by clicking 'info' on a user listed under a group

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
              <BizShowGroups
                groups={this.state.groups}
                groupsLoaded={this.state.groupsLoaded}
                removeFromGroup={this.removeFromGroup}
                deleteGroup={this.deleteGroup}
                showUserDetails={this.showUserDetails}
                userInfo={this.state.userInfo}
                userInfoLoaded={this.state.userInfoLoaded}
                shown={this.state.userDetailsShown}
                hideUserDetails={this.hideUserDetails}
              />
              <CreateGroup
                newUser={this.state.newUser}
                handleSubmit={this.handleSubmit}
                userHandleInputChange={this.userHandleInputChange}
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
            groups={this.state.groups}
            groupsLoaded={this.state.groupsLoaded}
            searchQuery={this.state.searchQuery}
            searchResults={this.state.searchResults}
            searchResultsLoaded={this.state.searchResultsLoaded}
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
            clearAll={this.clearAll}
            searchResultsInvalid={this.state.searchResultsInvalid}
            addToGroup={this.addToGroup}
          />
        </div>
      </div>
    )
  }
}

export default CorporatePage
