import { useState } from 'react'
import CreateLessonContents from './CreateLessonContent.js'
import DisplayLessonContent from './DisplayLessonContent.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function LessonContentPage () {
  const {lessonId} = useParams();
  const [contents, updateContents] = useState([])

  const addContent = content => {
    updateContents([...contents, content])
  }

  // const deleteContent = content => {}

  const createLessonContentAction = e => {
    e.preventDefault()

    console.log(contents)

    const headers = new Headers({
      'Content-Type': 'application/json'
    })

    contents.forEach(content => {
      if (content.contentImage === undefined) {
        var jsonData = {
          lessonIndex: content.contentIndex,
          lessonZoneType: 'PARAGRAPH',
          lessonZoneContent: content.contentParagraph
        }

        const requestOptions = {
          method: 'PUT',
          headers: headers,
          body: JSON.stringify(jsonData)
        }

        fetch(
          `http://localhost:8080/admin/lessonZone/create/${lessonId}`,
          requestOptions
        ).then(() => {
          window.location.reload(false)
        })
      }
    })
  }

  return (
    <Container>
      <Row>
        <Col
          style={{ margin: 20, borderRadius: 20, backgroundColor: '#f2f2f2' }}
        >
          <CreateLessonContents addContent={addContent} />
        </Col>
        <Col style={{ margin: 20 }}>
          <DisplayLessonContent contents={contents} />
        </Col>
        <Col style={{ margin: 20 }}>
          {' '}
          <Button variant='secondary' onClick={createLessonContentAction}>
            Create lesson content
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default LessonContentPage
