import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import EditTopic from './EditTopic'

function TopicsTable (props) {
  console.log(localStorage.getItem('token'))
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [topics, setItems] = useState([])

  async function removeTopic (id) {
    await fetch(`http://localhost:8080/admin/topic/delete/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')} `,
        'Access-Control-Allow-Origin': '*'
      },
      mode: 'cors'
    }).then(() => {
      const newTopics = [...topics]

      const index = topics.findIndex(topic => topic.topicId === id)

      newTopics.splice(index, 1)

      setItems(newTopics)
    })
  }

  useEffect(() => {
    fetch('http://localhost:8080/admin/topic/all', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')} `,
        'Access-Control-Allow-Origin': '*'
      },
      mode: 'cors'
    })
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
        <h1>{props.name}</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th rowSpan={2}>ID</th>
              <th rowSpan={2}>name</th>
              <th colSpan={2}> Actions</th>
            </tr>
          </thead>

          <tbody>
            {topics.map(topic => (
              <tr key={topic.topicId}>
                <td>{topic.topicId}</td>
                <td>{topic.topicName}</td>
                <td>
                  <EditTopic
                    topicId={topic.topicId}
                    topicName={topic.topicName}
                  />
                </td>
                <td>
                  <Button
                    variant='link'
                    onClick={e => removeTopic(topic.topicId)}
                  >
                    <FaRegTrashAlt color='black' />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default TopicsTable
