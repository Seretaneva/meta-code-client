import { useState } from "react";
import CreateLessonContents from "./CreateLessonContent.js";
import DisplayLessonContent from "./DisplayLessonContent.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import userEvent from "@testing-library/user-event";

function LessonContentPage() {

  const [contents, updateContents] = useState([]);

  const addContent = (content) => {
    updateContents([...contents, content]);
  };

  return (
    <Container>
    <Row>
      <Col style={{margin: 20,borderRadius: 20, backgroundColor:'#f2f2f2'}}><CreateLessonContents addContent={addContent}/></Col>
      <Col style={{margin: 20}}><DisplayLessonContent contents={contents}/></Col>
    </Row>
  </Container>
  );
}

export default LessonContentPage;