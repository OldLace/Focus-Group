import React from 'react'

function ClientTasks(props) {
  return (
    <div className="client-tasks">
      <h1>Pending Tasks</h1>
      <div className="task">
        <div id="task-name">
          <p>Name:</p>
        </div>
        <div id="task-date">
          <p>Date:</p>
        </div>
      </div>
    </div>
  )
}

export default ClientTasks