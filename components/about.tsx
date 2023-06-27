import { Container, Col, Row, Carousel } from "react-bootstrap";

import { useLanguage, useLanguageUpdate } from "../context/languageContext";
import translations from "../functions/translations";
import Image from "next/image";

export default function About() {
  const language = useLanguage();
  const toggleLanguage = useLanguageUpdate();

  return (
    <>
      <div className="mt-24 mb-48">
        {" "}
        {/* className="App-header" id="about" */}
        <Container className="flex justify-center itens-center flex-col">
          <Row className="unselectable mb-20 font-['Ubuntu_Condensed'] uppercase tracking-[.3rem]">
            <Col>
              <h5>Trabalhos em execução</h5>
            </Col>
          </Row>
          <Row>
            {/* <Col md={1}></Col> */}
            {/* <Col md={11}>
              <h2
                className="unselectable whitespace-pre my-6"
                style={{
                  fontFamily: "'Ubuntu Condensed', sans-serif",
                  textAlign: "end",
                }}
              >
                {translations("aboutmt", language)}
              </h2>
              <br />
              <h5
                className="verticalLineRight"
                style={{
                  fontFamily: "'Source Sans Pro', sans-serif",
                  textAlign: "end",
                  padding: "0 10px 0 10px",
                }}
              >
                {translations("sectionabout", language)}
                <br />{" "}
              </h5>
            </Col> */}
            <Col>
              <Carousel
                indicators={false}
                controls={undefined}
                prevIcon={<></>}
                nextIcon={<></>}
              >
                <Carousel.Item>
                  <div className="!flex !justify-center">
                    <a href="https://cisab.czar.dev/">
                      <img
                        className="w-[30vw] elemCar"
                        src={"/cisabLogo.svg"}
                      />
                    </a>
                  </div>
                  <Carousel.Caption>
                    {/* <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p> */}
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="!flex !justify-center">
                    <a href="https://infop.czar.dev/">
                      <img className="w-[30vw] elemCar" src={"/opLogo.svg"} />
                    </a>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="!flex !justify-center">
                    <a href="https://ramos.czar.dev/">
                      <img
                        className="w-[30vw] elemCar"
                        src={"/ramosLogo.svg"}
                      />
                    </a>
                  </div>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
