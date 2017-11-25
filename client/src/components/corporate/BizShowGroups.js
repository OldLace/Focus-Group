import React from 'react'

function BizShowGroups(props) {
  if(props.groupsLoaded){
    return (
      <div className="show-groups">
        {props.groups.map((el,index) => {
          return <div key={index}>{el.group_name}</div>
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
