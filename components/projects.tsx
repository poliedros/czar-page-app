//import CardCzar from "./cardCzar";

import { Container, Row, Col } from "react-bootstrap";

import { useLanguage, useLanguageUpdate } from "../context/languageContext";
import translations from "../functions/translations";

import CapCard from "../atoms/capCard";
import About from "./about";

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
                fontFamily:
                  "'Ubuntu Condensed', sans-serif" /* textTransform: "uppercase", letterSpacing: ".3rem", margin: "1.5rem 0" */,
              }}
            >
              {translations("projectmt", language)}
            </h3>
            <div className="border-white border p-3 !mt-3 !w-[90%]">
              <h5 className="-mt-7 uppercase font-['Ubuntu_Condensed'] tracking-widest">
                <mark className="bg-[#282C34] text-white">Portifolio</mark>
              </h5>
              <h5 className="font-thin my-6">Projetos atuais</h5>
              <Row className="flex flex-col-s">
                <Col
                  md={6}
                  xs={12}
                  // md={6}
                  className="flex items-center justify-center pr-6" /* style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "1rem 0 1rem 0" }} */
                >
                  <CapCard
                    preview={{
                      state: "Cisab",
                      icon: "/cisabLogo.svg",
                      iconType: "image",
                      type: "project",
                      id: "5",
                      pos: "2",
                      message: "",
                      icon2: "",
                      bgImage: "tenth",
                      artist: "Daniela Gomes",
                      language: language,
                    }}
                  />
                </Col>
                <Col
                  md={6}
                  xs={12}
                  // md={6}
                  className="flex items-center justify-center pr-6" /* style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "1rem 0 1rem 0" }} */
                >
                  <CapCard
                    preview={{
                      state: "Ramos",
                      icon: "/ramosLogo.svg",
                      iconType: "image",
                      type: "project",
                      id: "6",
                      pos: "3",
                      message: "",
                      icon2: "",
                      bgImage: "ninth",
                      artist: "Daniela Gomes",
                      language: language,
                    }}
                  />
                </Col>
                <Col
                  md={6}
                  xs={12}
                  // md={6}
                  className="flex items-center justify-center pr-6" /* style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "1rem 0 1rem 0" }} */
                >
                  <CapCard
                    preview={{
                      state: "Infop",
                      icon: "/opLogo.svg",
                      iconType: "image",
                      type: "project",
                      id: "7",
                      pos: "4",
                      message: "",
                      icon2: "",
                      bgImage: "eighth",
                      artist: "Daniela Gomes",
                      language: language,
                    }}
                  />
                </Col>
                {/* <Col
                  md={6}
                  xs={12}
                  // md={6}
                  className="flex items-center justify-center pr-6" /* style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "1rem 0 1rem 0" }} /
                >
                  <CapCard
                    preview={{
                      state: "AdGallery",
                      icon: "IoGrid",
                      iconType: "io5",
                      type: "project",
                      id: "5",
                      pos: "0",
                      message: "",
                      icon2: "",
                      bgImage: "fifth",
                      artist: "www.takingpicta.fr",
                      language: language,
                    }}
                  />
                </Col> */}
                {/* <Col
                  md={6}
                  xs={12}
                  // md={6}
                  className="flex items-center justify-center pr-6" /* style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "1rem 0 1rem 0" }} /
                >
                  <CapCard
                    preview={{
                      state: "BusinessSales",
                      icon: "IoListCircleSharp",
                      iconType: "io5",
                      type: "project",
                      id: "6",
                      pos: "1",
                      message: "",
                      icon2: "",
                      bgImage: "fourth",
                      artist: "Rowan Freeman",
                      language: language,
                    }}
                  />
                </Col> */}
              </Row>
            </div>
          </Row>
        </Container>
        {/* <About /> */}
      </div>
    </>
  );
}
