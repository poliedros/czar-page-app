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
            <Col md={3}>
              {/* <Col xs={12} md={6} className="my-12">
              <Container>
                <h3 className="text-start">
                  <h4
                    style={{
                      fontFamily: "'M PLUS Code Latin', sans-serif",
                    }}
                  >
                    <a href="https://www.linkedin.com/in/anderson-mendes-ribeiro/">
                      {getIconsByName("io", "IoLogoLinkedin")}
                    </a>
                  </h4>
                  <div className="verticalLineBottom">
                    Anderson M. Ribeiro{" "}
                    <span className="text-xs">
                      {translations.teamlanguage[language][0]}
                    </span>
                  </div>
                </h3>

                <h6 className="text-end">
                  {translations.teamaddress[language][0]} -{" "}
                  {translations.teamcountry[language][0]}
                </h6>
                <h3 className="text-start">
                  <h4
                    className="flex"
                    style={{
                      fontFamily: "'M PLUS Code Latin', sans-serif",
                    }}
                  >
                    <a href="https://www.linkedin.com/in/carlos-zansavio/">
                      {getIconsByName("io", "IoLogoLinkedin")}
                    </a>
                    &nbsp;
                    <a href="https://www.linkedin.com/in/carlos-zansavio/">
                      {getIconsByName("bs", "BsMedium")}
                    </a>
                    &nbsp;
                    <a href="https://www.linkedin.com/in/carlos-zansavio/">
                      {getIconsByName("bs", "BsTwitter")}
                    </a>
                    &nbsp;
                    <a href="https://www.linkedin.com/in/carlos-zansavio/">
                      {getIconsByName("bs", "BsYoutube")}
                    </a>
                  </h4>
                  <div className="verticalLineBottom">
                    Carlos H. L. Zansavio{" "}
                    <span className="text-xs">
                      {translations.teamlanguage[language][1]}
                    </span>
                  </div>
                </h3>

                <h6 className="text-end">
                  {translations.teamaddress[language][1]} -{" "}
                  {translations.teamcountry[language][1]}
                </h6>
                <h3 className="text-start">
                  <h4
                    style={{
                      fontFamily: "'M PLUS Code Latin', sans-serif",
                    }}
                  >
                    <a href="https://www.linkedin.com/in/daniela-souza-gomes/">
                      {getIconsByName("io", "IoLogoLinkedin")}
                    </a>
                  </h4>
                  <div className="verticalLineBottom">
                    Daniela S. Gomes{" "}
                    <span className="text-xs">
                      {translations.teamlanguage[language][2]}
                    </span>
                  </div>
                </h3>

                <h6 className="text-end">
                  {translations.teamaddress[language][2]} -{" "}
                  {translations.teamcountry[language][2]}
                </h6>
                <h3 className="text-start">
                  <h4
                    style={{
                      fontFamily: "'M PLUS Code Latin', sans-serif",
                    }}
                  >
                    <a href="https://www.linkedin.com/in/lucas-abreu-417680238/">
                      {getIconsByName("io", "IoLogoLinkedin")}
                    </a>
                  </h4>
                  <div className="verticalLineBottom">
                    Lucas M. Abreu{" "}
                    <span className="text-xs">
                      {translations.teamlanguage[language][3]}
                    </span>
                  </div>
                </h3>

                <h6 className="text-end">
                  {translations.teamaddress[language][3]} -{" "}
                  {translations.teamcountry[language][3]}
                </h6>
              </Container>
            </Col> */}
            </Col>

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
                <Form onSubmit={undefined /* this.handleSubmit */}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder={translations.contactilename[language]}
                      value={"" /* this.emailName */}
                      onChange={
                        (
                          v
                        ) => {} /* this.setState({ emailName: v.target.value }) */
                      }
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder={translations.contactilemail[language]}
                      value={"" /* this.emailFrom */}
                      onChange={
                        (
                          v
                        ) => {} /* this.setState({ emailFrom: v.target.value }) */
                      }
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
                      value={"" /* this.emailBody */}
                      onChange={
                        (
                          v
                        ) => {} /* this.setState({ emailBody: v.target.value }) */
                      }
                    />
                  </Form.Group>
                  <div className="flex justify-center">
                    <Button
                      className="!flex items-center !font-thin"
                      variant="secondary"
                      type="submit"
                    >
                      {getIconsByName("fa", "FaPaperPlane")} &nbsp;{" "}
                      {translations.btnsendemail[language]}
                    </Button>
                  </div>
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
