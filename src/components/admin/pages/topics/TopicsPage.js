import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TopicsTable from './TopicsTable'
import CreateTopic from './CreateTopic'

function TopicsPage () {
  return (
    <div>
      <br></br>
      <h1>Topics</h1>
      <br></br>
      <div>
        <Container>
          <Row>
            <Col lg={{ span: 8 }} xs={{ order: 13 }}>
              <TopicsTable />
            </Col>
            <Col xs={{ order: 'last' }}>
             
            </Col>
          </Row>
          <CreateTopic />
        </Container>
        <h1>asdasd</h1>
      </div>
    </div>
  )
}

export default TopicsPage