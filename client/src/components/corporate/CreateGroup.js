import React from 'react'

function CreateGroup(props){
  return (
    <div className="biz-users">
      <h3>Create a New Group</h3>
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

export default CreateGroup
