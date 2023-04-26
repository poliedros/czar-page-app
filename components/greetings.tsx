import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import translations from "../functions/translations";

import { useLanguage, useLanguageUpdate } from "../context/languageContext";

export default function Greetings() {
  const language = useLanguage();
  const toggleLanguage = useLanguageUpdate();

  return (
    <>
      <div className="App-header" id="greetings">
        <Container>
          <Row>
            <Col md={2}></Col>
            <Col md={8}>
              <h1
                className="unselectable my-6"
                style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }}
              >
                {translations("greetingst", language)}
              </h1>{" "}
              <h5
                // className="whitespace-pre"
                style={{
                  fontFamily: "'Source Sans Pro', sans-serif",
                }}
              >
                {translations("greetingmsg", language)}
              </h5>
              <h6 style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                {translations("sectiongreetings", language)}
              </h6>
            </Col>
            <Col md={2}></Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
