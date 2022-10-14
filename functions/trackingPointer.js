import { useEffect } from "react";

export default function TrackingPoiner(preview, setStyle) {
    function getOffset(element) {
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

        function map(x, in_min, in_max, out_min, out_max) {
            return (
                ((x - in_min) * (out_max - out_min)) / (in_max - in_min) +
                out_min
            );
        }

        cardf.addEventListener("mousemove", function (e) {
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
}
