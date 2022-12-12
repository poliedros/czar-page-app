//import CardCzar from "./cardCzar";

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
                    <Row className="justify-center">
                        <h3
                            className="unselectable uppercase tracking-[.3rem] my-6"
                            style={{
                                fontFamily:
                                    "'Ubuntu Condensed', sans-serif" /* textTransform: "uppercase", letterSpacing: ".3rem", margin: "1.5rem 0" */,
                            }}
                        >
                            {translations("projectmt", language)}
                        </h3>

                        <Col
                            xs={12}
                            md={6}
                            className="flex items-center justify-center my-4" /* style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "1rem 0 1rem 0" }} */
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
                        </Col>
                        <Col
                            xs={12}
                            md={6}
                            className="flex items-center justify-center my-4" /* style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "1rem 0 1rem 0" }} */
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
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
