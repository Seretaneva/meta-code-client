import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaRegTrashAlt, FaArrowUp } from 'react-icons/fa'
import EditLesson from './EditLesson'
import CreateLesson from './CreateLesson'
import { useNavigate } from "react-router-dom";

function LessonsTable () {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [lessons, setItems] = useState([])
  let navigate = useNavigate();
  const { chapterId } = useParams()

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


  function routeToLessonZone(id) {
    
  // Somewhere in your code, e.g. inside a handler:
  navigate("/admin/lessonContent/" + id);
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
              <th colSpan={3}> Actions</th>
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
                <td>
                  <Button
                    variant='link'
                    onClick={e=>routeToLessonZone(lesson.lessonId,e)}
                  >
                    <FaArrowUp color='black' />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <CreateLesson chapterId={chapterId} />
      </div>
    )
  }
}

export default LessonsTable
