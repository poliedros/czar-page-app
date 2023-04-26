import { Button, Col, Form, Modal, Row, Table } from "react-bootstrap";
import getIconsByName from "../functions/getIconsByName";
import translations from "../functions/translations";

import { useLanguage, useLanguageUpdate } from "../context/languageContext";

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
    | "BusinessSales";
  title: any;
}) {
  const language = useLanguage();
  const toggleLanguage = useLanguageUpdate();

  var states = {
    ArtDesign: (
      <Row>
        <Col>
          <h6 className="font-thin">
            {translations("modalArtDesignContent", language)}
          </h6>
        </Col>
        <Col>
          {translations("examples", language)}: <br />
          <a href="https://mrandersonmr.github.io/infop/">
            Informativo Opção
          </a>{" "}
          <br />
          <a href="https://cisab.czar.dev/">CISAB</a>
          <br />
          <a href="https://mrandersonmr.github.io/portfolio/">Maracuya</a>
        </Col>
      </Row>
    ),
    HostDomain: (
      <Row>
        <Col>
          <h6 className="font-thin">
            {translations("modalHostDomainContent", language)}
          </h6>
        </Col>
        <Col></Col>
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
        <Col>
          <h4 className="font-normal">
            {translations("cloudservicedescription", language)}
          </h4>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Control type="file" />
          </Form.Group>
          <Button
            className="!flex items-center"
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
                onChange={
                  (v) => {} /* this.setState({ emailBodyTo: v.target.value }) */
                }
              />
            </Form.Group>
            <Button
              className="!flex items-center justify-center !font-thin"
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
  };

  var statesIcon = {
    ArtDesign: { iconType: "md", icon: "MdWeb" },
    HostDomain: { iconType: "md", icon: "MdDomainVerification" },
    Cloud: { iconType: "ri", icon: "RiCloudFill" },
    Email: { iconType: "md", icon: "MdEmail" },
    Robot: { iconType: "ri", icon: "RiRobotFill" },
    AdGallery: { iconType: "io5", icon: "IoGrid" },
    BusinessSales: { iconType: "io5", icon: "IoListCircleSharp" },
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="border-0" closeButton>
          <Modal.Title>
            <h2
              //className="font-['Ubuntu Condensed']"

              style={{
                fontFamily: "'Ubuntu Condensed', sans-serif",
              }}
            >
              <div className="flex items-center">
                {getIconsByName(
                  statesIcon[state].iconType,
                  statesIcon[state].icon,
                  "black"
                )}
                <span className="m-1" />
                {title}
              </div>
            </h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{states[state]}</Modal.Body>
        <Modal.Footer className="border-0"></Modal.Footer>
      </Modal>
    </>
  );
}
