import React from 'react'

function UserList(props) {
  return (
    <div className="results-list">
      <ul>
        {
          props.searchResults.map((el)=> {
            return <li key={el.username} onClick={(e)=>{props.renderClientView(e, el)}}>{el.firstname} {el.lastname}</li>
          })
        }
      </ul>
    </div>
  )
}

function ClientView(props) {
    if(!props.clientViewEnabled){
      return (
        <div className="client-profile">
          <p>Click a user from the list to view details.</p>
        </div>
      )
    }else{
      let uniqueGroups = []
      props.groups.map((el) => {
        if(!uniqueGroups.find((item) => {
            return item === el.group_name
        })){
          uniqueGroups.push(el.group_name)
        }
      })
      return (
        <div className="client-profile">
          <h3>{props.client.username}</h3>
          <div className="client-details">
            <ul>
              <li>Name: {props.client.firstname} {props.client.lastname}</li>
              <li>Age: {props.client.age}</li>
              <li>Height: {props.client.height}</li>
              <li>Weight: {props.client.weight}</li>
              <li>Income: {props.client.income}</li>
              <li>Gender: {props.client.sex}</li>
              <li>Address: {props.client.street_address} {props.client.city}, {props.client.state} {props.client.zip}</li>
            </ul>
          </div>
          <div className="client-options">
            <span>Add to group:</span>
            <select value={props.selectValue} onChange={(e)=>{props.handleChange(e); props.addToGroup(e, props.client.user_id)}}>
              <option value="0">---</option>
              {uniqueGroups.map((el, index) => {
                return (
                  <option value={el}>{el}</option>
                )
              })}
            </select>
          </div>
        </div>
      )
    }
  }

class SearchResults extends React.Component {
  constructor() {
    super()
    this.state = {
      clientView: {},
      clientViewEnabled: false,
      selectValue: 0
    }
    this.renderClientView = this.renderClientView.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  renderClientView(e, obj){
    this.setState({
      clientView: obj,
      clientViewEnabled: true
    })
  }
  handleChange(e) {
    let value = e.target.value
    this.setState({
      selectValue: value
    })
  }
  render() {
    return (
      <div className="search-results">
        <UserList searchResults={this.props.searchResults} renderClientView={this.renderClientView} />
        <ClientView
          client={this.state.clientView}
          clientViewEnabled={this.state.clientViewEnabled}
          groups={this.props.groups}
          addToGroup={this.props.addToGroup}
          handleChange={this.handleChange}
          selectValue={this.state.selectValue}
        />
      </div>
    )
  }
}

{/*
class SearchResults extends React.Component {
  constructor(){
    super()
    this.state = {
      toggleViews: {
        addBtn: false,
        clientView: {}
      }
    }
    this.toggleView = this.toggleView.bind(this)
  }

  toggleView(id, btnId) {
    // console.log(name)
    let toggled
    if(this.state.toggleViews[id]){
      toggled = false
    }else{
      toggled = btnId ? btnId : true
    }
    this.setState((prevState,props) => {
      return {
        toggleViews: Object.assign({}, prevState.toggleViews, {[id]: toggled})
      }
    })
  }
  render(){
    if(this.props.searchResultsInvalid){
      return (
        <div className="search-results">
          <div className="search-errorfield">
            {this.props.searchResultsInvalid}
          </div>
        </div>
      )
    }else{
      let uniqueGroups = []
      this.props.groups.map((el) => {
        if(!uniqueGroups.find((item) => {
            return item === el.group_name
        })){
          uniqueGroups.push(el.group_name)
        }
      })
      // this.props.groups.map((el, index) => {
      //           return <li key={el.id} onClick={(e)=> {
      //             this.props.addToGroup(this.state.toggleViews.addBtn, el.group_name)
      //             this.toggleView('addBtn')
      //           }}>{el.group_name}</li>
      //         })
      return (
        <div className="search-results">
          <div className={this.state.toggleViews.addBtn ? '' : 'nodisplay'}>
            <ul>
              {uniqueGroups.map((el, index) => {
                return <li key={index} onClick={(e)=> {
                  this.props.addToGroup(this.state.toggleViews.addBtn, el)
                  this.toggleView('addBtn')
                }}>{el}</li>
              })}
            </ul>
          </div>
          <div className="client-profile">
          <ul>
          {this.props.searchResults.map((el, index) => {
            return <li key={index}>
              <button onClick={(e)=>{this.toggleView(el.id)}}>Show Details</button>
              <button onClick={(e)=>{this.toggleView('addBtn', el.user_id)}}>Add to group</button>
              {el.firstname} {el.lastname}
              <div className={this.state.toggleViews[el.id] ? '' : 'nodisplay'}>
                <ul>
                  <li>Age: {el.age}</li>
                  <li>Height: {el.height}</li>
                  <li>Weight: {el.weight}</li>
                  <li>Income: {el.income}</li>
                  <li>Gender: {el.sex}</li>
                  <li>Address: {el.street_address} {el.city}, {el.state} {el.zip}</li>
                </ul>
              </div>
            </li>
          })}
          </ul>
        </div>
      )
    }
  }
}*/}

export default SearchResults
