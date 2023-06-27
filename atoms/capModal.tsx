import {
  Button,
  Carousel,
  Col,
  Form,
  Modal,
  OverlayTrigger,
  Row,
  Table,
  Tooltip,
} from "react-bootstrap";
import getIconsByName from "../functions/getIconsByName";
import translations from "../functions/translations";

import { useLanguage, useLanguageUpdate } from "../context/languageContext";
import IconsByName from "../components/iconsByName";

export default function CapModal({
  show,
  handleClose,
  state,
  title,
}: {
  show: any;
  handleClose: any;
  state:
    | "ArtDesign"
    | "HostDomain"
    | "Cloud"
    | "Email"
    | "Robot"
    | "AdGallery"
    | "BusinessSales"
    | "Cisab"
    | "Ramos"
    | "Infop";
  title: any;
}) {
  const language = useLanguage();
  const toggleLanguage = useLanguageUpdate();

  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );

  var states = {
    ArtDesign: (
      <div>
        <Row>
          <Col className="my-12 mx-3">
            {/* <h6></h6>
            <div className="flex flex-col">
              <h5 className="flex items-center">
                {IconsByName("ri", "RiArtboardFill", "24px", "black")} Arte e
                Design
              </h5>
              <h5 className="flex items-center">
                {IconsByName("ri", "RiArtboardFill", "24px", "black")}{" "}
                Elaboração de Identidade Visual
              </h5>
              <h5 className="flex items-center">
                {IconsByName("ri", "RiArtboardFill", "24px", "black")} Últimas
                frameworks lançadas no mercado
              </h5>
              <h5 className="flex items-center">
                {IconsByName("ri", "RiArtboardFill", "24px", "black")} Rubustes
                ao Mostrar dados
              </h5>
              <h5 className="flex items-center">
                {IconsByName("ri", "RiArtboardFill", "24px", "black")} Código de
                Qualidade
              </h5>
              <h5 className="flex items-center">
                {IconsByName("ri", "RiArtboardFill", "24px", "black")}{" "}
                Divulgação e Publicidade Online
              </h5>
            </div>
            <div>
              / / Visualização Gráfica / Criação de Logo / Publicidade
              {IconsByName("si", "SiBootstrap", "24px", "black")}{" "}
              {IconsByName("si", "SiTailwindcss", "24px", "black")}{" "}
            </div>
            <div className="flex justify-evenly"></div>
            <div className="flex justify-evenly">
              {IconsByName("si", "SiMongodb", "24px", "black")}{" "}
              {IconsByName("bs", "BsDiagram3Fill", "24px", "black")}{" "}
              {IconsByName("bs", "BsBarChartLineFill", "24px", "black")}{" "}
            </div>
            <div>Veja nossos projetos em andamento atualmente</div> */}
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={
                <Tooltip id="button-tooltip">
                  <mark className="flex bg-[#29fc1640] items-center rounded-full">
                    {IconsByName(
                      "si",
                      "SiJavascript",
                      "24px",
                      "black",
                      "0 10 0 10"
                    )}{" "}
                    {IconsByName(
                      "si",
                      "SiTypescript",
                      "24px",
                      "black",
                      "0 10 0 10"
                    )}{" "}
                    {IconsByName(
                      "si",
                      "SiPython",
                      "24px",
                      "black",
                      "0 10 0 10"
                    )}{" "}
                    {IconsByName("si", "SiCss3", "24px", "black", "0 10 0 10")}{" "}
                  </mark>
                </Tooltip>
              }
            >
              <h5 className="font-normal">
                {translations("firstServiceMessages", language)[0]}
              </h5>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={
                <Tooltip id="button-tooltip">
                  <mark className="flex bg-[#29fc1640] items-center rounded-full">
                    {IconsByName(
                      "si",
                      "SiNextdotjs",
                      "24px",
                      "black",
                      "0 10 0 10"
                    )}{" "}
                    {IconsByName("si", "SiReact", "24px", "black", "0 10 0 10")}{" "}
                    {/* {IconsByName(
                      "si",
                      "SiAngular",
                      "24px",
                      "black",
                      "0 10 0 10"
                    )}{" "}
                    {IconsByName(
                      "si",
                      "SiVuedotjs",
                      "24px",
                      "black",
                      "0 10 0 10"
                    )}{" "} */}
                    {IconsByName(
                      "si",
                      "SiBootstrap",
                      "24px",
                      "black",
                      "0 10 0 10"
                    )}{" "}
                    {IconsByName(
                      "si",
                      "SiTailwindcss",
                      "24px",
                      "black",
                      "0 10 0 10"
                    )}{" "}
                  </mark>
                </Tooltip>
              }
            >
              <h5 className="font-normal">
                {translations("firstServiceMessages", language)[1]}
              </h5>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={
                <Tooltip id="button-tooltip">
                  <mark className="flex bg-[#29fc1640] rounded-full">
                    {translations("firstServiceTooltip", language)[2]}
                  </mark>
                </Tooltip>
              }
            >
              <h5 className="font-normal">
                {translations("firstServiceMessages", language)[2]}
              </h5>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={
                <Tooltip id="button-tooltip">
                  <mark className="flex items-center bg-[#29fc1640] rounded-full">
                    {translations("firstServiceTooltip", language)[3]}
                    {IconsByName(
                      "si",
                      "SiD3Dotjs",
                      "24px",
                      "black",
                      "0 10 0 10"
                    )}{" "}
                    {IconsByName(
                      "si",
                      "SiThreedotjs",
                      "24px",
                      "black",
                      "0 10 0 10"
                    )}{" "}
                  </mark>
                </Tooltip>
              }
            >
              <h5 className="font-normal">
                {translations("firstServiceMessages", language)[3]}
              </h5>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={
                <Tooltip id="button-tooltip">
                  <mark className="flex items-center bg-[#29fc1640] pr-[10px] rounded-full">
                    {IconsByName(
                      "ri",
                      "RiGoogleFill",
                      "24px",
                      "black",
                      "0 10 0 10"
                    )}{" "}
                    {translations("firstServiceTooltip", language)[4]}
                  </mark>
                </Tooltip>
              }
            >
              <h5 className="font-normal">
                {translations("firstServiceMessages", language)[4]}
              </h5>
            </OverlayTrigger>
          </Col>
          <Col className="flex items-end">
            <h5 className="font-thin">
              {translations("modalArtDesignContent", language)}
            </h5>
            {/* {translations("examples", language)}: <br />
            <a href="https://mrandersonmr.github.io/infop/">
              Informativo Opção
            </a>{" "}
            <br />
            <a href="https://cisab.czar.dev/">CISAB</a>
            <br />
            <a href="https://mrandersonmr.github.io/portfolio/">Maracuya</a> */}
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <Carousel
              indicators={false}
              controls={undefined}
              prevIcon={<></>}
              nextIcon={<></>}
            >
              <Carousel.Item>
                <div className="!flex !justify-center">
                  <a href="https://cisab.czar.dev/">
                    <img className="!w-[30vw]" src={"/design1.png"} />
                  </a>
                </div>
                <Carousel.Caption>
                  {/* <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p> /}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="!flex !justify-center">
                  <a href="https://infop.czar.dev/">
                    <img className="!w-[30vw]" src={"/design2.png"} />
                  </a>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="!flex !justify-center">
                  <a href="https://ramos.czar.dev/">
                    <img className="!w-[30vw]" src={"/design3.png"} />
                  </a>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row> */}
      </div>
    ),
    HostDomain: (
      <Row>
        <Col className="my-12 mx-3">
          {/* {IconsByName("gi", "GiBrazil", "48px", "black")} */}
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={
              <Tooltip id="button-tooltip">
                <mark className="flex bg-[#29fc1640] rounded-full">
                  {translations("secondServiceTooltip", language)[0]}
                </mark>
              </Tooltip>
            }
          >
            <h5 className="font-normal">
              {translations("secondServiceMessages", language)[0]}
            </h5>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={
              <Tooltip id="button-tooltip">
                <mark className="flex bg-[#29fc1640] rounded-full">
                  {translations("secondServiceTooltip", language)[1]}
                </mark>
              </Tooltip>
            }
          >
            <h5 className="font-normal">
              {translations("secondServiceMessages", language)[1]}
            </h5>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={
              <Tooltip id="button-tooltip">
                <mark className="flex bg-[#29fc1640] items-center rounded-full">
                  {IconsByName("si", "SiMongodb", "24px", "black", "0 10 0 10")}{" "}
                  {translations("secondServiceTooltip", language)[2]}
                </mark>
              </Tooltip>
            }
          >
            <h5 className="font-normal">
              {translations("secondServiceMessages", language)[2]}
            </h5>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={
              <Tooltip id="button-tooltip">
                <mark className="flex bg-[#29fc1640] rounded-full">
                  {translations("secondServiceTooltip", language)[3]}
                </mark>
              </Tooltip>
            }
          >
            <h5 className="font-normal">
              {translations("secondServiceMessages", language)[3]}
            </h5>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={
              <Tooltip id="button-tooltip">
                <mark className="flex bg-[#29fc1640] rounded-full">
                  {translations("secondServiceTooltip", language)[4]}
                </mark>
              </Tooltip>
            }
          >
            <h5 className="font-normal">
              {translations("secondServiceMessages", language)[4]}
            </h5>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={
              <Tooltip id="button-tooltip">
                <mark className="flex bg-[#29fc1640] rounded-full">
                  {translations("secondServiceTooltip", language)[5]}
                </mark>
              </Tooltip>
            }
          >
            <h5 className="font-normal">
              {translations("secondServiceMessages", language)[5]}
            </h5>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={
              <Tooltip id="button-tooltip">
                <mark className="flex bg-[#29fc1640] rounded-full">
                  {translations("secondServiceTooltip", language)[6]}
                </mark>
              </Tooltip>
            }
          >
            <h5 className="font-normal">
              {translations("secondServiceMessages", language)[6]}
            </h5>
          </OverlayTrigger>
          {/* <h5>
            ou fornecedor extrangeiro - dos Estados Unidos , brasileira, Data
            Center / Alta qualidade na performance do produto / Segurança e
            Prevenção de hackemento Certificado e back-up / Monitoramento 24
            horas e 7 dias por semana - opcional Google Analytics / Suporte
            Técnico - caso algo falhe
          </h5> */}
        </Col>
        <Col className="flex items-end">
          <h5 className="font-thin">
            {translations("modalHostDomainContent", language)}
          </h5>
        </Col>
      </Row>
    ),
    Cloud: (
      <Row>
        <Col>
          <h4 className="font-normal">
            {translations("servicemodalt", language)[1]}
          </h4>
          <h6 className="font-thin">
            {translations("servicemodalmsg", language)[1]}
          </h6>
        </Col>
        <Col className="flex flex-col">
          <h4 className="font-normal">
            {translations("cloudservicedescription", language)}
          </h4>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Control type="file" className="rounded-0" />
          </Form.Group>
          <Button
            className="!flex items-center justify-center rounded-0"
            variant="secondary"
            onClick={undefined}
          >
            {getIconsByName("bs", "BsFillCloudArrowUpFill")}
            <span className="mr-1" />
            {translations("btnsendcloud", language)}
          </Button>
        </Col>
      </Row>
    ),
    Email: (
      <Row>
        <Col>
          <h4 className="font-normal">
            {translations("servicemodalt", language)[0]}
          </h4>
          <h6 className="font-thin">
            {translations("servicemodalmsg", language)[0]}
          </h6>
        </Col>
        <Col>
          <h4 className="font-normal">
            {translations("testemailt", language)}
          </h4>
          <Form
            onSubmit={undefined /* this.handleSubmit2 */}
            className="flex flex-col text-center"
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder={translations("contactilemail", language)}
                value={undefined /* this.emailFrom */}
                className="rounded-0"
                onChange={
                  (v) => {} /* this.setState({ emailTo: v.target.value }) */
                }
              />
              <Form.Text className="text-muted">
                <h6 className="text-gray font-normal" style={{ color: "gray" }}>
                  {translations("contactiledisclaimer", language)}
                </h6>
              </Form.Text>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                placeholder={translations("testemaililmessage", language)}
                value={undefined /* this.emailBody */}
                className="rounded-0"
                onChange={
                  (v) => {} /* this.setState({ emailBodyTo: v.target.value }) */
                }
              />
            </Form.Group>
            <Button
              className="!flex items-center justify-center !font-thin rounded-0"
              variant="secondary"
              type="submit"
            >
              {getIconsByName("fa", "FaPaperPlane")} &nbsp;{" "}
              {translations("btnsendemail", language)}
            </Button>
          </Form>
        </Col>
      </Row>
    ),
    Robot: (
      <Row>
        <Col>
          <h4 className="font-normal">
            {translations("servicemodalt", language)[2]}
          </h4>
          <h6 className="font-thin">
            {translations("servicemodalmsg", language)[2]}
          </h6>
        </Col>
        <Col>
          <h4 className="font-normal">{translations("newsrobot", language)}</h4>
          <div
            className="h-2/4 overflow-y-auto"
            style={{ height: "50vh", overflowY: "auto" }}
          >
            <Table striped bordered hover responsive="sm" variant="dark">
              <thead>
                <tr>
                  <th>
                    {translations("number", language)}
                    <br />
                    {translations("agency", language)} <br />
                    {translations("datehour", language)}{" "}
                  </th>
                  <th>{translations("news", language)}</th>
                </tr>
              </thead>
              <tbody></tbody>
            </Table>
          </div>
        </Col>
      </Row>
    ),
    AdGallery: (
      <Row>
        <Col>
          <h4>{translations("comingsoon", language)}</h4>
          <h6></h6>
        </Col>
        <Col></Col>
      </Row>
    ),
    BusinessSales: (
      <Row>
        <Col>
          {/* <h4>{translations("comingsoon", language)}</h4> */}
          <h6>
            <a href="https://shopdelivery.czar.dev/">PedidosSJN (on going)</a>
          </h6>
        </Col>
        <Col></Col>
      </Row>
    ),
    Cisab: (
      <Row>
        <Col className="bg-white p-3 opacity-80" sm={6}>
          {/* <h4>{translations("comingsoon", language)}</h4> */}
          <h5 className="font-thin mb-6">
            {translations("cisabMessage", language)}
          </h5>
          <h5 className="font-thin">
            {translations("seeLink", language)}:{" "}
            <a href="https://cisab.czar.dev/" className="text-xl">
              CISAB
            </a>
          </h5>
          <h5 className="font-thin mt-3">
            <b className="mt-6">{translations("brazil", language)}</b>
          </h5>
        </Col>
        <Col sm={6}></Col>
      </Row>
    ),
    Ramos: (
      <Row>
        <Col className="bg-white p-3 opacity-80" sm={6}>
          {/* <h4>{translations("comingsoon", language)}</h4> */}
          <h5 className="font-thin mb-6">
            {translations("ramosMessage", language)}
          </h5>
          <h5 className="font-thin">
            {translations("seeLink", language)}:{" "}
            <a href="https://ramos.czar.dev/" className="text-xl">
              Cardápio Ramos
            </a>
          </h5>
          <h5 className="font-thin mt-3">
            <b className="mt-6">{translations("brazil", language)}</b>
          </h5>
        </Col>
        <Col></Col>
      </Row>
    ),
    Infop: (
      <Row>
        <Col className="bg-white p-3 opacity-80" sm={6}>
          {/* <h4>{translations("comingsoon", language)}</h4> */}
          <h5 className="font-thin mb-6">
            {translations("opcaoMessage", language)}
          </h5>
          <h5 className="font-thin">
            {translations("seeLink", language)}:{" "}
            <a href="https://inop.czar.dev/" className="text-xl">
              Informativo OPÇÃO
            </a>
          </h5>
          <h5 className="font-thin mt-3">
            <b className="mt-6">{translations("brazil", language)}</b>
          </h5>
        </Col>
        <Col></Col>
      </Row>
    ),
  };

  var statesIcon = {
    ArtDesign: { iconType: "md", icon: "MdWeb" },
    HostDomain: { iconType: "md", icon: "MdDomainVerification" },
    Cloud: { iconType: "ri", icon: "RiCloudFill" },
    Email: { iconType: "md", icon: "MdEmail" },
    Robot: { iconType: "ri", icon: "RiRobotFill" },
    AdGallery: { iconType: "io5", icon: "IoGrid" },
    BusinessSales: { iconType: "io5", icon: "IoListCircleSharp" },
    Cisab: {},
    Ramos: {},
    Infop: {},
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        className={state}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <div
          style={{
            backgroundImage:
              "url(https://www.nanaimobulletin.com/wp-content/uploads/2022/04/28649660_web1_220331-WLT-PUSH-JesajaClass_1.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "100% 0%",
            backgroundSize: "50% 100%",
          }}
        > */}
        <Modal.Header className="border-0" closeButton>
          <Modal.Title>
            <h2
              //className="font-['Ubuntu Condensed']"

              style={{
                fontFamily: "'Ubuntu Condensed', sans-serif",
              }}
            >
              <div className="flex items-center">
                {state !== "Cisab" && state !== "Ramos" && state !== "Infop" ? (
                  getIconsByName(
                    statesIcon[state].iconType,
                    statesIcon[state].icon,
                    "black"
                  )
                ) : (
                  <img
                    src={
                      state === "Infop"
                        ? "/opLogo.svg"
                        : state === "Ramos"
                        ? "/ramosLogo.svg"
                        : "/cisabLogo.svg"
                    }
                    alt=""
                    width="32"
                    height="32"
                    className="invert"
                  />
                )}
                <span className="m-1" />
                {title}
              </div>
            </h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{states[state]}</Modal.Body>
        <Modal.Footer className="border-0"></Modal.Footer>
        {/* </div> */}
      </Modal>
    </>
  );
}
