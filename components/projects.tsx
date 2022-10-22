import CardCzar from "./cardCzar";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import translations from "../translations.json";
import { Language } from "./languages";

export default function Projects({ language }: Language) {
    return (
        <>
            <div className="App-header" id="projects">
                <Container>
                    <Row
                        className="justify-center" /* style={{ justifyContent: "center" }} */
                    >
                        <h3
                            className="unselectable uppercase tracking-[.3rem] my-6"
                            style={{
                                fontFamily:
                                    "'Ubuntu Condensed', sans-serif" /* textTransform: "uppercase", letterSpacing: ".3rem", margin: "1.5rem 0" */,
                            }}
                        >
                            {translations.projectmt[language]}
                        </h3>

                        {/*<Col xs={12} md={6} style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "1rem 0 1rem 0" }}>
                      
                      <div class="card" onClick={this.handleShowG}>
                        <div class="image ninth">
                          <div class="screen"></div>
                          <div class="text" style={{ fontFamily: "'Source Sans Pro', sans-serif", textAlign: "end", padding: "1rem" }}>
                            <h1 style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }}><FaMotorcycle /><br />Motorcycle Workshop Email Sender</h1>
                            <h3>stage pre-Alpha</h3>
                            <h5>
                            Specific form for sending emails to motorcycle workshop.
                              <br />
                              {/* <a href="https://poliedros.github.io/catalog-app/">
                                project example
                              </a> /}
                            </h5>
                          </div>
                        </div>
                      </div>
                      </Col> */}

                        <Col
                            xs={12}
                            md={6}
                            className="flex items-center justify-center my-4" /* style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "1rem 0 1rem 0" }} */
                        >
                            <CardCzar
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
                        </Col>
                        <Col
                            xs={12}
                            md={6}
                            className="flex items-center justify-center my-4" /* style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "1rem 0 1rem 0" }} */
                        >
                            <CardCzar
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
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
