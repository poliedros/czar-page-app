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

import { useLanguage, useLanguageUpdate } from "../context/languageContext";
import translations from "../functions/translations";

export default function Start() {
    const [showOC, setShowOC] = useState(true);

    const handleShowOC = () => setShowOC(true);
    const handleCloseOC = () => setShowOC(false);

    const language = useLanguage();
    const toggleLanguage = useLanguageUpdate();

    return (
        <>
            <div className="App" id="start">
                <header className="App-header">
                    <div>
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
                    </div>
                    <BsChevronCompactUp className="slide-top fixed top-6 text-white z-[1]" />
                    <BsChevronCompactDown className="slide-bottom fixed bottom-6 text-white z-[1]" />
                    <BsMouse
                        className="relative text-[#6b7280] bottom-[90vh]"
                        style={{ top: "25vh" }}
                    />
                    <BiPlusMedical
                        className="text-flicker-in-glow absolute text-white"
                        style={{ fontSize: "7vmin" }}
                    />
                </header>
            </div>
            <Container className="unselectable">
                <h6
                    className="!fixed z-10 bottom-3 text-end backdrop-blur-sm p-[5px] text-white"
                    style={{
                        /* color: "white", position: "fixed", bottom: ".7rem", */ fontFamily:
                            "'M PLUS Code Latin', sans-serif" /* , textAlign: "start", backdropFilter: "blur(5px)", padding: "5px" */ /*, width: "80vw" */,
                    }}
                >
                    <span style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                        CZAR+ {translations("footm", language)}
                    </span>{" "}
                    ??? {translations("foots", language)}{" "}
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
                    <span className="bg-green-700 p-[5px]">2022</span>
                </h6>
            </Container>
            <Offcanvas
                show={showOC}
                placement="bottom"
                onHide={handleCloseOC}
                scroll={false}
                backdrop={false}
                className="!p-3 !h-16"
            >
                <Offcanvas.Body className="flex items-center justify-between overflow-hidden">
                    {translations("cookie", language)}
                    <Button
                        variant="secondary"
                        onClick={handleCloseOC}
                        className="me-2"
                    >
                        {translations("btnok", language)}
                    </Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
