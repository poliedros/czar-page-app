import Container from "react-bootstrap/Container";

import translations from "../translations.json";

export default function Greetings({
    language,
}: {
    language: "en" | "es" | "pt";
}) {
    return (
        <>
            <div
                className="App-header"
                id="greetings" /*style={{ backgroundColor: "#282c34", minHeight: "100vh" }}*/
            >
                <Container>
                    <h1
                        className="unselectable my-6"
                        style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }}
                    >
                        {translations.greetingst[language]}
                    </h1>{" "}
                    {/* Welcome friend! */}
                    {/* <h5 style={{ fontFamily: "'Source Sans Pro', sans-serif" }} >We are a small team, but don&apos;t underestimate us<br />because we easily compensate with<br />our motivation, interest and willingness to learn.</h5> */}
                    <h5
                        className="whitespace-pre"
                        style={{
                            fontFamily: "'Source Sans Pro', sans-serif",
                        }}
                    >
                        {translations.greetingmsg[language]}
                    </h5>
                    <h6 style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                        We are looking for people or companies interested in
                        simple and focused projects or services
                        <br />
                        to solve problems for companies, organizations or
                        communities.
                    </h6>
                </Container>
            </div>
        </>
    );
}
