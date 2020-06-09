import React from 'react'
import { ListGroupItem, Button } from 'reactstrap'

const TaskItem = props => {

 // const task = props.task
  const { task } = props

  return (
    <>
      <ListGroupItem>
        { task.title }
        <Button color="danger" className="float-right ml-1">Delete</Button>
        <Button color="success" className="float-right">Complete</Button>

      </ListGroupItem>
    </>
  )
}

export default TaskItem