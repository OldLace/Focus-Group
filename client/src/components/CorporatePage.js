import React from 'react'

class CorporatePage extends React.Component {

  constructor() {
    super()
    this.state = {
      groups:null
    }
    this.addToGroup = this.addToGroup.bind(this)
  }

  componentDidMount() {
    fetch(`/api/biz-routes/`)
    .then(res => res.json())
    .then((res) => {
      this.setState({
        groups: res.data.groups
      })
    })
    .catch(err => console.log(err))
  }

  addToGroup() {

  }

  render() {
    return (
      <div className="corporate-page">
        {this.state.groups ?
          this.state.groups.map(function(el){
            return (
              <div className="focus-group">
                <ul>
                {el.map(function(el, index) {
                  return <li key={index}>el.userName</li>
                })}
                </ul>
              </div>
            )
          }) :
          <div className="focus-group">
            <ul>
              <li>No Groups found</li>
            </ul>
          </div>
        }
      </div>
    )
  }
}

export default CorporatePage
