import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import getIconsByName from "../functions/getIconsByName";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useLanguage } from "../context/languageContext";
import { useCallback, useEffect, useState } from "react";

export default function NavbarContacts({ bottom = "20" }: { bottom: string }) {
  const language = useLanguage();

  // useEffect(() => {
  //   document.addEventListener("scroll", (evt) => {
  //     const btn = document.getElementById("buttonFixed");
  //     if (btn) btn.style.transform = `translateY(${window.scrollY}px)`;
  //   });
  // });

  // const [scrollPosition, setScrollPosition] = useState(0);

  // const handleScroll = () => {
  //   const position = window.scrollY;
  //   setScrollPosition(position);
  //   console.log(position);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [scrollPosition]);

  // const scrollEvent = (e: any) => {
  //   alert(e.target.scrollTop);
  // };

  return (
    <>
      <div className="!relative">
        {" "}
        {/*onScroll={scrollEvent}*/} {/*h-[3000px] bg-gray-600*/}
        <Navbar
          id="buttonFixed"
          variant="dark"
          className={"!fixed right-9 bottom-1/4 text-end z-10"}
          style={{ transition: "transform 0.5s" }}
        >
          <Container>
            <Nav className="unselectable me-auto !flex-col text-white">
              <div className="!rounded-full !p-0 drop-shadow-lg !bg-transpant !border-[#0dc143]">
                <div className="puff-out-center border-[1.5px] border-white rounded-full p-2">
                  {getIconsByName("ri", "RiWhatsappFill", "", "32px")}
                </div>
              </div>
            </Nav>
          </Container>
        </Navbar>
        <Navbar
          variant="dark"
          className={"!fixed right-9 bottom-1/4 text-end z-10"}
        >
          <Container>
            <Nav className="unselectable me-auto !flex-col text-white">
              <OverlayTrigger
                key={"bottom"}
                placement={"bottom"}
                overlay={
                  <Tooltip id={`tooltip-${"bottom"}`}>
                    {language === "pt" ? "Lucas Marcus" : "Anderson"}
                  </Tooltip>
                }
              >
                <Button
                  // variant="light"
                  className="!rounded-full !p-0 drop-shadow-lg !bg-[#0dc143] !border-[#0dc143]"
                  href={
                    language === "pt"
                      ? "https://wa.me/5532999263905"
                      : "https://wa.me/5491155802908"
                  }
                >
                  <div className="border-white rounded-full p-2">
                    {getIconsByName("ri", "RiWhatsappFill", "", "32px")}
                  </div>
                </Button>
              </OverlayTrigger>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
