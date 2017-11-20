import React from 'react'

function ClientTasks(props) {
  return (
    <div className="client-tasks">
      <h3>List of tasks from corporate (placeholder)</h3>
      <ul>
        <li><span>A task</span><span><button className="accept">Accept</button><button className="decline">Decline</button></span></li>
        <li><span>A task</span><span><button className="accept">Accept</button><button className="decline">Decline</button></span></li>
      </ul>
    </div>
  )
}

export default ClientTasks
