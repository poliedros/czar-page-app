import { useState } from "react";

/* import * as IconsIo from "react-icons/io5";
import { BsSlashCircleFill } from "react-icons/bs"; */

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";

//import defaultIcons from "../defaultIcons.json";
import getIcons from "../functions/getIcons";

import { useLanguage, useLanguageUpdate } from "../context/languageContext";

export default function NavbarTranslations() {
  const [showTOC, setShowTOC] = useState(false);

  const handleCloseTOC = () => setShowTOC(false);
  const handleShowTOC = () => setShowTOC(true);

  const language = useLanguage();
  const toggleLanguage: any = useLanguageUpdate();

  /* function getIcons(ico: string, name: string) {
        let IconComponent;

        if (ico == "io") IconComponent = IconsIo[defaultIcons[name]];

        if (!IconComponent) {
            // Return a default one
            return <BsSlashCircleFill />;
        }

        return <IconComponent />;
    } */

  return (
    <>
      <Navbar
        variant="dark"
        className="!fixed right-0 top-12 text-end" /* style={{ position: "fixed", right: "0", top: "3rem", textAlign: "end" }} */
      >
        <Container>
          <Nav
            className="unselectable me-auto navmedia !flex-col"
            style={{
              fontFamily: "'M PLUS Code Latin', sans-serif",
              /* flexDirection: "column", */
            }}
          >
            <div className="text-white">{getIcons("io5", "ilanguage")}</div>
            {/* <IoLanguageSharp style={{ color: "white" }} /> */}
            <br />
            <Nav.Link
              className="fade-in-rtrans !text-[0.5rem]"
              /* style={{ fontSize: ".5rem" }} */ onClick={() =>
                toggleLanguage("en")
              }
            >
              EN
            </Nav.Link>
            <Nav.Link
              className="fade-in-rtrans !text-[0.5rem]"
              /* style={{ fontSize: ".5rem" }} */ onClick={
                /* () =>
                                    handleLanguage(
                                        "es"
                                    ) */ /* () => { setLanguage('es'); console.log(language) } */ () =>
                  toggleLanguage("es")
              }
            >
              ES
            </Nav.Link>
            <Nav.Link
              className="fade-in-rtrans !text-[0.5rem]"
              /* style={{ fontSize: ".5rem" }} */ onClick={() =>
                toggleLanguage("pt")
              }
            >
              PT
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Button
        variant="light"
        className="navbuttonmedia fixed bottom-[4.5rem] left-2/4 translate-x-1/4 !rounded-full !px-[6px] w-[30px] h-[30px] z-[1]" /* style={{ position: "fixed",
                                      bottom: "4.5rem",
                                      left: "50%",
                                      transform: "translateX(25%)",
                                      borderRadius: "100%",
                                      paddingLeft: "6px",
                                      paddingRight: "6px",
                                      height: "40px",
                                      visibility: "hidden"
                                    }} */
        onClick={handleShowTOC}
      >
        <div className="w-[24px] h-[24px]">{getIcons("io5", "ilanguage")}</div>
        {/* <IoLanguageSharp className="navbuttonmedia" style={{ width: "24px", height: "24px" }} /> */}
      </Button>

      <Offcanvas
        show={showTOC}
        onHide={handleCloseTOC}
        placement="bottom"
        variant="dark"
        className="bg-transparent bg-opacity-30 backdrop-blur-sm" /* style={{ backgroundColor: "rgba(0,0,0, .3)" /*, backdropFilter: "blur(5px)" /*, filter: "blur(8px)" / }} */
      >
        <Offcanvas.Header className="white-close" closeButton />
        <Offcanvas.Body
          className="flex justify-center items-center" /* style={{ display: "flex", justifyContent: "center", alignItems: "center" }} */
        >
          <Navbar
            variant="dark"
            className="text-center" /* style={{ textAlign: "center" }} */
          >
            <Container>
              <Nav
                className="me-auto !flex-col"
                style={{
                  /* flexDirection: "column", */ fontFamily:
                    "'M PLUS Code Latin', sans-serif",
                }}
              >
                <Nav.Link
                  onClick={
                    () => {
                      toggleLanguage("en");
                      setShowTOC(false);
                    } //toggleLanguage
                  }
                >
                  EN
                </Nav.Link>
                <Nav.Link
                  onClick={
                    () => {
                      toggleLanguage("es");
                      setShowTOC(false);
                    } //toggleLanguage
                  }
                >
                  ES
                </Nav.Link>
                <Nav.Link
                  onClick={
                    () => {
                      toggleLanguage("pt");
                      setShowTOC(false);
                    } //toggleLanguage
                  }
                >
                  PT
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
