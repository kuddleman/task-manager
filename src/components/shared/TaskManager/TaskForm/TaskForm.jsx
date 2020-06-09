import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const TaskForm = props => {

  return (
    <>
    <p>Hello from TaskForm</p>
    <Form>
      <FormGroup>
        <Label htmlFor="title">Title</Label>
        <Input id="title"/>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="description">Description</Label>
        <Input type="textarea" id="description" rows="5"/>
      </FormGroup>
      <Button color="primary">Add</Button>
    </Form>
    </>
  )
}

export default TaskForm