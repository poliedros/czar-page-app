import React, { useState } from "react";

import translations from "./../functions/translations";
import getIconsByName from "../functions/getIconsByName";

import trackingPointer from "../functions/trackingPointer";
import CapModal from "./capModal";

export default function CapCard({ preview }: any) {
    const [style, setStyle] = useState<any>(undefined);
  
    trackingPointer(preview, setStyle);

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            {preview.type === "service" ? (
                <>
                    <div className="card card-mt rounded-0" onClick={handleShow}>
                        <div
                            className={
                                "cont-scroll image-mt " + preview.bgImage
                            }
                            style={style}
                        >
                            <div className="screen-mt">
                                <div className="p-4">
                                    {getIconsByName(
                                        preview.iconType,
                                        preview.icon
                                    )}
                                </div>
                                <div className="photografer fixed text-end top-0 right-3 invisible">
                                    <span
                                        className="bg-black p-1 m-1 text-[.5rem] unselectable"
                                        style={{ writingMode: "vertical-rl" }}
                                    >
                                        {preview.artist}
                                    </span>
                                </div>
                                <div
                                    className="card-cont-scroll absolute bottom-0 left-0 text text-end p-4 max-h-[50vh] overflow-auto unselectable"
                                    style={{
                                        fontFamily:
                                            "'Source Sans Pro', sans-serif",
                                    }}
                                >
                                    <h1
                                        style={{
                                            fontFamily:
                                                "'Ubuntu Condensed', sans-serif",
                                        }}
                                    >
                                        {translations(
                                            preview.type + "t",
                                            preview.language
                                        )[preview.pos]}
                                    </h1>
                                    <h6
                                        className="text-[#e2e8f0] drop-shadow-[1px_1px_2px_black]"
                                        style={{
                                            fontFamily:
                                                "'M PLUS Code Latin', sans-serif",
                                        }}
                                    >
                                        {preview.message}
                                        <div className="flex justify-end">{preview.icon2 !== "" ? getIconsByName("ri", preview.icon2, "#e2e8f0") : null}</div>
                                    </h6>
                                    <h5 className="!font-thin">
                                        {translations(
                                            preview.type + "st",
                                            preview.language
                                        )[preview.pos]}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : preview.type === "project" ? (
                <div
                    className="card card-mt rounded-0"
                    onClick={handleShow}
                >
                    <div
                        className={"image-mt " + preview.bgImage}
                        style={style}
                    >
                        <div className="screen-mt">
                            <div className="p-4">
                                {getIconsByName(preview.iconType, preview.icon)}
                            </div>
                            <div className="photografer fixed text-end top-0 right-3 invisible">
                                <span
                                    className="bg-black p-1 m-1 text-[.5rem] unselectable"
                                    style={{ writingMode: "vertical-rl" }}
                                >
                                    {preview.artist}
                                </span>
                            </div>
                            <div
                                className="card-cont-scroll absolute bottom-0 left-0 text text-end p-4 max-h-[50vh] overflow-auto unselectable"
                                style={{
                                    fontFamily: "'Source Sans Pro', sans-serif",
                                }}
                            >
                                <h1
                                    style={{
                                        fontFamily:
                                            "'Ubuntu Condensed', sans-serif",
                                    }}
                                >
                                    {translations(
                                        preview.type + "t",
                                        preview.language
                                    )[preview.pos]}
                                </h1>
                                <h4>
                                    {translations(
                                        preview.type + "st",
                                        preview.language
                                    )[preview.pos]}
                                </h4>
                                <h6>
                                    {translations(
                                        preview.type + "tmsg",
                                        preview.language
                                    )[preview.pos]}
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
            <CapModal
                show={show}
                handleClose={handleClose}
                state={preview.state}
                title={translations(
                    preview.type + "t",
                    preview.language
                )[preview.pos]}
            />
        </>
    );
}
