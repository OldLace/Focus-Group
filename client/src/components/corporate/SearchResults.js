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
      return (
        <div className="search-results">
          <div className={this.state.toggleViews.addBtn ? '' : 'nodisplay'}>
            <ul>
              {this.props.groups.map((el, index) => {
                return <li key={el.id} onClick={(e)=> {
                  this.props.addToGroup(this.state.toggleViews.addBtn, el.group_name)
                  this.toggleView('addBtn')
                }}>{el.group_name}</li>
              })}
            </ul>
          </div>
          <ul>
          {this.props.searchResults.map((el, index) => {
            return <li key={index}>
              <button onClick={(e)=>{this.toggleView(el.id)}}>Show Details</button>
              <button onClick={(e)=>{this.toggleView('addBtn', el.id)}}>Add to group</button>
              {el.firstname} {el.lastname}
              <div className={this.state.toggleViews[el.id] ? '' : 'nodisplay'}>
                <ul>
                  <li>Age: {el.age}</li>
                  <li>Height: {el.height}</li>
                  <li>Weight: {el.weight}</li>
                  <li>Income: {el.income}</li>
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
