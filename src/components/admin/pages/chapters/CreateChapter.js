import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import CreateChapterForm from './CreateChapterForm'

export default function CreateChapter (props) {
  const [show, setShow] = React.useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleSubmit = e => {
    e.preventDefault()
    const topicId = props.topicId
    const chapterName = e.target[0].value

    const headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')} `,
      'Access-Control-Allow-Origin': '*'
    })

    var jsonData = {
      chapterName: chapterName
    }

    fetch(`http://localhost:8080/admin/chapter/create/${topicId}`, {
      method: 'PUT',
      body: JSON.stringify(jsonData),
      headers: headers,
      mode:'cors'
    }).then(() => {
      window.location.reload(false)
    })

    handleClose()
  }

  return (
    <>
      <Button variant='secondary' size='lg' onClick={handleShow}>
        Create chapter
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <CreateChapterForm
            handleSubmit={handleSubmit}
            chapterName={props.chapterName}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' type='submit' form='createChapterForm'>
            Create chapter
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
