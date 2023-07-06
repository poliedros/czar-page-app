import { Container, Row, Col } from "react-bootstrap";

import { useLanguage, useLanguageUpdate } from "../context/languageContext";
import translations from "../functions/translations";

import CapCard from "../atoms/capCard";

export default function Projects() {
  const language = useLanguage();
  const toggleLanguage = useLanguageUpdate();

  return (
    <>
      <div className="App-header" id="projects">
        <Container>
          <Row className="justify-center !my-24">
            <h3
              className="unselectable uppercase tracking-[.3rem] my-6"
              style={{
                fontFamily: "'Ubuntu Condensed', sans-serif",
              }}
            >
              {translations("projectmt", language)}
            </h3>
            <div className="border-white border p-3 !mt-3 !w-[90%]">
              <h5 className="-mt-7 uppercase font-['Ubuntu_Condensed'] tracking-widest">
                <mark className="bg-[#282C34] text-white">Portifolio</mark>
              </h5>
              <Row className="flex flex-col-s">
                <Col
                  md={6}
                  xs={12}
                  // md={6}
                  className="flex items-center justify-center pr-6"
                >
                  <CapCard
                    preview={{
                      state: "Cisab",
                      icon: "/cisabLogo.svg",
                      iconType: "image",
                      type: "project",
                      id: "3",
                      pos: "2",
                      message: "",
                      icon2: "",
                      bgImage: "tenth",
                      artist: "",
                      language: language,
                    }}
                  />
                </Col>
                <Col
                  md={6}
                  xs={12}
                  // md={6}
                  className="flex items-center justify-center pr-6"
                >
                  <CapCard
                    preview={{
                      state: "Ramos",
                      icon: "/ramosLogo.svg",
                      iconType: "image",
                      type: "project",
                      id: "4",
                      pos: "3",
                      message: "",
                      icon2: "",
                      bgImage: "ninth",
                      artist: "",
                      language: language,
                    }}
                  />
                </Col>
                <Col
                  md={6}
                  xs={12}
                  // md={6}
                  className="flex items-center justify-center pr-6"
                >
                  <CapCard
                    preview={{
                      state: "Infop",
                      icon: "/opLogo.svg",
                      iconType: "image",
                      type: "project",
                      id: "5",
                      pos: "4",
                      message: "",
                      icon2: "",
                      bgImage: "eighth",
                      artist: "",
                      language: language,
                    }}
                  />
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}
