import React from 'react'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function CreateLessonContents ({ addContent }) {
  const [contentIndex, setContentIndex] = useState('')

  const handleChangeIndex = event => setContentIndex(event.target.value)

  const [contentImage, setContentImage] = useState(undefined)

  const handleChangeImage = event => {
    setContentImage(URL.createObjectURL(event.target.files[0]))
  }

  const [contentType, setContentType] = useState('PARAGRAPH')

  const [contentParagraph, setContentParagraph] = useState('')

  const handleChangeParagraph = event => setContentParagraph(event.target.value)

  const handleSubmit = event => {
    event.preventDefault()

    addContent({ contentIndex, contentParagraph, contentImage })
    setContentParagraph(' ')
    setContentIndex(' ')
    setContentImage(undefined)
  }

  const selectedForm =
    contentType === 'PARAGRAPH' ? (
      <div>
        {' '}
        <Form.Label>Content</Form.Label>
        <Form.Control
          name='paragraph'
          id='paragraph'
          as='textarea'
          type='text'
          onChange={handleChangeParagraph}
          value={contentParagraph}
        />
      </div>
    ) : (
      <div>
        <Form.Label style={{ marginTop: 20 }}>Add image</Form.Label>
        <input
          type='file'
          name='contentImage'
          id='contentImage'
          // checked={contentImage === 'contentImage'}
          onChange={handleChangeImage}
        />
        {console.log(contentImage)}
      </div>
    )

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>content index</Form.Label>
        <Form.Control
          name='contentIndex'
          id='contentIndex'
          type='contentIndex'
          value={contentIndex}
          onChange={handleChangeIndex}
        />

        <Form.Label>Content type</Form.Label>
        <Form.Control
          as='select'
          value={contentType}
          onChange={e => {
            setContentType(e.target.value)
          }}
        >
          <option value='PARAGRAPH'>paragraph</option>
          <option value='IMAGE'>image</option>
          <option value='CODESNIPET'>code snipet</option>
          <option value='SUBTITLE'>subtitle</option>
          <option value='ENUMERATION'>enumeration</option>
        </Form.Control>

        {selectedForm}
      </Form.Group>

      <Button variant='secondary' style={{ margin: 20 }} type='submit'>
        add content
      </Button>
    </Form>
  )
}
export default CreateLessonContents
