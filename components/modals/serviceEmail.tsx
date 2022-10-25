import { Button, Col, Form, Row } from "react-bootstrap";
import { FaPaperPlane } from "react-icons/fa";
import { Language } from "../languages";
import translations from "../../functions/translations";
import Variants from "../../styles/variants";
import getIconsByName from "../../functions/getIconsByName";

export default function ModalEmail({ language }: { language: Language }) {
  return (
    <>
      <Row>
        <Col>
          <h4>{translations("servicemodalt", language, 0)}</h4>
          <h6>{translations("servicemodalmsg", language, 0)}</h6>
        </Col>
        <Col>
          <h4>{translations("testemailt", language)}</h4>
          <Form
            onSubmit={undefined /* this.handleSubmit2 */}
            className="flex flex-col text-center"
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder={translations("contactilemail", language)}
                value={undefined /* this.emailFrom */}
                onChange={
                  (v) => {} /* this.setState({ emailTo: v.target.value }) */
                }
              />
              <Form.Text className="text-muted">
                <h6 className="text-gray" style={{ color: "gray" }}>
                  {translations("contactiledisclaimer", language)}
                </h6>
              </Form.Text>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                placeholder={translations("testemaililmessage", language)}
                value={undefined /* this.emailBody */}
                onChange={
                  (v) => {} /* this.setState({ emailBodyTo: v.target.value }) */
                }
              />
            </Form.Group>
            <Button
              className="!flex items-center"
              variant="secondary"
              type="submit"
            >
              {getIconsByName("fa", "FaPaperPlane")} &nbsp;{" "}
              {translations("btnsendemail", language)}
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}
