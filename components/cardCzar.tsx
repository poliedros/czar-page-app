import React, { useEffect, useState } from "react";

import * as IconsMd from "react-icons/md";
import * as IconsRi from "react-icons/ri";
import { BsSlashCircleFill } from "react-icons/bs";

import translations from "../translations.json";

interface Preview {
    state: string;
    icon: string;
    title: string;
    subtitle: string;
    content: string;
    bgImage: string;
    language: string;
}

export default function CardCzar({ preview }: any) {
    const [style, setStyle] = useState<any>(undefined);

    function getOffset(element: any) {
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
    }, []);

    /* function getIcons(ico, name) {
    
        let IconComponent;
    
        if(ico == 'ri')
          IconComponent = IconsRi[translations[name]];
    
        if (!IconComponent) { // Return a default one
          return <BsSlashCircleFill />;
        }
      
        return <IconComponent />;
      }; */

    function getIconsByName(ico: string, name: string) {
        let IconComponent;
        if (ico == "md") IconComponent = IconsMd[name];
        if (ico == "ri") IconComponent = IconsRi[name];
        if (!IconComponent)
            // Return a default one
            return <BsSlashCircleFill />;
        return <IconComponent />;
    }

    return (
        <>
            {preview.type === "service" ? (
                <div
                    className="card card-mt"
                    onClick={undefined /* this.handleShowAD */}
                >
                    <div
                        className={"image-mt " + preview.bgImage}
                        style={style}
                    >
                        <div className="screen-mt">
                        <div className="p-4">
                            {getIconsByName(preview.iconType, preview.icon)}
                        </div>
                        <div
                            className="absolute bottom-0 left-0 text text-end p-4"
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
                                {
                                    translations[preview.type + "t"][
                                        preview.language
                                    ][preview.pos]
                                }
                            </h1>
                            <h6
                                className="text-[#e2e8f0] drop-shadow-[1px_1px_2px_black]"
                                style={{
                                    fontFamily:
                                        "'M PLUS Code Latin', sans-serif",
                                }}
                            >
                                {preview.message}
                                {/* <GiPaintBrush /> */}
                            </h6>
                            <h5>
                                {
                                    translations[preview.type + "st"][
                                        preview.language
                                    ][preview.pos]
                                }
                            </h5>
                            {/* <h6><a href="">for your business</a><br /><a href="">for your code</a></h6> */}
                        </div>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}
