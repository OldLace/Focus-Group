import React from 'react'

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
        {uniqueGroup.map((el, index) => {
          return (
            <div key={index} className="focus-group">
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
                      return <li key={index}>{item.username}
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
    )
  }else{
    return (
      <div>
      </div>
    )
  }
}

export default BizShowGroups
