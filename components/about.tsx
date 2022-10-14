import Container from "react-bootstrap/Container";

import translations from "../translations.json";

export default function About({ language }: { language: "en" | "es" | "pt" }) {
    return (
        <>
            <div
                className="App-header"
                id="about" /*style={{ backgroundColor: "#282c34", minHeight: "100vh" }}*/
            >
                <Container>
                    <h2
                        className="unselectable whitespace-pre my-6"
                        style={{
                            fontFamily: "'Ubuntu Condensed', sans-serif",
                            textAlign: "end",
                        }}
                    >
                        { translations.aboutmt[language] }
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
                        CZAR Devs is currently in an embryonic enterprise stage
                        - the kick-off came from the founders after establishing
                        a small range of ideas to solve common problems for
                        small businesses. We currently work remotely from 3
                        different countries and so we added more members
                        migrating to CZAR+ Devs. Our focus are in to manage the
                        flow of information in the business such as email system
                        management, file management like cloud service and
                        automatization of process to catch and delivery
                        information. In our projects that we develop based on
                        the claims of companies/owners, the idea is to guide
                        managers to have a better experience to organize
                        information and the work cycle.
                        <br />{" "}
                    </h5>

                    {/* <h6 style={{ position: "fixed", bottom: ".7rem", fontFamily: "'M PLUS Code Latin', sans-serif", textAlign: "start", backdropFilter: "blur(5px)", padding: "5px" /*, width: "80vw" / }}><span style={{ fontFamily: "'Josefin Sans', sans-serif" }}>CZAR+ {/* translations[this.props.language].footm /}</span> — {/* translations[this.props.language].foots /} </h6>
                    <h6 className="container" style={{ position: "fixed", bottom: "1rem", fontFamily: "'M PLUS Code Latin', sans-serif", textAlign: "end", paddingRight: "24px" }}><span style={{ backgroundColor: "green", padding: "5px" }}>2022</span></h6> */}
                </Container>
            </div>
        </>
    );
}
