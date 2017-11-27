import React from 'react'


// class ClientDetails extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       shown: true
//     }
//     this.hide = this.hide.bind(this)
//   }

//   hide() {
//     this.setState({
//       shown: false
//     })
//   }

//   render() {
//     if(this.props.userInfoLoaded && this.state.shown){
//       return (
//         <div className="client-details">
//           <button onClick={this.hide}>X</button>
//           <ul>
//             <li>Username: {this.props.username}</li>
//             <li>Name: {this.props.firstname} {this.props.lastname}</li>
//             <li>Address: {this.props.address} {this.props.city} {this.props.state} {this.props.zip}</li>
//             <li>Height: {this.props.height}</li>
//             <li>Weight: {this.props.weight}</li>
//             <li>Age: {this.props.age}</li>
//             <li>Income: {this.props.income}</li>
//           </ul>
//         </div>
//       )
//     }else{
//       return (
//         <div></div>
//       )
//     }
//   }
// }

function ClientDetails(props) {
  if(props.userInfoLoaded){
    return (
      <div className={props.shown ? 'client-details' : 'nodisplay'}>
        <button onClick={props.hideUserDetails}>X</button>
        <ul>
          <li>Username: {props.userInfo.username}</li>
          <li>Name: {props.userInfo.firstname} {props.userInfo.lastname}</li>
          <li>Address: {props.userInfo.address} {props.userInfo.city} {props.userInfo.state} {props.userInfo.zip}</li>
          <li>Height: {props.userInfo.height}</li>
          <li>Weight: {props.userInfo.weight}</li>
          <li>Age: {props.userInfo.age}</li>
          <li>Income: {props.userInfo.income}</li>
        </ul>
      </div>
    )
  }else{
    return (
      <div></div>
    )
  }
}

function BizShowGroups(props) {
  if(props.groupsLoaded){
    let uniqueGroup = []
    props.groups.forEach((el) => {
      let invalid = uniqueGroup.find((item) => {
        return item === el.group_name
      })
      if(!invalid){
        uniqueGroup.push(el.group_name)
      }
    })
    console.log(uniqueGroup)
    return (
      <div className="show-groups">
        {uniqueGroup.map((el) => {
          return (
            <div key={el} className="focus-group">
              <div className="focus-group-title">{el}
                <button
                  className="remove-from-group"
                  title="Delete this group"
                  onClick={(event) => { props.deleteGroup(el)}}
                >X</button>
              </div>
                <ul>
                  {props.groups.map((item, index) => {
                    if(item.group_name === el && item.biz_id !== item.user_id) {
                      return <li key={el.id}>{item.username}
                                <button
                                  className="user-details"
                                  title="User details"
                                  onClick={(event) => {props.showUserDetails(item.user_id)}}
                                >Info</button>
                                <button
                                  className="remove-from-group"
                                  title="remove from group"
                                  onClick={(event) => { props.removeFromGroup(item.biz_id, item.user_id, item.group_name) }}
                                >X</button>
                              </li>
                    }
                  })}
                </ul>
            </div>
          )
        })}
        <ClientDetails
          userInfo={props.userInfo}
          userInfoLoaded={props.userInfoLoaded}
          shown={props.shown}
          hideUserDetails={props.hideUserDetails}
        />
      </div>
    )
  }else{
    return (
      <div>
      </div>
    )
  }
}

export default BizShowGroups
