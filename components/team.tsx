import Image from "next/image";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import getIcons from "../functions/getIcons";
import translations from "../functions/translations";
import { Languages } from "../types/languages";
import getIconsByName from "../functions/getIconsByName";

import { useLanguage, useLanguageUpdate } from "../context/languageContext";

import MemberCzar from "./member";

export default function Team() {
  const language = useLanguage();
  const toggleLanguage = useLanguageUpdate();

  return (
    <>
      <div className="App-header" id="team">
        <Container>
          <h3
            className="unselectable uppercase tracking-[.3rem] my-6"
            style={{
              fontFamily: "'Ubuntu Condensed', sans-serif",
            }}
          >
            {translations("teammt", language)}
          </h3>
          <Row
            className="items-center"
            style={{
              fontFamily: "'Source Sans Pro', sans-serif",
            }}
          >
            <Col md={1} />
            <Col
              md={5}
              style={{
                backgroundColor: "green",
              }}
            >
              <Row
                style={{
                  height: "70vh",
                }}
              >
                {/* <MemberCzar
                  data={{
                    name: "Carlos Zansávio",
                    image:
                      "https://media.licdn.com/dms/image/C4E03AQF-gbqqU9DNnQ/profile-displayphoto-shrink_800_800/0/1641765343981?e=1687996800&v=beta&t=dA6SNTAMwO1EdKIpBRVPa2FMEHa72GKFXolWbB0O1q4",
                    links: {
                      linkedin: "https://www.linkedin.com/in/carlos-zansavio/",
                      youtube: "",
                      twitter: "",
                      medium: "",
                    },
                    pos: 1,
                    language: language,
                  }}
                /> */}
                <MemberCzar
                  data={{
                    name: "Anderson Ribeiro",
                    image:
                      "https://media.licdn.com/dms/image/C4D03AQHy7GiX0EUVXA/profile-displayphoto-shrink_800_800/0/1517736705680?e=1687996800&v=beta&t=ZgLqzVvcX1T0ouxqkNm6kdB1G-uZvKCh0owFCbmazAc",
                    links: {
                      linkedin:
                        "https://www.linkedin.com/in/anderson-mendes-ribeiro/",
                      youtube: "",
                      twitter: "",
                      medium: "",
                    },
                    pos: 0,
                    language: language,
                  }}
                />
              </Row>
              <Row className="h-[5vh]" /* style={{ height: "5vh" }} */>
                <Col className="flex items-center">
                  {getIcons("io", "iarrowup")} &nbsp;{" "}
                  {translations("teamfounders", language)}
                </Col>
              </Row>
            </Col>
            <Col
              md={5}
              className="bg-green"
              style={{
                backgroundColor: "green",
              }}
            >
              <Row className="h-[5vh]" /* style={{ height: "5vh" }} */>
                <Col className="!flex items-center">
                  {getIcons("io", "iarrowdown")} &nbsp;{" "}
                  <span
                    style={{
                      fontFamily: "'Josefin Sans', sans-serif",
                      fontSize: "1.15rem",
                    }}
                  >
                    CZAR
                  </span>
                  {getIcons("bi", "iplus", "12px")}{" "}
                </Col>
              </Row>
              <Row
                style={{
                  height: "70vh",
                }}
              >
                {/* <MemberCzar
                  data={{
                    name: "Daniela Gomes",
                    image:
                      "https://pps.whatsapp.net/v/t61.24694-24/70482343_168695281010055_4653672857504989536_n.jpg?ccb=11-4&oh=01_AdSQfMxgOxRVeueUJt3o9ivd_spDC7r85vQzM-v7Ml3oRA&oe=645623F4",
                    links: {
                      linkedin:
                        "https://www.linkedin.com/in/daniela-souza-gomes/",
                      youtube: "",
                      twitter: "",
                      medium: "",
                    },
                    pos: 2,
                    language: language,
                  }}
                /> */}
                <Col>{translations("allMembers", language)}</Col>
                {/* <MemberCzar
                  data={{
                    name: "Lucas Abreu",
                    image:
                      "https://media.licdn.com/dms/image/C5603AQFmRdwu54vuIQ/profile-displayphoto-shrink_800_800/0/1650575160073?e=1687996800&v=beta&t=ENfV4Riq-8gITKyEU-WjSKPrlZAX1QLGMnVb2Iu7U8c",
                    links: {
                      linkedin:
                        "https://www.linkedin.com/in/lucas-abreu-417680238/",
                      youtube: "",
                      twitter: "",
                      medium: "",
                    },
                    pos: 3,
                    language: language,
                  }}
                /> */}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
