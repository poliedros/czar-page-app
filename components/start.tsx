import { useEffect, useRef, useState } from "react";
import {
  BsMouse,
  BsChevronCompactDown,
  BsChevronCompactUp,
} from "react-icons/bs";
import { BiPlusMedical } from "react-icons/bi";

import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";

import { useLanguage, useLanguageUpdate } from "../context/languageContext";
import translations from "../functions/translations";
import NavbarContacts from "./navbarContacts";

import { useTypingText } from "./../functions/useTypingtext";

export default function Start() {
  const [showOC, setShowOC] = useState(true);

  const handleShowOC = () => setShowOC(true);
  const handleCloseOC = () => {
    setBottom("3");
    setShowOC(false);
  };

  const language = useLanguage();
  const toggleLanguage = useLanguageUpdate();

  const [bottom, setBottom] = useState<string>("20");

  const { word } = useTypingText(
    translations("startMessages", language),
    130,
    20
  );

  const today = new Date();

  return (
    <>
      {/* <div className="w-full !h-[100vh] relative flex justify-center items-center">
        <div>
          <h1 className="unselectable font-['Josefin_Sans'] text-[35vmin] text-white mb-0 puff-in-bottom">
            <span
              className="inline-block scale-x-[-1]"
              style={{
                filter: "fliph",
              }}
            >
              C
            </span>
            ZAR
            <BiPlusMedical className="!w-[36px] !h-[36px] absolute left-[calc(50%-18px)] top-[calc(50%-36px)] text-[7vmin]" />
          </h1>
        </div>
        <h5
          className="font-['M_PLUS_Code_Latin'] text-gray-400 absolute top-[75vh]" //[#29FC16]
          style={{ textShadow: "1px 1px 4px #ced4da" }} //#29FC16
        >
          {word}_
        </h5>
      </div> */}
      {/* <div className="flex w-[100vw] h-[100vh] absolute top-1/4 left-1/4 hover:animate-pulse">
        <h1 className="unselectable puff-in-bottom font-['Josefin_Sans'] text-[35vmin]">
          <span
            className="inline-block align-top scale-x-[-1]"
            style={{
              filter: "fliph",
            }}
          >
            C
          </span>
        </h1>
        <h1 className="unselectable puff-in-bottom font-['Josefin_Sans'] text-[35vmin]">
          Z
        </h1>
        <h1 className="unselectable puff-in-bottom font-['Josefin_Sans'] text-[35vmin]">
          A
        </h1>
        <h1 className="unselectable puff-in-bottom font-['Josefin_Sans'] text-[35vmin]">
          R
        </h1>
      </div> */}
      <div className="App" id="start">
        <div className="w-full !h-[100vh] relative flex justify-center items-center bg-[#282c34]">
          <div>
            <h1 className="unselectable font-['Josefin_Sans'] text-[35vmin] text-white mb-0 puff-in-bottom-05">
              <span
                className="inline-block scale-x-[-1]"
                style={{
                  filter: "fliph",
                }}
              >
                C
              </span>
              <span className="puff-in-bottom-1">Z</span>
              <span className="puff-in-bottom-2">A</span>
              <span className="puff-in-bottom-15">R</span>
              <BiPlusMedical className="!w-[36px] !h-[36px] absolute left-[calc(50%-18px)] top-[calc(50%-36px)] text-[7vmin] text-flicker-in-glow hover:animate-ping" />
            </h1>
          </div>
          <h5
            className="font-['M_PLUS_Code_Latin'] text-gray-400 absolute top-[75vh]" //[#29FC16]
            style={{ textShadow: "1px 1px 4px #ced4da" }} //#29FC16
          >
            {word}_
          </h5>
          {/* <BsMouse className="text-[#6b7280]" /> */}
        </div>
        {/*<header className="App-header">
           <div>
            <h5 className="unselectable text-transparent my-12">none</h5>
            <div className="flex items-center justify-center hover:animate-pulse">
              <h1 className="unselectable -mb-20 puff-in-bottom font-['Josefin_Sans'] text-[35vmin]">
                <span
                  className="inline-block align-top scale-x-[-1]"
                  style={{
                    filter: "fliph",
                  }}
                >
                  C
                </span>
              </h1>
              <h1 className="unselectable -mb-20 puff-in-bottom font-['Josefin_Sans'] text-[35vmin]">
                Z
              </h1>
              <h1 className="unselectable -mb-20 puff-in-bottom font-['Josefin_Sans'] text-[35vmin]">
                A
              </h1>
              <h1 className="unselectable -mb-20 puff-in-bottom font-['Josefin_Sans'] text-[35vmin]">
                R
              </h1>
            </div>
          </div>
          {/* <h5>
            Desenvolvimento de Web Sites,
            Criação de Aplicativos,
            Elaboração de Projetos de TI,
            Construção de Programas Personalizados,
            Planificação de Plataformas de Software,
            Análises de Publicidade Online,
            Estruturação de Programas,
            Hospedagem em Data Center 
          </h5> /}
          <BsChevronCompactUp className="slide-top fixed top-6 text-white z-[1]" />
          <BsChevronCompactDown className="slide-bottom fixed bottom-6 text-white z-[1]" />
          <BsMouse
            className="relative text-[#6b7280] bottom-[90vh]"
            style={{ top: "25vh" }}
          />
          <BiPlusMedical className="text-flicker-in-glow absolute text-white text-[7vmin] hover:animate-ping" />
          <h5
            className="my-12 font-['M_PLUS_Code_Latin'] text-gray-400" //[#29FC16]
            style={{ textShadow: "1px 1px 4px #ced4da" }} //#29FC16
          >
            {word}_
          </h5> 
        </header>*/}
      </div>

      <Container className="unselectable">
        <h6
          className="!fixed z-10 bottom-3 text-end backdrop-blur-sm p-[5px] text-white mb-10 sm:mb-0"
          style={{
            /* color: "white", position: "fixed", bottom: ".7rem", */ fontFamily:
              "'M PLUS Code Latin', sans-serif" /* , textAlign: "start", backdropFilter: "blur(5px)", padding: "5px" */ /*, width: "80vw" */,
          }}
        >
          <span style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
            CZAR+ {translations("footm", language)}
          </span>
          {/* {" "}
          — {translations("foots", language)}{" "} */}
        </h6>
        <h6
          className="container !fixed z-10 bottom-4 text-end pr-[24px] text-white"
          style={{
            color: "white",
            position: "fixed",
            bottom: "1rem",
            fontFamily: "'M PLUS Code Latin', sans-serif",
            textAlign: "end",
            paddingRight: "24px",
          }}
        >
          <span className="text-[#282c34] bg-[#29FC16] drop-shadow-[1px_1px_4px_rgba(41,252,22,0.75)] p-[5px]">
            {today.getFullYear()}
          </span>
        </h6>
      </Container>
      <div className="bg-transparent">
        <NavbarContacts bottom={bottom} />
      </div>
      <Offcanvas
        show={showOC}
        placement="bottom"
        onHide={handleCloseOC}
        scroll={false}
        backdrop={false}
        className="!p-0 !h-auto"
      >
        <Offcanvas.Body className="flex items-center justify-between overflow-hidden">
          {translations("cookie", language)}
          <Button
            variant="secondary"
            onClick={handleCloseOC}
            className="me-2 ml-3 rounded-0"
          >
            {translations("btnok", language)}
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
