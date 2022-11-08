import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ChaptersList from '../chapters/ChaptersList'
import LessonsTable from './LessonsTable'

import { useParams } from 'react-router-dom'
import TopicsList from '../topics/TopicsList'
//import CreateChapter from './CreateChapter'

function LessonsPage () {
  const { id } = useParams()
  const { chapterName } = useParams()
  const { topicName, chapterId } = useParams()
  return (
    <div>
      <br></br>
      <h1>Lessons for {chapterName}</h1>
      <br></br>
      <div>
        <Container>
          <Row>
            <Col lg={{ span: 2 }} xs={{ order: 'first' }}>
              <TopicsList
                nameOfTopic={topicName}
                hrefValue='lessons'
                page='/*/*'
              />
            </Col>
            <Col lg={{ span: 7 }} xs={{ order: 13 }}>
              <LessonsTable chapterId={chapterId} />
            </Col>
            <Col lg={{ span: 2 }} xs={{ order: 'last' }}>
              <ChaptersList
                nameOfTopic={topicName}
                topicId={id}
                nameOfChapter={chapterName}
                hrefValue='lessons'
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default LessonsPage
