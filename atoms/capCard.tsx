import React, { useState } from "react";

import translations from "./../functions/translations";
import getIconsByName from "../functions/getIconsByName";

import Image from "next/image";

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
              className={"cont-scroll image-mt " + preview.bgImage}
              style={style}
            >
              <div className="screen-mt">
                <div className="p-4">
                  {getIconsByName(preview.iconType, preview.icon, "", "32px")}
                </div>
                <div className="photografer fixed text-end top-0 -right-6 invisible">
                  <span
                    className="bg-black p-1 mt-1 text-[.5rem] unselectable"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    {preview.artist}
                  </span>
                </div>
                <div
                  className="card-cont-scroll absolute bottom-0 right-0 text text-end p-4 max-h-[50vh] overflow-auto unselectable"
                  style={{
                    fontFamily: "'Source Sans Pro', sans-serif",
                  }}
                >
                  <h1
                    style={{
                      fontFamily: "'Ubuntu Condensed', sans-serif",
                    }}
                  >
                    {
                      translations(preview.type + "t", preview.language)[
                        preview.pos
                      ]
                    }
                  </h1>
                  <h6
                    className="text-[#e2e8f0] drop-shadow-[1px_1px_2px_black]"
                    style={{
                      fontFamily: "'M PLUS Code Latin', sans-serif",
                    }}
                  >
                    {preview.message}
                    <div className="flex justify-end">
                      {preview.icon2 !== ""
                        ? getIconsByName("ri", preview.icon2, "#e2e8f0")
                        : null}
                    </div>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : preview.type === "project" ? (
        <div className="card card-mt rounded-0" onClick={handleShow}>
          <div className={"image-mt " + preview.bgImage} style={style}>
            <div className="screen-mt">
              <div className="p-4">
                {preview.iconType === "image" ? (
                  <img src={preview.icon} alt="" width="32" height="32" />
                ) : (
                  getIconsByName(preview.iconType, preview.icon, "", "32px")
                )}
              </div>
              {preview.artist !== "" ? (
                <div className="photografer fixed text-end top-0 -right-6 invisible">
                  <span
                    className="bg-black p-1 mt-1 text-[.5rem] unselectable"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    {preview.artist}
                  </span>
                </div>
              ) : (
                <></>
              )}
              <div
                className="card-cont-scroll absolute bottom-0 right-0 text text-end p-4 max-h-[50vh] overflow-auto unselectable"
                style={{
                  fontFamily: "'Source Sans Pro', sans-serif",
                }}
              >
                <h1
                  style={{
                    fontFamily: "'Ubuntu Condensed', sans-serif",
                  }}
                >
                  {
                    translations(preview.type + "t", preview.language)[
                      preview.pos
                    ]
                  }
                </h1>
                <h6 className="text-stone-300">
                  {
                    translations(preview.type + "st", preview.language)[
                      preview.pos
                    ]
                  }
                  <span
                    className={
                      preview.pos === "0" || preview.pos === "1" ? "" : "hidden"
                    }
                  >
                    &alpha;
                  </span>{" "}
                  <span className={preview.pos === "2" ? "" : "hidden"}>
                    &beta;
                  </span>{" "}
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
        title={translations(preview.type + "t", preview.language)[preview.pos]}
      />
    </>
  );
}
