import React from 'react'
import TaskForm from './TaskForm/TaskForm'
import TaskList from './TaskList/TaskList'

const TaskManager = props => {
  return (
    <>
      <p>Hello from TaskManager</p>
      <TaskForm />
      <TaskList />
    </>
  )
}

export default TaskManager