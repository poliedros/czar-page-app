import translations from "../translations.json";
import { Language } from "./languages";

export default function Contacts({ language }: { language: Language }) {
  return (
    <>
      <div className="App-header" id="drafts">
        <h3
          className="unselectable uppercase tracking-[.3rem] my-6"
          style={{
            fontFamily: "'Ubuntu Condensed', sans-serif",
          }}
        >
          {translations.draftmt[language]}
        </h3>
        <h5>{translations.comingsoon[language]}</h5>
        {/*<h5 style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                Super Trunfo - Os Politicos<br />
                Media Tracking<br />
                <FaBusAlt style={{ padding: "3px" }} /> Dublin Bus Stop Manager<br />
                Farol Digital Literacy<br />
                Web pages [ Portfolio ]
                </h5>*/}
      </div>
    </>
  );
}
