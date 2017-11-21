import React from 'react'

function GroupMembers(props) {
  return (
    <div className="group-members">
      <h3>Current Focus Group Members</h3>
      <p>
    </div>

class GroupMembers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: {};
      apiDataLoaded: false
    }
  }
}

componentDidMount() {
  fetch(api/user_id/)
    .then(res => res.json())
    .then(res => {
      if(res.campaign_users)
    })
}





export module GroupMembers;
