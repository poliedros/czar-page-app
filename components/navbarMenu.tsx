import { useState } from "react";

/* import * as IconsIm from "react-icons/im";
import { BsSlashCircleFill } from "react-icons/bs"; */

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";

import translations from "../translations.json";
//import defaultIcons from "../defaultIcons.json";
import getIcons from "../functions/getIcons";
import { Languages } from "../types/languages";

import { useLanguage, useLanguageUpdate } from "../context/languageContext";

export default function NavbarCzar() {
  const [showMOC, setShowMOC] = useState(false);

  const handleCloseMOC = () => setShowMOC(false);
  const handleShowMOC = () => setShowMOC(true);

  const language = useLanguage();
  const toggleLanguage = useLanguageUpdate();

  /* function getIcons(ico: string, name: string) {
        let IconComponent;

        if (ico == "im") IconComponent = IconsIm[defaultIcons[name]];

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
        className="!fixed bottom-[3rem] text-start" /* style={{ position: "fixed", bottom: "3rem", textAlign: "start" }} */
      >
        <Container>
          <Nav
            className="unselectable me-auto navmedia !flex-col"
            style={{
              /* flexDirection: "column", */ fontFamily:
                "'M PLUS Code Latin', sans-serif",
            }}
          >
            <Nav.Link
              href="#start"
              className="slide-start !text-xs" /* style={{ fontSize: ".7rem" }} */
            >
              {
                translations.navbar.start[
                  language
                ] /* translations[language].navbar[0] */
              }
            </Nav.Link>
            <Nav.Link
              href="#greetings"
              className="slide-greetings !text-xs" /* style={{ fontSize: ".7rem" }} */
            >
              {
                translations.navbar.greetings[
                  language
                ] /* translations[language].navbar[1] */
              }
            </Nav.Link>
            <Nav.Link
              href="#services"
              className="slide-services !text-xs" /* style={{ fontSize: ".7rem" }} */
            >
              {
                translations.navbar.services[
                  language
                ] /* translations[language].navbar[2] */
              }
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className="slide-projects !text-xs" /* style={{ fontSize: ".7rem" }} */
            >
              {
                translations.navbar.projects[
                  language
                ] /* translations[language].navbar[3] */
              }
            </Nav.Link>
            <Nav.Link
              href="#team"
              className="slide-team !text-xs" /* style={{ fontSize: ".7rem" }} */
            >
              {
                translations.navbar.team[
                  language
                ] /* translations[language].navbar[4] */
              }
            </Nav.Link>
            <Nav.Link
              href="#contacts"
              className="slide-contacts !text-xs" /* style={{ fontSize: ".7rem" }} */
            >
              {
                translations.navbar.contacts[
                  language
                ] /* translations[language].navbar[5] */
              }
            </Nav.Link>
            <Nav.Link
              href="#about"
              className="slide-about !text-xs" /* style={{ fontSize: ".7rem" }} */
            >
              {
                translations.navbar.about[
                  language
                ] /* translations[language].navbar[6] */
              }
            </Nav.Link>
            <Nav.Link
              href="#drafts"
              className="slide-drafts !text-xs" /* style={{ fontSize: ".7rem" }} */
            >
              {
                translations.navbar.drafts[
                  language
                ] /* translations[language].navbar[7] */
              }
            </Nav.Link>
            <Nav.Link
              href="#concepts"
              className="slide-concepts !text-xs" /* style={{ fontSize: ".7rem" }} */
            >
              {
                translations.navbar.concepts[
                  language
                ] /* translations[language].navbar[8] */
              }
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Button
        variant="dark"
        className="navbuttonmedia fixed bottom-[4.5rem] left-2/4 translate-x-[-125%] !rounded-full !px-[6px] w-[30px] h-[30px] z-[1]" /* style={{ position: "fixed",
                                      bottom: "4.5rem",
                                      left: "50%",
                                      transform: "translateX(-125%)",
                                      borderRadius: "100%",
                                      paddingLeft: "6px",
                                      paddingRight: "6px",
                                      height: "40px",
                                      visibility: "hidden"
                                    }} */
        onClick={handleShowMOC}
      >
        <div className="w-[24px] h-[24px]">{getIcons("im", "imenu")}</div>
        {/* <ImMenu className="navbuttonmedia" style={{ width: "24px", height: "24px" }} /> */}
      </Button>

      <Offcanvas
        show={showMOC}
        onHide={handleCloseMOC}
        scroll={true}
        placement="bottom"
        variant="dark"
        className="!h-screen bg-transparent bg-opacity-30 backdrop-blur-sm" /* style={{ height: "100vh", backgroundColor: "rgba(0,0,0, .3)", backdropFilter: "blur(5px)" /*, filter: "blur(8px)" / }} */
      >
        <Offcanvas.Header className="white-close" closeButton />
        <Offcanvas.Body
          className="flex justify-center items-center" /* style={{ display: "flex", justifyContent: "center", alignItems: "center" }} */
        >
          <Navbar variant="dark" style={{ textAlign: "center" }}>
            <Container>
              <Nav
                className="me-auto !flex-col"
                style={{
                  /* flexDirection: "column", */ fontFamily:
                    "'M PLUS Code Latin', sans-serif",
                }}
              >
                <Nav.Link href="#start">
                  {
                    translations.navbar.start[
                      language
                    ] /* translations[language].navbar[0] */
                  }
                </Nav.Link>
                <Nav.Link href="#greetings">
                  {
                    translations.navbar.greetings[
                      language
                    ] /* translations[language].navbar[1] */
                  }
                </Nav.Link>
                <Nav.Link href="#services">
                  {
                    translations.navbar.services[
                      language
                    ] /* translations[language].navbar[2] */
                  }
                </Nav.Link>
                <Nav.Link href="#projects">
                  {
                    translations.navbar.projects[
                      language
                    ] /* translations[language].navbar[3] */
                  }
                </Nav.Link>
                <Nav.Link href="#team">
                  {
                    translations.navbar.team[
                      language
                    ] /* translations[language].navbar[4] */
                  }
                </Nav.Link>
                <Nav.Link href="#contacts">
                  {
                    translations.navbar.contacts[
                      language
                    ] /* translations[language].navbar[5] */
                  }
                </Nav.Link>
                <Nav.Link href="#about">
                  {
                    translations.navbar.about[
                      language
                    ] /* translations[language].navbar[6] */
                  }
                </Nav.Link>
                <Nav.Link href="#drafts">
                  {
                    translations.navbar.drafts[
                      language
                    ] /* translations[language].navbar[7] */
                  }
                </Nav.Link>
                <Nav.Link href="#concepts">
                  {
                    translations.navbar.concepts[
                      language
                    ] /* translations[language].navbar[8] */
                  }
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
