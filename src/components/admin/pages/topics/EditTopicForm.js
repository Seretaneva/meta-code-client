import React from 'react'
import Button from 'react-bootstrap/Button'

import { Form } from 'react-bootstrap'

export default function EditTopicForm ({ handleSubmit, topicValue }) {
  return (
    <Form onSubmit={handleSubmit} id='myForm'>
      <Form.Group className='mb-3' controlId='topicName'>
        <Form.Label>topic name</Form.Label>
        <Form.Control defaultValue={topicValue} />
        <Form.Text className='text-muted'>Edit pls topic name!</Form.Text>
      </Form.Group>
      <Button size='sm' hidden={true} type='submit'></Button>
    </Form>
  )
}
