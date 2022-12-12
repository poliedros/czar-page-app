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
                                <MemberCzar
                                    data={{
                                        name: "Carlos Zansávio",
                                        image: "https://media-exp1.licdn.com/dms/image/C4E03AQF-gbqqU9DNnQ/profile-displayphoto-shrink_800_800/0/1641765343981?e=1669852800&v=beta&t=SEYWNbYAv9mdJUwAGuV1mqIw1c4waRggAUxwS3k-4k4",
                                        links: {
                                            linkedin:
                                                "https://www.linkedin.com/in/carlos-zansavio/",
                                            youtube: "",
                                            twitter: "",
                                            medium: "",
                                        },
                                        pos: 1,
                                        language: language,
                                    }}
                                />
                                <MemberCzar
                                    data={{
                                        name: "Anderson Ribeiro",
                                        image: "https://media-exp1.licdn.com/dms/image/C4D03AQHy7GiX0EUVXA/profile-displayphoto-shrink_800_800/0/1517736705680?e=1669852800&v=beta&t=SaNkTpFDeJGcTr2B3W8p1Tafjq15fP4KuIrGRC95S-8",
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
                            <Row
                                className="h-[5vh]" /* style={{ height: "5vh" }} */
                            >
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
                            <Row
                                className="h-[5vh]" /* style={{ height: "5vh" }} */
                            >
                                <Col className="!flex items-center">
                                    {getIcons("io", "iarrowdown")} &nbsp;{" "}
                                    <span
                                        style={{
                                            fontFamily:
                                                "'Josefin Sans', sans-serif",
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
                                <MemberCzar
                                    data={{
                                        name: "Daniela Gomes",
                                        image: "https://media-exp1.licdn.com/dms/image/C4D03AQGpu5oac7sx_w/profile-displayphoto-shrink_800_800/0/1626460675704?e=1669852800&v=beta&t=xsz3anR_1qmDLszUV-MjM7PKgpuuDOuyUXA5PJeGXUU",
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
                                />

                                <MemberCzar
                                    data={{
                                        name: "Lucas Abreu",
                                        image: "https://media-exp1.licdn.com/dms/image/C5603AQFmRdwu54vuIQ/profile-displayphoto-shrink_800_800/0/1650575160073?e=1669852800&v=beta&t=rI5ymIq-LB2oDY4Sk3S6G0BedYETiKu-hLMBbZXKkfs",
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
                                />
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
