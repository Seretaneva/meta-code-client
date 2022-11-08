import React from 'react'
import Button from 'react-bootstrap/Button'

import { Form } from 'react-bootstrap'

export default function EditLessonForm ({ handleSubmit, lessonValue }) {
  return (
    <Form onSubmit={handleSubmit} id='lessonForm'>
      <Form.Group className='mb-3' controlId='lessonId'>
        <Form.Label>lesson name</Form.Label>
        <Form.Control defaultValue={lessonValue} />
        <Form.Text className='text-muted'>Edit lesson!</Form.Text>
      </Form.Group>
      <Button size='sm' hidden={true} onClick={console.log(lessonValue)}></Button>
    </Form>
  )
}