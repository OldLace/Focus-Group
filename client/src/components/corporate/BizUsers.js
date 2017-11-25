import React from 'react'

function BizUsers(props){
  return (
    <div className="biz-users">
      <form onSubmit={(e) => {props.handleSubmit(e, 'groups')}}>
        <input
          type="text"
          name="name"
          value={props.newUser.name ? props.newUser.name : ''}
          onChange={props.userHandleInputChange}
          placeholder="Group name"
        />
        <input name="submit" type="submit" value="submit" />
      </form>
    </div>
  )
}

export default BizUsers
