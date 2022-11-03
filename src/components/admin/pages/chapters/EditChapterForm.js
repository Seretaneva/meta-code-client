import React from 'react'
import Button from 'react-bootstrap/Button'

import { Form } from 'react-bootstrap'

export default function EditChapterForm ({ handleSubmit, chapterValue }) {
  return (
    <Form onSubmit={handleSubmit} id='chapterForm'>
      <Form.Group className='mb-3' controlId='chapterName'>
        <Form.Label>chapter name</Form.Label>
        <Form.Control defaultValue={chapterValue} />
        <Form.Text className='text-muted'>Edit chapter!</Form.Text>
      </Form.Group>
      <Button size='sm' hidden={true} type='submit'></Button>
    </Form>
  )
}
