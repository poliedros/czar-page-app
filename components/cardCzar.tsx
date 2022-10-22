import React, { /* useEffect, */ useState } from "react";

import translations from "./../functions/translations";

import getIconsByName from "../functions/getIconsByName";
import trackingPointer from "../functions/trackingPointer";

import ModalCzar from "./modals/modalCzar";

/* interface Preview {
    state: string;
    icon: string;
    title: string;
    subtitle: string;
    content: string;
    bgImage: string;
    language: string;
} */

export default function CardCzar({ preview }: any) {
  const [style, setStyle] = useState<any>(undefined);

  trackingPointer(preview, setStyle);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  /* function getOffset(element: any) {
        if (!element.getClientRects().length) {
            return { top: 0, left: 0 };
        }
        let rect = element.getBoundingClientRect();
        let win = element.ownerDocument.defaultView;
        return {
            top: rect.top + win.pageYOffset,
            left: rect.left + win.pageXOffset,
        };
    }

    useEffect(() => {
        const cardf = document.getElementsByClassName("card-mt")[preview.id];

        function map(
            x: number,
            in_min: number,
            in_max: number,
            out_min: number,
            out_max: number
        ) {
            return (
                ((x - in_min) * (out_max - out_min)) / (in_max - in_min) +
                out_min
            );
        }

        cardf.addEventListener("mousemove", function (e: any) {
            const x = e.clientX - getOffset(cardf).left + window.scrollX;
            const y = e.clientY - getOffset(cardf).top + window.scrollY;

            const rY = map(x, 0, cardf.clientWidth, -17, 17);
            const rX = map(y, 0, cardf.clientHeight, -17, 17);

            setStyle({
                transform:
                    "rotateY(" + rY + "deg)" + " " + "rotateX(" + -rX + "deg)",
            });
        });

        cardf.addEventListener("mouseenter", function () {
            setStyle({ transition: "all " + 0.05 + "s" + " linear" });
        });

        cardf.addEventListener("mouseleave", function () {
            setStyle({
                transition: "all " + 0.2 + "s" + " linear",
                transform:
                    "rotateY(" + 0 + "deg)" + " " + "rotateX(" + 0 + "deg)",
            });
        });
    }, []); */

  return (
    <>
      {preview.type === "service" ? (
        <>
          {/* <div className="card2 fixed text-end top-0 right-3"><span className="bg-black p-1.5 text-xs" style={{ writingMode: "tb-rl" }}>Mendes</span></div>
                <div className="photografer2 fixed text-end top-0 right-10" style={{ /* display: "none" / }}><span className="bg-green-600 p-1.5 text-xs">Anderson Mendes</span></div> */}
          <div className="card card-mt" onClick={handleShow}>
            <div
              className={"cont-scroll image-mt " + preview.bgImage}
              style={style}
            >
              <div className="screen-mt">
                <div className="p-4">
                  {getIconsByName(preview.iconType, preview.icon)}
                </div>
                <div className="photografer fixed text-end top-0 right-3 invisible">
                  <span
                    className="bg-black p-1 m-1 text-[.5rem]"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    {preview.artist}
                  </span>
                </div>
                {/* <div className="flex justify-center"><span className="backdrop-blur-lg z-10 p-1">{ getIconsByName("io5", "IoChevronUp") }</span></div> */}
                <div
                  className="card-cont-scroll absolute bottom-0 left-0 text text-end p-4 max-h-[50vh] overflow-auto unselectable"
                  style={{
                    fontFamily: "'Source Sans Pro', sans-serif",
                  }}
                >
                  <h1
                    style={{
                      fontFamily: "'Ubuntu Condensed', sans-serif",
                    }}
                  >
                    {translations(
                      preview.type + "t",
                      preview.language,
                      preview.pos
                    )}
                  </h1>
                  <h6
                    className="text-[#e2e8f0] drop-shadow-[1px_1px_2px_black]"
                    style={{
                      fontFamily: "'M PLUS Code Latin', sans-serif",
                    }}
                  >
                    {preview.message}
                    {/* <GiPaintBrush /> */}
                  </h6>
                  <h5>
                    {translations(
                      preview.type + "st",
                      preview.language,
                      preview.pos
                    )}
                  </h5>
                  {/* <h6><a href="">for your business</a><br /><a href="">for your code</a></h6> */}
                  {/* <div className="adown flex justify-center invisible"><span className="backdrop-blur-sm z-10 p-1">{ getIconsByName("io5", "IoChevronDown") }</span></div> */}
                </div>
              </div>
              {/* <div className="adown flex justify-center invisible"><span className="backdrop-blur-sm z-10 p-1">{ getIconsByName("io5", "IoChevronDown") }</span></div> */}
            </div>
          </div>
        </>
      ) : preview.type === "project" ? (
        <div
          className="card card-mt"
          onClick={undefined /* this.handleShowAD */}
        >
          <div className={"image-mt " + preview.bgImage} style={style}>
            <div className="screen-mt">
              <div className="p-4">
                {getIconsByName(preview.iconType, preview.icon)}
              </div>
              <div className="photografer fixed text-end top-0 right-3 invisible">
                <span
                  className="bg-black p-1 m-1 text-[.5rem]"
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
                    fontFamily: "'Ubuntu Condensed', sans-serif",
                  }}
                >
                  {translations(
                    preview.type + "t",
                    preview.language,
                    preview.pos
                  )}
                </h1>
                {/* <h6
                                className="text-[#e2e8f0] drop-shadow-[1px_1px_2px_black]"
                                style={{
                                    fontFamily:
                                        "'M PLUS Code Latin', sans-serif",
                                }}
                            >
                                {preview.message}
                                {/* <GiPaintBrush /> /}
                            </h6> */}
                <h4>
                  {translations(
                    preview.type + "st",
                    preview.language,
                    preview.pos
                  )}
                </h4>
                <h6>
                  {translations(
                    preview.type + "tmsg",
                    preview.language,
                    preview.pos
                  )}
                </h6>
                {/* <h6><a href="">for your business</a><br /><a href="">for your code</a></h6> */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <ModalCzar
        show={show}
        handleClose={handleClose}
        state={preview.state}
        language={preview.language}
        title={translations(preview.type + "t", preview.language, preview.pos)}
      />
    </>
  );
}
