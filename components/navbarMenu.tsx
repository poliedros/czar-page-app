import { useState } from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";

import translations from "../translations.json";
import getIcons from "../functions/getIcons";
import { Languages } from "../types/languages";

import { useLanguage, useLanguageUpdate } from "../context/languageContext";

export default function NavbarCzar() {
  const [showMOC, setShowMOC] = useState(false);

  const handleCloseMOC = () => setShowMOC(false);
  const handleShowMOC = () => setShowMOC(true);

  const language = useLanguage();
  const toggleLanguage = useLanguageUpdate();

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
              fontFamily: "'M PLUS Code Latin', sans-serif",
            }}
          >
            <Nav.Link href="#start" className="slide-start !text-xs">
              {translations.navbar.start[language]}
            </Nav.Link>
            <Nav.Link href="#greetings" className="slide-greetings !text-xs">
              {translations.navbar.greetings[language]}
            </Nav.Link>
            <Nav.Link href="#services" className="slide-services !text-xs">
              {translations.navbar.services[language]}
            </Nav.Link>
            <Nav.Link href="#projects" className="slide-projects !text-xs">
              {translations.navbar.projects[language]}
            </Nav.Link>
            <Nav.Link href="#contacts" className="slide-contacts !text-xs">
              {translations.navbar.contacts[language]}
            </Nav.Link>
            <Nav.Link href="#team" className="slide-contacts !text-xs">
              {translations.navbar.team[language]}
            </Nav.Link>
            <Nav.Link href="#about" className="slide-about !text-xs">
              {translations.navbar.about[language]}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Button
        variant="dark"
        className="navbuttonmedia fixed bottom-[4.5rem] left-2/4 translate-x-[-125%] !rounded-full !px-[6px] w-[30px] h-[30px] z-[1]"
        onClick={handleShowMOC}
      >
        <div className="w-[24px] h-[24px]">{getIcons("im", "imenu")}</div>
      </Button>

      <Offcanvas
        show={showMOC}
        onHide={handleCloseMOC}
        scroll={true}
        placement="bottom"
        variant="dark"
        className="!h-screen bg-transparent bg-opacity-30 backdrop-blur-sm"
      >
        <Offcanvas.Header className="white-close" closeButton />
        <Offcanvas.Body className="flex justify-center items-center">
          <Navbar variant="dark" style={{ textAlign: "center" }}>
            <Container>
              <Nav
                className="me-auto !flex-col"
                style={{
                  fontFamily: "'M PLUS Code Latin', sans-serif",
                }}
              >
                <Nav.Link href="#start">
                  {translations.navbar.start[language]}
                </Nav.Link>
                <Nav.Link href="#greetings">
                  {translations.navbar.greetings[language]}
                </Nav.Link>
                <Nav.Link href="#services">
                  {translations.navbar.services[language]}
                </Nav.Link>
                <Nav.Link href="#projects">
                  {translations.navbar.projects[language]}
                </Nav.Link>
                <Nav.Link href="#team">
                  {translations.navbar.team[language]}
                </Nav.Link>
                <Nav.Link href="#contacts">
                  {translations.navbar.contacts[language]}
                </Nav.Link>
                <Nav.Link href="#about">
                  {translations.navbar.about[language]}
                </Nav.Link>
                {/* <Nav.Link href="#drafts">
                  {translations.navbar.drafts[language]}
                </Nav.Link>
                <Nav.Link href="#concepts">
                  {translations.navbar.concepts[language]}
                </Nav.Link> */}
              </Nav>
            </Container>
          </Navbar>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
