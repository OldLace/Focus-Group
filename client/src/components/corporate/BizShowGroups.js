import React from 'react'

import ClientDetails from './ClientDetails'

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
    })//Iterate through groups to find all the unique group names and
      //push into a new array that represents groups rather than group members
    return (

      <div className="show-groups">
        <div className="focus-group-wrap">
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
                    if(item.group_name === el && item.biz_id !== item.user_id) {//Ignore group members who have a user id === biz_id because they are the creator
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
      </div>
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
