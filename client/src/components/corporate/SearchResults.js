import React from 'react'

class SearchResults extends React.Component {
  constructor(){
    super()
    this.state = {
      toggleViews: {
        addBtn: false
      }
    }
    this.toggleView = this.toggleView.bind(this)
  }

  toggleView(id, btnId) {
    console.log(id)
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
}

export default SearchResults
