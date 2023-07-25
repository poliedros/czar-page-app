import { Container, Row, Col } from "react-bootstrap";

import translations from "../translations.json";

import { useLanguage, useLanguageUpdate } from "../context/languageContext";
import CapCard from "../atoms/capCard";
import IconsByName from "./iconsByName";

export default function Services() {
  const language = useLanguage();
  const toggleLanguage = useLanguageUpdate();

  return (
    <>
      <div className="App-header" id="services">
        <Container>
          <Row className="flex justify-center items-center !my-24">
            <h3
              className="unselectable uppercase tracking-[.3rem] my-6"
              style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }}
            >
              {translations.servicemt[language]}
            </h3>
            <div className="border-white border py-3 !mt-3 !w-[90%]">
              <h5 className="-mt-7 uppercase font-['Ubuntu_Condensed'] tracking-widest">
                <mark className="bg-[#282C34] text-white">
                  {translations.mainServices[language]}
                </mark>
              </h5>
              <h5 className="font-thin my-6">
                {translations.mainServicesMessage[language]}
              </h5>
              <Row>
                <Col className="flex flex-col items-end">
                  <h5 className="flex items-center m-3 hover:text-[#29FC16] hover:animate-pulse unselectable">
                    <span className="mr-3">
                      {translations.servicesTopics[language][0]}
                    </span>
                    {IconsByName("io", "IoIosColorPalette", "40px", "white")}{" "}
                  </h5>
                  <h5 className="flex items-center m-3 hover:text-[#29FC16] hover:animate-pulse unselectable">
                    <span className="mr-3">
                      {translations.servicesTopics[language][2]}
                    </span>
                    {IconsByName("md", "MdStars", "40px", "white")}
                  </h5>
                  <h5 className="flex items-center m-3 hover:text-[#29FC16] hover:animate-pulse unselectable">
                    <span className="mr-3">
                      {translations.servicesTopics[language][4]}
                    </span>
                    {IconsByName("ri", "RiShoppingBag3Fill", "40px", "white")}
                  </h5>
                  <h5 className="flex items-center m-3 hover:text-[#29FC16] hover:animate-pulse unselectable">
                    <span className="mr-3">
                      {translations.servicesTopics[language][6]}
                    </span>
                    {IconsByName("md", "MdOutlineAreaChart", "40px", "white")}
                  </h5>
                  <h5 className="flex items-center m-3 hover:text-[#29FC16] hover:animate-pulse unselectable">
                    <span className="mr-3">
                      {translations.servicesTopics[language][8]}
                    </span>
                    {IconsByName("tb", "TbChartDots3", "40px", "white")}
                  </h5>
                </Col>
                <Col className="flex flex-col items-start">
                  <h5 className="flex items-center m-3 hover:text-[#29FC16] hover:animate-pulse unselectable">
                    <div>{IconsByName("md", "MdOutlineWeb", "40px")}</div>
                    <span className="ml-3">
                      {translations.servicesTopics[language][1]}
                    </span>
                  </h5>
                  <h5 className="flex items-center m-3 hover:text-[#29FC16] hover:animate-pulse unselectable">
                    {IconsByName("ri", "RiShieldStarFill", "40px", "white")}
                    <span className="ml-3">
                      {translations.servicesTopics[language][3]}
                    </span>
                  </h5>
                  <h5 className="flex items-center m-3 hover:text-[#29FC16] hover:animate-pulse unselectable">
                    {IconsByName("fa", "FaEye", "40px", "white")}
                    <span className="ml-3">
                      {translations.servicesTopics[language][5]}
                    </span>
                  </h5>
                  <h5 className="flex items-center m-3 hover:text-[#29FC16] hover:animate-pulse unselectable">
                    {IconsByName("bi", "BiSupport", "40px", "white")}
                    <span className="ml-3">
                      {translations.servicesTopics[language][7]}
                    </span>
                  </h5>
                  <h5 className="flex items-center m-3 hover:text-[#29FC16] hover:animate-pulse unselectable">
                    {IconsByName(
                      "hi",
                      "HiPresentationChartLine",
                      "40px",
                      "white"
                    )}
                    <span className="ml-3">
                      {translations.servicesTopics[language][9]}
                    </span>
                  </h5>
                </Col>
              </Row>
              <h5 className="font-thin my-6">
                {translations.mainServicesSubMessage[language]}
              </h5>
              <Col
                md={12}
                // xs={12}
                // lg={4}
                className="flex items-center justify-center"
              >
                <CapCard
                  preview={{
                    state: "DataScience",
                    icon: "MdDocumentScanner",
                    iconType: "md",
                    type: "service",
                    id: "0",
                    pos: "5",
                    message: "",
                    icon2: "",
                    bgImage: "twelfth",
                    artist: "instagram.com/jem.sahagun",
                    language: language,
                  }}
                />
              </Col>
              <Col
                md={12}
                // xs={12}
                // lg={4}
                className="flex items-center justify-center"
              >
                <CapCard
                  preview={{
                    state: "ArtDesign",
                    icon: "MdWeb",
                    iconType: "md",
                    type: "service",
                    id: "1",
                    pos: "4",
                    message: "",
                    // icon2: "RiArtboardFill",
                    icon2: "",
                    bgImage: "seventh",
                    artist: "Rumman Amin",
                    language: language,
                  }}
                />
              </Col>
              <Col
                md={12}
                // xs={12}
                // lg={4}
                className="flex items-center justify-center"
              >
                <CapCard
                  preview={{
                    state: "HostDomain",
                    icon: "MdDomainVerification",
                    iconType: "md",
                    type: "service",
                    id: "2",
                    pos: "3",
                    message: "",
                    icon2: "",
                    bgImage: "sixth",
                    artist: "kobu.agency",
                    language: language,
                  }}
                />
              </Col>
              <Col
                md={12}
                // xs={12}
                // lg={4}
                className="flex items-center justify-center"
              >
                <CapCard
                  preview={{
                    state: "Robot",
                    icon: "RiRobotFill",
                    iconType: "ri",
                    type: "service",
                    id: "3",
                    pos: "2",
                    message: "",
                    icon2: "",
                    bgImage: "third",
                    artist: "instagram.com/jem.sahagun",
                    language: language,
                  }}
                />
              </Col>
              <h6 className="font-normal flex flex-col md:flex-row items-center justify-center mt-6 uppercase tracking-widest">
                <div className="my-2 md:m-0">
                  {IconsByName(
                    "bs",
                    "BsCalendar2CheckFill",
                    "30px",
                    "white",
                    "0 1rem 0 1rem"
                  )}{" "}
                </div>
                {translations.mainServicesUnderMessage[language]}
              </h6>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}
