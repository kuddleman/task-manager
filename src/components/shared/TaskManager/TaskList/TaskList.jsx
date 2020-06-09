import React from 'react'
import { ListGroup } from "reactstrap"
import TaskItem from "./TaskItem/TaskItem"

import Task from '../../../../models/Task'

const TaskList = props => {

  const tasks = [
    new Task( 1, 'Learn French'),
    new Task( 2, 'Learn Node' ),
    new Task( 3, 'Learn Turkish'),
    new Task( 4, 'Kiss The Bunnies'),
    new Task( 5, 'Make Lunch' )
  ]


  return (
    
    <ListGroup>
      { tasks.map( item => <TaskItem key={ item.id } task={ item } /> ) }
    </ListGroup>
    
    
  )
}

export default TaskList