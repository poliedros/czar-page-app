import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import translations from "../functions/translations";
import { Language } from "./languages";

export default function About({ language }: { language: Language }) {
  return (
    <>
      <div className="App-header" id="about">
        <Container>
          <Row>
            <Col md={1}></Col>
            <Col md={11}>
              <h2
                className="unselectable whitespace-pre my-6"
                style={{
                  fontFamily: "'Ubuntu Condensed', sans-serif",
                  textAlign: "end",
                }}
              >
                {translations("aboutmt", language)}
              </h2>
              <br />
              <h5
                className="verticalLineRight"
                style={{
                  fontFamily: "'Source Sans Pro', sans-serif",
                  textAlign: "end",
                  padding: "0 10px 0 10px",
                }}
              >
                {translations("sectionabout", language)}
                <br />{" "}
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
