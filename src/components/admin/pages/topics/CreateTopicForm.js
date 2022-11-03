import React from 'react'
import Button from 'react-bootstrap/Button'

import { Form } from 'react-bootstrap'

export default function CreateTopicForm ({ handleSubmit, topicValue }) {
  return (
    <Form onSubmit={handleSubmit} id='createTopicForm'>
      <Form.Group className='mb-3' controlId='topicName'>
        <Form.Label>topic name</Form.Label>
        <Form.Control />
        <Form.Text className='text-muted'>Create new topic</Form.Text>
      </Form.Group>
      <Button size='sm' hidden={true} type='submit'></Button>
    </Form>
  )
}
