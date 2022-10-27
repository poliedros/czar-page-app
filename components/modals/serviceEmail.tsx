import { Button, Col, Form, Row } from "react-bootstrap";
import { FaPaperPlane } from "react-icons/fa";
import { Language } from "../languages";
import translations from "../../functions/translations";
import Variants from "../../styles/variants";
import getIconsByName from "../../functions/getIconsByName";
import { useState } from "react";

export default function ModalEmail({ language }: { language: Language }) {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  async function onClickHandle() {
    const data = { to: email, body: msg };
    await fetch("/api/sendemail", {
      body: JSON.stringify(data),
      method: "POST",
    });
  }

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
            onSubmit={undefined}
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
                value={email}
                onChange={(v) => {
                  setEmail(v.target.value);
                }}
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
                value={msg}
                onChange={(v) => {
                  setMsg(v.target.value);
                }}
              />
            </Form.Group>
            <Button
              className="!flex items-center"
              variant="secondary"
              type="submit"
              onClick={onClickHandle}
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
