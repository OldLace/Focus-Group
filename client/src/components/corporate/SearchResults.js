import React from 'react'

class SearchResults extends React.Component {
  constructor(){
    super()
    this.state = {
      toggleViews: {}
    }
    this.toggleView = this.toggleView.bind(this)
  }

  toggleView(id) {
    console.log(id)
    // console.log(name)
    let toggled
    if(this.state.toggleViews[id]){
      toggled = false
    }else{
      toggled = true
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
          <ul>
          {this.props.searchResults.map((el, index) => {
            return <li onClick={(e)=>{this.toggleView(el.id)}} key={index}>{el.firstname} {el.lastname}
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
