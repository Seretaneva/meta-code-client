import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function AdminNavigation () {
  return (
    <Navbar style={{alignContent:'center'}} bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand  href='/admin'>admin</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link eventKey='/admin/topics' href='/admin/topics'>
            topics
          </Nav.Link>
          <Nav.Link eventKey='/admin/chapters' href='/admin/chapters/java/2'>
            chapters
          </Nav.Link>
          <Nav.Link eventKey='/admin/lessons' href='/admin/lessons/java/2/*/*'>
            lessons
          </Nav.Link>
          <Nav.Link
            eventKey='/admin/content-lesson'
            href='/admin/content-lesson'
          >
            content
          </Nav.Link>
          <Nav.Link eventKey='/admin/problems' href='/admin/problems'>
            problems
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default AdminNavigation
