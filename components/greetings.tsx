import Container from "react-bootstrap/Container";

import translations from "../functions/translations";
import { Language } from "./languages";

export default function Greetings({ language }: { language: Language }) {
  return (
    <>
      <div className="App-header" id="greetings">
        <Container>
          <h1
            className="unselectable my-6"
            style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }}
          >
            {translations("greetingst", language)}
          </h1>{" "}
          <h5
            className="whitespace-pre"
            style={{
              fontFamily: "'Source Sans Pro', sans-serif",
            }}
          >
            {translations("greetingmsg", language)}
          </h5>
          <h6 style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
            {translations("sectiongreetings", language)}
          </h6>
        </Container>
      </div>
    </>
  );
}
