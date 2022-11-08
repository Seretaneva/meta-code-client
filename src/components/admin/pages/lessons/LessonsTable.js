import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaRegTrashAlt } from 'react-icons/fa'
import EditLesson from './EditLesson'

function LessonsTable () {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [lessons, setItems] = useState([])

  const { id, chapterId } = useParams()

  async function handleDelete (id) {
    await fetch(`http://localhost:8080/admin/lesson/delete/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      const newLessons = [...lessons]

      const index = lessons.findIndex(lesson => lesson.lessonId === id)

      newLessons.splice(index, 1)

      setItems(newLessons)
    })
  }

  useEffect(() => {
    var tempId = chapterId
    if (tempId === '*') {
      tempId = ' '
    }
    fetch(`http://localhost:8080/admin/lesson/all/${tempId}`)
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true)
          setItems(result)
        },
        error => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th rowSpan={2}>ID</th>
              <th rowSpan={2}>name</th>
              <th colSpan={2}> Actions</th>
            </tr>
          </thead>

          <tbody>
            {lessons.map(lesson => (
              <tr key={lesson.lessonId}>
                <td>{lesson.lessonId}</td>
                <td>{lesson.lessonName}</td>
                <td>
                  <Button
                    variant='link'
                    onClick={e => handleDelete(lesson.lessonId, e)}
                  >
                    <FaRegTrashAlt color='black' />
                  </Button>
                </td>
                <td>
                <EditLesson
                    lessonId={lesson.lessonId}
                    lessonName={lesson.lessonName}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default LessonsTable
