//import CardCzar from "./cardCzar";

import { Container, Row, Col } from "react-bootstrap";

import translations from "../translations.json";

import { useLanguage, useLanguageUpdate } from "../context/languageContext";
import CapCard from "../atoms/capCard";

export default function Services() {
  const language = useLanguage();
  const toggleLanguage = useLanguageUpdate();

  return (
    <>
      <div className="App-header" id="services">
        <Container>
          <Row className="justify-center">
            <h3
              className="unselectable uppercase tracking-[.3rem] my-6"
              style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }}
            >
              {translations.servicemt[language]}
            </h3>
            <Col
              xs={12}
              lg={4}
              className="flex items-center justify-center my-4"
            >
              <CapCard
                preview={{
                  state: "ArtDesign",
                  icon: "MdWeb",
                  iconType: "md",
                  type: "service",
                  id: "0",
                  pos: "4",
                  message: "",
                  icon2: "RiArtboardFill",
                  bgImage: "seventh",
                  artist: "jacksonsophat.com",
                  language: language,
                }}
              />
            </Col>
            <Col
              xs={12}
              lg={4}
              className="flex items-center justify-center my-4"
            >
              <CapCard
                preview={{
                  state: "HostDomain",
                  icon: "MdDomainVerification",
                  iconType: "md",
                  type: "service",
                  id: "1",
                  pos: "3",
                  message: "czar.dev",
                  icon2: "",
                  bgImage: "sixth",
                  artist: "kobu.agency",
                  language: language,
                }}
              />
            </Col>
            <Col
              xs={12}
              lg={4}
              className="flex items-center justify-center my-4"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "1rem 0 1rem 0",
              }}
            >
              <CapCard
                preview={{
                  state: "Email",
                  icon: "MdEmail",
                  iconType: "md",
                  type: "service",
                  id: "2",
                  pos: "0",
                  message: "QWERTYIOP",
                  icon2: "",
                  bgImage: "first",
                  artist: "lucasgeorgewendtfotografia.blogspot.com",
                  language: language,
                }}
              />
            </Col>
            <Col
              xs={12}
              lg={4}
              className="flex items-center justify-center my-4"
            >
              <CapCard
                preview={{
                  state: "Cloud",
                  icon: "RiCloudFill",
                  iconType: "ri",
                  type: "service",
                  id: "3",
                  pos: "1",
                  message: "Cumulonimbus",
                  icon2: "",
                  bgImage: "second",
                  artist: "instagram.com/ibam_photovideo",
                  language: language,
                }}
              />
            </Col>
            <Col
              xs={12}
              lg={4}
              className="flex items-center justify-center my-4"
            >
              <CapCard
                preview={{
                  state: "Robot",
                  icon: "RiRobotFill",
                  iconType: "ri",
                  type: "service",
                  id: "4",
                  pos: "2",
                  message: "Domo arigato, Mr. Roboto",
                  icon2: "",
                  bgImage: "third",
                  artist: "instagram.com/jem.sahagun",
                  language: language,
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
