import Image from "next/image";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import getIcons from "../functions/getIcons";
import translations from "../translations.json";
import { Language } from "./languages";
import getIconsByName from "../functions/getIconsByName";

export default function Team({ language }: { language: Language }) {
  return (
    <>
      <div className="App-header" id="team">
        <Container>
          <h3
            className="unselectable uppercase tracking-[.3rem] my-6"
            style={{
              fontFamily:
                "'Ubuntu Condensed', sans-serif" /* textTransform: "uppercase", letterSpacing: ".3rem", margin: "1.5rem 0" */,
            }}
          >
            {translations.teammt[language]}
          </h3>
          <Row
            className="items-center"
            style={{
              fontFamily:
                "'Source Sans Pro', sans-serif" /* , alignItems: "center" */,
            }}
          >
            <Col
              md={6}
              style={{
                backgroundColor: "green",
              }}
            >
              <Row
                style={
                  {
                    /* height: "70vh" */
                  }
                }
              >
                <Col
                  xs={12}
                  md={6}
                  className="bg-no-repeat bg-center bg-cover flex flex-col justify-center text-left py-1"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://media-exp1.licdn.com/dms/image/C4E03AQF-gbqqU9DNnQ/profile-displayphoto-shrink_800_800/0/1641765343981?e=1669852800&v=beta&t=SEYWNbYAv9mdJUwAGuV1mqIw1c4waRggAUxwS3k-4k4)",
                    //backgroundRepeat: "no-repeat",
                    //backgroundPosition: "center",
                    //backgroundSize: "cover",
                    //display: "flex",
                    //flexDirection: "column",
                    //justifyContent: "center",
                    //textAlign: "left",
                    //paddingTop: "1rem",
                    //paddingBottom: "1rem"
                  }}
                >
                  <div className="my-[5vh]">
                    <h1
                      style={{
                        fontFamily: "'Ubuntu Condensed', sans-serif",
                      }}
                    >
                      Carlos H. L. Zansavio
                    </h1>
                    <h6
                      className="text-gray"
                      style={{
                        fontFamily:
                          "'M PLUS Code Latin', sans-serif" /* , color: "gray" */,
                        textShadow: "1px 1px 2px black, 2px 2px 4px #000000",
                      }}
                    >
                      {
                        translations.teamlanguage[
                          language
                        ][1] /* translations[this.props.language].teamlanguage[1] */
                      }
                    </h6>
                    <h4>
                      <b>
                        {
                          translations.teamrole[
                            language
                          ][1] /* translations[this.props.language].teamrole[1] */
                        }
                      </b>
                    </h4>
                    <h5>
                      {
                        translations.teamcv[
                          language
                        ][1] /* translations[this.props.language].teamcv[1] */
                      }
                    </h5>
                    <h6>
                      {
                        translations.teamaddress[
                          language
                        ][1] /* translations[this.props.language].teamaddress[1] */
                      }
                    </h6>
                    <Image
                      src={"" /* process.env.PUBLIC_URL + '/ie.svg' */}
                      alt=""
                      className="w-25 h-35" /* style={{ width: '25px', height: '35px' }} */
                    />
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
                  </div>
                </Col>
                <Col
                  xs={12}
                  md={6}
                  className="bg-no-repeat bg-center bg-cover flex flex-col justify-center text-left py-1"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://media-exp1.licdn.com/dms/image/C4D03AQHy7GiX0EUVXA/profile-displayphoto-shrink_800_800/0/1517736705680?e=1669852800&v=beta&t=SaNkTpFDeJGcTr2B3W8p1Tafjq15fP4KuIrGRC95S-8)",
                    //backgroundRepeat: "no-repeat",
                    //backgroundPosition: "center",
                    //backgroundSize: "cover",
                    //display: "flex",
                    //flexDirection: "column",
                    //justifyContent: "center",
                    //textAlign: "left",
                    //paddingTop: "1rem",
                    //paddingBottom: "1rem"
                  }}
                >
                  <div className="my-[5vh]">
                    <h1
                      style={{
                        fontFamily: "'Ubuntu Condensed', sans-serif",
                      }}
                    >
                      Anderson M. Ribeiro
                    </h1>
                    <h6
                      className="text-gray"
                      style={{
                        fontFamily:
                          "'M PLUS Code Latin', sans-serif" /* , color: "gray" */,
                        textShadow: "1px 1px 2px black, 2px 2px 4px #000000",
                      }}
                    >
                      {
                        translations.teamlanguage[
                          language
                        ][0] /* translations[this.props.language].teamlanguage[0] */
                      }
                    </h6>
                    <h4>
                      <b>
                        {
                          translations.teamrole[
                            language
                          ][0] /* translations[this.props.language].teamrole[0] */
                        }
                      </b>
                    </h4>
                    <h5>
                      {
                        translations.teamcv[
                          language
                        ][0] /* translations[this.props.language].teamcv[0] */
                      }
                    </h5>
                    <h6>
                      {
                        translations.teamaddress[
                          language
                        ][0] /* translations[this.props.language].teamaddress[0] */
                      }
                    </h6>
                    <a href="https://www.linkedin.com/in/anderson-mendes-ribeiro/">
                      {getIconsByName("io", "IoLogoLinkedin")}
                    </a>
                    <Image
                      src={"" /* process.env.PUBLIC_URL + '/ar.svg' */}
                      alt=""
                      className="w-25 h-55" /* style={{ width: '25px', height: '55px' }} */
                    />
                  </div>
                </Col>
              </Row>
              <Row className="h-[5vh]" /* style={{ height: "5vh" }} */>
                <Col className="flex items-center">
                  {getIcons("io", "iarrowup")} {/* <IoIosArrowUp /> */} &nbsp;{" "}
                  {
                    translations.teamfounders[
                      language
                    ] /* translations[this.props.language].teamfounders */
                  }
                </Col>
              </Row>
            </Col>
            <Col
              md={6}
              className="bg-green"
              style={{
                backgroundColor: "green",
              }}
            >
              <Row className="h-[5vh]" /* style={{ height: "5vh" }} */>
                <Col className="flex items-center">
                  {getIcons("io", "iarrowdown")} {/* <IoIosArrowDown /> */}{" "}
                  &nbsp;{" "}
                  <span
                    style={{
                      fontFamily: "'Josefin Sans', sans-serif",
                      fontSize: "1.15rem",
                    }}
                  >
                    CZAR
                  </span>
                  {getIcons("bi", "iplus", "14px")}{" "}
                  {/* <BiPlusMedical style={{ width: "14px" }} /> */}
                </Col>
              </Row>
              <Row
                style={
                  {
                    /* height: "70vh" */
                  }
                }
              >
                <Col
                  xs={12}
                  md={6}
                  className="bg-no-repeat bg-center bg-cover flex flex-col justify-center text-left py-1"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://media-exp1.licdn.com/dms/image/C4D03AQGpu5oac7sx_w/profile-displayphoto-shrink_800_800/0/1626460675704?e=1669852800&v=beta&t=xsz3anR_1qmDLszUV-MjM7PKgpuuDOuyUXA5PJeGXUU)",
                    //backgroundRepeat: "no-repeat",
                    //backgroundPosition: "center",
                    //backgroundSize: "cover",
                    //display: "flex",
                    //flexDirection: "column",
                    //justifyContent: "center",
                    //textAlign: "left",
                    //paddingTop: "1rem",
                    //paddingBottom: "1rem"
                  }}
                >
                  <div className="my-[5vh]">
                    <h1
                      style={{
                        fontFamily: "'Ubuntu Condensed', sans-serif",
                      }}
                    >
                      Daniela S. Gomes
                    </h1>
                    <h6
                      className="text-gray"
                      style={{
                        fontFamily:
                          "'M PLUS Code Latin', sans-serif" /* , color: "gray" */,
                        textShadow: "1px 1px 2px black, 2px 2px 4px #000000",
                      }}
                    >
                      {
                        translations.teamlanguage[
                          language
                        ][2] /* translations[this.props.language].teamlanguage[2] */
                      }
                    </h6>
                    <h4>
                      <b>
                        {
                          translations.teamrole[
                            language
                          ][2] /* translations[this.props.language].teamrole[2] */
                        }
                      </b>
                    </h4>
                    <h5>
                      {
                        translations.teamcv[
                          language
                        ][2] /* translations[this.props.language].teamcv[2] */
                      }
                    </h5>
                    <h6>
                      {
                        translations.teamaddress[
                          language
                        ][2] /* translations[this.props.language].teamaddress[2] */
                      }
                    </h6>
                    <Image
                      src={"" /* process.env.PUBLIC_URL + '/br.svg' */}
                      alt=""
                      className="w-50 h-46" /* style={{ width: '50px', height: '46px' }} */
                    />
                    <a href="https://www.linkedin.com/in/daniela-souza-gomes/">
                      {getIconsByName("io", "IoLogoLinkedin")}
                    </a>
                  </div>
                </Col>
                <Col
                  xs={12}
                  md={6}
                  className="bg-no-repeat bg-center bg-cover flex flex-col justify-center text-left py-1"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://media-exp1.licdn.com/dms/image/C5603AQFmRdwu54vuIQ/profile-displayphoto-shrink_800_800/0/1650575160073?e=1669852800&v=beta&t=rI5ymIq-LB2oDY4Sk3S6G0BedYETiKu-hLMBbZXKkfs)",
                    //backgroundRepeat: "no-repeat",
                    //backgroundPosition: "center",
                    //backgroundSize: "cover",
                    //display: "flex",
                    //flexDirection: "column",
                    //justifyContent: "center",
                    //textAlign: "left",
                    //paddingTop: "1rem",
                    //paddingBottom: "1rem"
                  }}
                >
                  <div className="my-[5vh]">
                    <h1
                      style={{
                        fontFamily: "'Ubuntu Condensed', sans-serif",
                      }}
                    >
                      Lucas M. Abreu
                    </h1>
                    <h6
                      className="text-gray"
                      style={{
                        fontFamily:
                          "'M PLUS Code Latin', sans-serif" /* , color: "gray" */,
                        textShadow: "1px 1px 2px black, 2px 2px 4px #000000",
                      }}
                    >
                      {
                        translations.teamlanguage[
                          language
                        ][3] /* translations[this.props.language].teamlanguage[3] */
                      }
                    </h6>
                    <h4>
                      <b>
                        {
                          translations.teamrole[
                            language
                          ][3] /* translations[this.props.language].teamrole[3] */
                        }
                      </b>
                    </h4>
                    <h5>
                      {
                        translations.teamcv[
                          language
                        ][3] /* translations[this.props.language].teamcv[3] */
                      }
                    </h5>
                    <h6>
                      {
                        translations.teamaddress[
                          language
                        ][3] /* translations[this.props.language].teamaddress[3] */
                      }
                    </h6>
                    <Image
                      src={"" /* process.env.PUBLIC_URL + '/br.svg' */}
                      alt=""
                      className="w-50 h-46" /* style={{ width: '50px', height: '46px' }} */
                    />
                    <a href="https://www.linkedin.com/in/lucas-abreu-417680238/">
                      {getIconsByName("io", "IoLogoLinkedin")}
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
