import { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useLanguage, useLanguageUpdate } from "../context/languageContext";
import translations from "../translations.json";

import getIconsByName from "../functions/getIconsByName";
import Team from "./team";

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
        className="App-header !py-24"
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
          <Row>
            <Col md={3}></Col>
            <Col
              xs={12}
              md={6}
              className="flex flex-col justify-center my-12 px-6"
            >
              <Container>
                {/* <h5 className="whitespace-pre">
                  {translations.contactmm[language]}
                </h5> */}
                <br />
                <Form className="flex flex-col">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder={translations.contactilename[language]}
                      value={emailName}
                      className="rounded-0"
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
                      className="rounded-0"
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
                      className="rounded-0"
                      onChange={(v) => {
                        setEmailBody(v.target.value);
                      }}
                    />
                  </Form.Group>
                  {!emailLoading ? (
                    <Button
                      className="!flex justify-center items-center !font-thin rounded-0"
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
          <Team />
        </Container>
      </div>
      <Row className="bg-[#282c34] relative flex items-center justify-center">
        {/* <h6 className="font-['Ubuntu_Condensed'] uppercase tracking-widest">
              Contato: Balvanera | Ciudad Autónoma de Buenos Aires | Argentina
            </h6>
            <h6 className="font-['Ubuntu_Condensed'] uppercase tracking-widest">
              Sede: São João Del-Rei | Minas Gerais | Brazil
            </h6> */}
        <Col
          className="!h-[500px] grayscale bg-cover opacity-40"
          style={{
            // backgroundImage: "linear-gradient(red, yellow, green)",
            backgroundImage:
              "linear-gradient(270deg, rgba(40, 44, 52, 1) 25%, rgba(255, 255, 255, 0) 100%), url('./eder-oliveira-mWIILyeZKGM-unsplash-removebg-preview.png')",
          }}
        ></Col>
        <Col className="flex items-center">
          <div className="absolute left-1/2 -translate-x-1/2 z-[1] text-white text-center">
            <p className="font-['Ubuntu_Condensed'] uppercase tracking-widest mb-0 text-[#29FC16]">
              {translations.headOffice[language]}
            </p>
            <h5 className="font-['Ubuntu_Condensed'] uppercase tracking-widest mb-6">
              São João Del-Rei | Minas Gerais |{" "}
              {translations.teamcountry[language][3]}
            </h5>
            <p className="font-['Ubuntu_Condensed'] uppercase tracking-widest mb-0 text-gray-400">
              {translations.contactAbroad[language]}
            </p>
            <h6 className="font-['Ubuntu_Condensed'] uppercase tracking-widest">
              Balvanera | Ciudad Autónoma de Buenos Aires | Argentina
            </h6>
          </div>
        </Col>
        <Col
          className="!h-[500px] grayscale bg-cover opacity-40" //bg-gradient-to-r from-pink-500 to-violet-500 bg-[url('https://images.unsplash.com/photo-1682434660476-bcdbdeeeebbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80')]
          style={{
            // backgroundImage: "linear-gradient(red, yellow, green)",
            backgroundImage:
              "linear-gradient(90deg, rgba(40, 44, 52, 1) 25%, rgba(255, 255, 255, 0) 100%), url('./dayane-caldeira-2GFZNg55mC4-unsplash-removebg-preview.png')",
          }}
        ></Col>
      </Row>
    </>
  );
}
