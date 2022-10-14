import { useState } from "react";

import {
    BsMouse,
    BsChevronCompactDown,
    BsChevronCompactUp,
} from "react-icons/bs";
import { BiPlusMedical } from "react-icons/bi";

import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";

import translations from "../translations.json";

export default function Start({ language }: { language: "en" | "es" | "pt" }) {
    const [showOC, setShowOC] = useState(true);

    const handleShowOC = () => setShowOC(true);
    const handleCloseOC = () => setShowOC(false);

    return (
        <>
            <div className="App" id="start">
                <header className="App-header">
                    <div>
                        {/*
                    <svg className="svg" style={{ position: "absolute", left: "18.9vw", top: "19.5vh" }}>
                        <circle class="meter-1" cx="7.5em" cy="7.5em" r="6em" />
                    </svg>
                    <svg className="svg" style={{ position: "absolute", left: "41.5vw", top: "21.5vh" }}>
                        <circle class="meter-2" cx="7.5em" cy="7.5em" r="6em" />
                    </svg>
                    */}

                        <h1
                            className="unselectable -mb-20"
                            style={{
                                fontSize: "35vmin",
                                fontFamily: "'Josefin Sans', sans-serif",
                            }}
                        >
                            <span
                                className="inline-block align-top scale-x-[-1]"
                                style={{
                                    filter: "fliph",
                                }}
                            >
                                C
                            </span>
                            ZAR
                        </h1>

                        {/*
                    <h3 style={{ fontFamily: "'Josefin Sans', sans-serif", marginTop: "-10rem", marginBottom: "7rem" }}>
                        desenvolvedores
                    </h3>
                    */}
                    </div>
                    <BsChevronCompactUp className="slide-top fixed top-6 text-white z-[1]" />
                    <BsChevronCompactDown className="slide-bottom fixed bottom-6 text-white z-[1]" />
                    <BsMouse
                        className="absolute text-[#6b7280] bottom-[10vh]" /* style={{ bottom: "10vh" }} */
                    />
                    <BiPlusMedical
                        className="text-flicker-in-glow absolute text-white"
                        style={{ fontSize: "7vmin" }}
                    />
                </header>
            </div>
            <Container className="unselectable">
                <h6
                    className="!fixed z-10 bottom-3 text-start backdrop-blur-sm p-[5px] text-white"
                    style={{
                        /* color: "white", position: "fixed", bottom: ".7rem", */ fontFamily:
                            "'M PLUS Code Latin', sans-serif" /* , textAlign: "start", backdropFilter: "blur(5px)", padding: "5px" */ /*, width: "80vw" */,
                    }}
                >
                    <span style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                        CZAR+{" "}
                        {
                            translations.footm[
                                language
                            ] /* translations[this.props.language].footm */
                        }
                    </span>{" "}
                    —{" "}
                    {
                        translations.foots[
                            language
                        ] /* translations[this.props.language].foots */
                    }{" "}
                </h6>
                <h6
                    className="container !fixed z-10 bottom-4 text-end pr-[24px] text-white"
                    style={{
                        /* color: "white", position: "fixed", bottom: "1rem", */ fontFamily:
                            "'M PLUS Code Latin', sans-serif" /* , textAlign: "end", paddingRight: "24px" */,
                    }}
                >
                    <span
                        className="bg-green-700 p-[5px]"
                    >
                        2022
                    </span>
                </h6>
            </Container>
            <Offcanvas
                show={showOC}
                placement="bottom"
                onHide={handleCloseOC}
                scroll={false}
                backdrop={false}
                className="!h-24"
            >
                <Offcanvas.Body className="flex items-center justify-between overflow-hidden">
                    {translations.cookie[language]}
                    <Button
                        variant="primary"
                        onClick={handleCloseOC}
                        className="me-2"
                    >
                        {translations.btnok[language]}
                    </Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
