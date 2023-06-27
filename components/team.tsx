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
import SocialMedia from "./socialMedia";
import IconsByName from "./iconsByName";
import { Button } from "react-bootstrap";

export default function Team() {
  const language = useLanguage();
  const toggleLanguage = useLanguageUpdate();

  return (
    <>
      <div>
        {" "}
        {/* className="App-header" id="team" */}
        <Container>
          {/* <h3
            className="unselectable uppercase tracking-[.3rem] my-6"
            style={{
              fontFamily: "'Ubuntu Condensed', sans-serif",
            }}
          >
            {translations("teammt", language)}
          </h3> */}
          <Row
            className="items-center !mt-24 !mb-36"
            style={{
              fontFamily: "'Source Sans Pro', sans-serif",
            }}
          >
            {/* <Col md={1} /> */}
            <Col
              // md={5}
              style={
                {
                  // backgroundColor: "green",
                }
              }
            >
              <Row
                className="flex justify-center"
                style={
                  {
                    // height: "70vh",
                  }
                }
              >
                {/* <MemberCzar
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
                /> */}
                <Col
                  md={"auto"}
                  className="flex justify-center items-end !mt-6"
                >
                  <Button
                    variant="secondary"
                    className="-mr-9 mb-6 z-[5] p-2 !rounded-full "
                  >
                    {IconsByName("bs", "BsChatRightQuoteFill")}
                  </Button>
                  <img
                    className="!w-auto !h-[150px] !rounded-full"
                    src={
                      "https://media.licdn.com/dms/image/C4D03AQHy7GiX0EUVXA/profile-displayphoto-shrink_800_800/0/1517736705680?e=1687996800&v=beta&t=ZgLqzVvcX1T0ouxqkNm6kdB1G-uZvKCh0owFCbmazAc"
                    }
                  />
                  <img
                    className="!w-auto !h-[75px] !rounded-full -ml-6 drop-shadow-lg"
                    src={"/ar2.svg"}
                  />
                </Col>
                <Col md={"auto"} className="!flex">
                  <div className="text-left flex justify-center flex-col">
                    <h3 className="text-left font-['Ubuntu_Condensed']">
                      Anderson Ribeiro
                    </h3>
                    <h6>{translations("teamrole", language)[0]}</h6>
                    <SocialMedia
                      media={"Linkedin"}
                      link={
                        "https://www.linkedin.com/in/anderson-mendes-ribeiro/"
                      }
                    />
                  </div>
                </Col>
              </Row>
              <Row className="h-[5vh] mt-3" /* style={{ height: "5vh" }} */>
                <Col className="flex justify-center items-center">
                  {getIcons("io", "iarrowup")} &nbsp;{" "}
                  {translations("teamfounders", language)}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
