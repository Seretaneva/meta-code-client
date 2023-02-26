import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import EditLessonForm from './EditLessonForm'
import { FaRegEdit } from 'react-icons/fa'

export default function EditLesson (props) {
  const [show, setShow] = React.useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleSubmit = e => {
    e.preventDefault()
    const lessonId = props.lessonId
    const newLessonName = e.target[0].value

    const headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')} `,
      'Access-Control-Allow-Origin': '*'
    })

    var jsonData = {
      lessonName: newLessonName
    }

    fetch(`http://localhost:8080/admin/lesson/edit/${lessonId}`, {
      method: 'PUT',
      body: JSON.stringify(jsonData),
      headers: headers,
      mode: 'cors'
    }).then(() => {
      window.location.reload(false)
    })
    handleClose()
  }

  return (
    <>
      <Button variant='link' onClick={handleShow}>
        <FaRegEdit color='black' />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <EditLessonForm
            handleSubmit={handleSubmit}
            lessonValue={props.lessonName}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' type='submit' form='lessonForm'>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
