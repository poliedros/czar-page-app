import Container from "react-bootstrap/Container";

import getIconsByName from "../functions/getIconsByName";

import { useLanguage, useLanguageUpdate } from "../context/languageContext";
import translations from "../functions/translations";

export default function Concepts() {
  const language = useLanguage();
  const toggleLanguage = useLanguageUpdate();
  
  return (
    <>
      <div className="App-header" id="concepts">
        <h3
          className="unselectable uppercase tracking-[.3rem] my-6"
          style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }}
        >
          {translations("conceptmt", language)}
        </h3>
        <br />
        <Container>
          <div className="flex items-center justify-center">
            <div className="p-8" style={{ padding: "2rem" }}>
              {getIconsByName("si", "SiReact")}
            </div>
            <div className="border-l border-white p-2 text-left">
              <h6>{translations("conceptmsgs", language)[0]}</h6>
              <h6 style={{ fontSize: ".8rem" }}>
                {translations("conceptqtrs", language)[0]}
              </h6>
            </div>
          </div>
          <br />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="border-r border-white"
              style={{ padding: ".5rem", textAlign: "right" }}
            >
              <h6>{translations("conceptmsgs", language)[1]}</h6>
              <h6 style={{ fontSize: ".8rem" }}>
                {translations("conceptqtrs", language)[1]}
              </h6>
            </div>
            <div style={{ padding: "2rem" }}>
              {getIconsByName("io5", "IoLogoPwa")}
            </div>
          </div>
          <br />
          <div className="flex items-center justify-center">
            <div className="p-8" style={{ padding: "2rem" }}>
              {getIconsByName("si", "SiKubernetes")}
            </div>
            <div className="border-l border-white p-2 text-left">
              <h6>{translations("conceptmsgs", language)[2]}</h6>
              <h6 style={{ fontSize: ".8rem" }}>
                {translations("conceptqtrs", language)[2]}
              </h6>
            </div>
          </div>
          <br />
          <div className="flex items-center justify-center">
            <div className="border-r border-white p-2 text-right">
              <h6>{translations("conceptmsgs", language)[3]}</h6>
              <h6 style={{ fontSize: ".8rem" }}>
                {translations("conceptqtrs", language)[3]}
              </h6>
            </div>
            <div className="p-8" style={{ padding: "2rem" }}>
              {getIconsByName("si", "SiMicrosoftazure")}
              {/* <VscAzure /> */}
            </div>
          </div>
          <br />
          {/* <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <h1 style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }} className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Serviço de Automação de Processos (Robô)</h1>
                        </a>
                        <h6 style={{ fontFamily: "'M PLUS Code Latin', sans-serif", color: "lightgray", textShadow: "1px 1px 2px black, 2px 2px 4px #000000" }}>Domo arigato, Mr. Roboto</h6>
                        <h5 className="mb-3 font-normal text-gray-700 dark:text-gray-400">Robôs desenhados segundo as suas necessidades, tanto para pesquisar quanto para obter informações, com servidores funcionando 24 horas e 7 dias na semana</h5>
                        <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div> */}
        </Container>
      </div>
    </>
  );
}
