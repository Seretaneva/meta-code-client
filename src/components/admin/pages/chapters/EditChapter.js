import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import EditChapterForm from './EditChapterForm'
import { FaRegEdit } from 'react-icons/fa'

export default function EditChapter (props) {
  const [show, setShow] = React.useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // Pass this callback to the LoginForm
  const handleSubmit = e => {
    e.preventDefault()
    const chapterId = props.chapterId
    const newChapterName = e.target[0].value

    const headers = new Headers({
      'Content-Type': 'application/json'
    })

    var jsonData = {
      chapterName: newChapterName
    }

    fetch(`http://localhost:8080/admin/chapter/edit/${chapterId}`, {
      method: 'PUT',
      body: JSON.stringify(jsonData),
      headers: headers
    }).then(() => {
      window.location.reload(false)
    })

    console.log(chapterId + ' ' + newChapterName)
    handleClose()
  }

  return (
    <>
      <Button variant='link' onClick={handleShow}>
        <FaRegEdit color='black' />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <EditChapterForm
            handleSubmit={handleSubmit}
            chapterValue={props.chapterName}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' type='submit' form='chapterForm'>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
