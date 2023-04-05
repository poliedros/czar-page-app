import { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useLanguage, useLanguageUpdate } from "../context/languageContext";
import translations from "../translations.json";

import getIconsByName from "../functions/getIconsByName";

export default function Contacts() {
  const language = useLanguage();
  const toggleLanguage = useLanguageUpdate();

  const [emailName, setEmailName] = useState<string>();
  const [emailFrom, setEmailFrom] = useState<string>();
  const [emailBody, setEmailBody] = useState<string>();
  const [emailLoading, setEmailLoading] = useState<boolean>(false);
  const [thankFulMessage, setThankFulMessage] = useState<boolean>(false);

  const handleSubmit = async () => {
    const data = JSON.stringify({
      from: emailFrom,
      name: emailName,
      body: emailBody,
    });

    setEmailLoading(true);
    setThankFulMessage(false);

    await fetch("/api/contact", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    });

    setEmailLoading(false);
    setThankFulMessage(true);
  };

  return (
    <>
      <div
        className="App-header"
        id="contacts"
        style={{
          fontFamily: "'Source Sans Pro', sans-serif",
        }} /*style={{ backgroundColor: "#282c34", minHeight: "100vh" }}*/
      >
        <Container>
          <h3
            className="unselectable uppercase tracking-[.3rem] my-6"
            style={{
              fontFamily: "'Ubuntu Condensed', sans-serif",
            }}
          >
            {translations.contactmt[language]}
          </h3>

          <br />
          <Row>
            <Col md={3}></Col>
            <Col
              xs={12}
              md={6}
              className="flex flex-col justify-center my-12 px-6"
            >
              <Container>
                <h5 className="whitespace-pre">
                  {translations.contactmm[language]}
                </h5>
                <br />
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder={translations.contactilename[language]}
                      value={emailName}
                      onChange={(v) => {
                        setEmailName(v.target.value);
                      }}
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder={translations.contactilemail[language]}
                      value={emailFrom}
                      onChange={(v) => {
                        setEmailFrom(v.target.value);
                      }}
                    />
                    <Form.Text className="text-muted">
                      <h6 className="text-gray-500">
                        {translations.contactiledisclaimer[language]}
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
                      placeholder={translations.contactilemessage[language]}
                      value={emailBody}
                      onChange={(v) => {
                        setEmailBody(v.target.value);
                      }}
                    />
                  </Form.Group>
                  <div className="flex justify-center">
                    {!emailLoading ? (
                      <Button
                        className="!flex items-center !font-thin"
                        variant="secondary"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        {getIconsByName("fa", "FaPaperPlane")} &nbsp;{" "}
                        {translations.btnsendemail[language]}
                      </Button>
                    ) : (
                      <>{translations.loading[language]}</>
                    )}
                  </div>
                  {thankFulMessage ? (
                    <div className="flex justify-center">
                      {translations.thankfulMessage[language]}
                    </div>
                  ) : (
                    <></>
                  )}
                </Form>
              </Container>
            </Col>
            <Col md={3}></Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
