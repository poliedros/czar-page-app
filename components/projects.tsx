import CardCzar from "./cardCzar";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import translations from "../translations.json";

export default function Projects({
    language,
}: {
    language: "en" | "es" | "pt";
}) {
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
                                    state: "AG",
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
                            {/* <div className="card" onClick={undefined /* this.handleShowG /}>
                            <div className="image fifth">
                                <div className="screen"></div>
                                <div className="text text-end p-4" style={{ fontFamily: "'Source Sans Pro', sans-serif", /* textAlign: "end", padding: "1rem" / }}>
                                    <h1 style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }}>{/* <IoGrid /> /}<br />{/* translations[this.props.language].projectt[0] /}</h1>
                                    <h3>{/* translations[this.props.language].projectst[0] /}</h3>
                                    <h5>
                                        {/* translations[this.props.language].projecttmsg[0] /}
                                        <br />
                                        {/* <a href="https://poliedros.github.io/catalog-app/">
                                project example
                              </a> /}
                                    </h5>
                                </div>
                            </div>
                        </div> */}
                        </Col>
                        <Col
                            xs={12}
                            md={6}
                            className="flex items-center justify-center my-4" /* style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "1rem 0 1rem 0" }} */
                        >
                            <CardCzar
                                preview={{
                                    state: "PS",
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
                            {/* <div className="card" onClick={undefined /* this.handleShowS /}>
                            <div className="image fourth">
                                <div className="screen"></div>
                                <div className="text text-end p-4" style={{ fontFamily: "'Source Sans Pro', sans-serif", /* textAlign: "end", padding: "1rem" / }}>
                                    <h2 style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }}>{/* <IoListCircleSharp /> /}<br />{/* translations[this.props.language].projectt[1] /}</h2>
                                    <h3>{/* translations[this.props.language].projectst[1] /}</h3>
                                    <h5>
                                        {/* translations[this.props.language].projecttmsg[1] /}
                                    </h5>
                                </div>
                            </div>
                        </div> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
