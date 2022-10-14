import { useState } from 'react';

import Image from 'next/image';

import Start from '../components/start';
import Greetings from '../components/greetings';
import Services from '../components/services';
import Projects from '../components/projects';
import Team from '../components/team';
import Contacts from '../components/contacts';
import About from '../components/about';
import Drafts from '../components/drafts';
import Concepts from '../components/concepts';
import NavbarMenu from '../components/navbarMenu';
import NavbarTrans from '../components/navbarTranslations';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import { BsMouse, BsChevronCompactDown, BsChevronCompactUp, BsFillPlusCircleFill, BsMedium, BsTwitter, BsYoutube, BsSlashCircleFill } from "react-icons/bs";
import { RiCloudFill, RiRobotFill, RiMotorbikeFill, RiCloseCircleLine } from "react-icons/ri";
import * as IconsRi from "react-icons/ri";
import { BiPlusMedical } from "react-icons/bi";
import { MdEmail, MdDomainVerification, MdWeb, MdSportsMotorsports } from "react-icons/md";
import { IoLogoLinkedin, IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { IoGrid, IoListCircleSharp, IoLogoPwa, IoSchool } from "react-icons/io5";
import { SiKubernetes, SiReact } from "react-icons/si";
import { FaPaperPlane, FaBusAlt, FaMotorcycle, FaWindowClose } from "react-icons/fa";
import { GiPaintBrush, GiFullMotorcycleHelmet } from "react-icons/gi";

import 'bootstrap/dist/css/bootstrap.min.css';

import translations from '../translations.json';

function CzIntro() {

    const [language, setLanguage] = useState<'en' | 'es' | 'pt'>('en');
    const [showE, setShowE] = useState(false);

    const handleLanguage = (lang: ('en' | 'es' | 'pt')) => setLanguage(lang);

    const handleShowE = () => setShowE(true);
    const handleCloseE = () => setShowE(false);

    return <>

        <NavbarMenu language={language} />
        {/* <h1>Anderson{ language }</h1> */}
        <NavbarTrans handleLanguage={handleLanguage} />
        <Start language={language} />
        <Greetings language={language} />
        <Services language={language} />
        <Projects language={language} />
        <Team language={language} />
        <Contacts language={language} />
        <About language={language} />
        <Drafts language={language} />
        <Concepts language={language} />
        {/*
        <Button variant="primary" onClick={this.handleShow}>
            Launch demo modal
        </Button>
        */}

        <Modal show={showE} onHide={handleCloseE}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, youre reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseE}>
                Close
            </Button>
            <Button variant="primary" onClick={handleCloseE}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>

        <Modal
            show={ showE } onHide={ handleCloseE }
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h2 style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }}><MdEmail /> {/* translations[this.props.language].servicet[0] */}</h2>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <h4>{/* translations[this.props.language].servicemodalt[0] */}</h4>
                        <h6>{/* translations[this.props.language].servicemodalmsg[0] */}</h6>
                        {/* <h6>Obsoleto, atiquado ou utrapassado talvez voce pense isso sobre emails, mas nao eh a verdade, para cada cadastro em algum site ou aplicativo é necessario se usar um email, é um meio informal que preserva a privacidade do usuario. Emails profissionais sao amplamente utilizados em empresas. Para contactar clientes, mostrar atualizações dos seus produtos, ou em caso de cobranças permanentes. Nosso sistema tem diferentes pacotes de envio para o seu negocio.
Um sistema de email pronto para ser usado em aplicativos ou paginas, todos os problemas de escalonamento, banco de dados e gerenciamento podemos deixar a sua disposição. Com documentação simples pode ter o sistema rodando em questao de minutos, poucos minutos de verdade, sem dor de cabeça, altamente costumizavel.</h6> */}
                    </Col>
                    <Col>
                        <h4>{/* translations[this.props.language].testemailt */}</h4>
                        <Form onSubmit={undefined /* this.handleSubmit2 */} className="flex flex-col text-center" /* style={{ display: "flex", flexDirection: "column", textAlign: "center" }} */>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder={'' /* translations[this.props.language].contactilemail */} value={undefined /* this.emailFrom */} onChange={(v) => {} /* this.setState({ emailTo: v.target.value }) */} />
                                <Form.Text className="text-muted">
                                    <h6 className="text-gray" /* style={{ color: "gray" }} */>{/* translations[this.props.language].contactiledisclaimer */}</h6>
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={3} placeholder={'' /* translations[this.props.language].testemaililmessage */} value={undefined /* this.emailBody */} onChange={(v) => {} /* this.setState({ emailBodyTo: v.target.value }) */} />
                            </Form.Group>
                            <Button variant="primary" type="submit" >
                                <FaPaperPlane /> &nbsp; {'' /* translations[this.props.language].btnsendemail */}
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={undefined /* this.handleCloseE */}>{/* this.getIcons('ri', 'btniclose') */} {/* translations[this.props.language].btnclose */}</Button>{/* <RiCloseCircleLine /> */}
            </Modal.Footer>
        </Modal>

        <Modal
            show={false /* this.state.showC */} onHide={undefined /* this.handleCloseC */}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h2 style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }}><RiCloudFill /> {/* translations[this.props.language].servicet[1] */}</h2>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <h4>{/* translations[this.props.language].servicemodalt[1] */}</h4>
                        <h6>{/* translations[this.props.language].servicemodalmsg[1] */}</h6>
                    </Col>
                    <Col>
                        <h4>{/* translations[this.props.language].cloudservicedescription */}</h4>
                        <input type="file" id="input-file-now-custom-2" className="file-upload" data-height="500"
                            /* onChange={(e) => {

                                const files = e.target.files;
                                const formData = new FormData();
                                formData.append("file", files[0]);

                                for (var key of formData.entries()) {
                                    console.log(key[0] + ', ' + key[1]);
                                }

                                if (!files) return;
                                if (files.length <= 0) return;

                                this.setState({ file: files[0] });
                            }} */ />
                        <Button onClick={undefined /* this.handleClick */}>{/* translations[this.props.language].btnsendfile */}</Button>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={undefined /* this.handleCloseC */}>{/* this.getIcons('ri', 'btniclose') */} {/* translations[this.props.language].btnclose */}</Button>
            </Modal.Footer>
        </Modal>

        <Modal
            show={false /* this.state.showR */} onHide={undefined /* this.handleCloseR */}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h2 style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }}><RiRobotFill /> {/* translations[this.props.language].servicet[2] */}</h2>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <h4>{/* translations[this.props.language].servicemodalt[2] */}</h4>
                        <h6>{/* translations[this.props.language].servicemodalmsg[2] */}</h6>
                    </Col>
                    <Col>
                        <h4>{/* translations[this.props.language].newsrobot */}</h4>
                        <div className="h-2/4 overflow-y-auto" /* style={{ height: "50vh", overflowY: "auto" }} */>
                            <Table striped bordered hover responsive="sm" variant="dark">
                                <thead>
                                    <tr>
                                        <th>Number <br /> Agency <br /> Data and Hour </th>
                                        <th>News</th>
                                        {/*<th>Agency</th>
                    <th>Date & Hour</th>*/}
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {this.state.message ? this.state.message.map((ms, i) => { */}
                                        return (
                                            <>
                                                <tr>
                                                    <td><span className="text-lightgreen text-2xl" /* style={{ color: "lightgreen", fontSize: "1.5rem" }} */>{/* i */ + 1}</span><br />
                                                        {/* ms.by */}<br />
                                                        {/* ms.publishedAt.split('T')[0] + '\n' + ms.publishedAt.split('T')[1].split('.')[0] */}</td>
                                                    <td>{/* ms.headline */}</td>
                                                </tr>
                                                {/*<tr>
                          <td>{ i+1 }</td>
                          <td>{ ms.by }</td>
                          <td>{ ms.publishedAt.split('T')[0]  + '\n' + ms.publishedAt.split('T')[1].split('.')[0] }</td>
                        </tr>
                        <tr>
                          <td colSpan={3}>{ ms.headline }</td>
                        </tr>*/}
                                            </>
                                        )
                                    {/* }) : null} */} 
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={undefined /* this.handleCloseR */}>{/* this.getIcons('ri', 'btniclose') */} {/* translations[this.props.language].btnclose */}</Button>
            </Modal.Footer>
        </Modal>

        <Modal
            show={false /* this.state.showAD */} onHide={undefined /* this.handleCloseAD */}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h2 style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }}><MdWeb /> {/* translations[this.props.language].servicet[3] */}</h2>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{/* translations[this.props.language].comingsoon */}</h4>
                <p>
                    {/* translations[this.props.language].comingsoonmsg */}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={undefined /* this.handleCloseAD */}>{/* this.getIcons('ri', 'btniclose') */} {/* translations[this.props.language].btnclose */}</Button>
            </Modal.Footer>
        </Modal>

        <Modal
            show={false /* this.state.showHD */} onHide={undefined /* this.handleCloseHD */}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h2 style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }}><MdDomainVerification /> {/* translations[this.props.language].servicet[4] */}</h2>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{/* translations[this.props.language].comingsoon */}</h4>
                <p>
                    {/* translations[this.props.language].comingsoonmsg */}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={undefined /* this.handleCloseHD */}>{/* this.getIcons('ri', 'btniclose') */} {/* translations[this.props.language].btnclose */}</Button>
            </Modal.Footer>
        </Modal>

        {/* <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
            </Modal> */}

        <Modal
            show={false /* this.state.showG */} onHide={undefined /* this.handleCloseG */}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h2 style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }}><IoGrid /><br />{/* translations[this.props.language].projectt[0] */}</h2>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{/* translations[this.props.language].comingsoon */}</h4>
                <p>
                    {/* translations[this.props.language].comingsoonmsg */}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={undefined /* this.handleCloseG */}>{/* this.getIcons('ri', 'btniclose') */} {/* translations[this.props.language].btnclose */}</Button>
            </Modal.Footer>
        </Modal>

        <Modal
            show={false /* this.state.showS */} onHide={undefined /* this.handleCloseS */}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h2 style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }}><IoListCircleSharp /><br />{/* translations[this.props.language].projectt[1] */}</h2>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{/* translations[this.props.language].comingsoon */}</h4>
                <p>
                    {/* translations[this.props.language].comingsoonmsg */}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={undefined /* this.handleCloseS */}>{/* this.getIcons('ri', 'btniclose') */} {/* translations[this.props.language].btnclose */}</Button>
            </Modal.Footer>
        </Modal>

        {/* <div className="App-header" id="projects">
                    <Container>
                    <Row style={{ justifyContent: "center" }}>
                      <h3 style={{ fontFamily: "'Ubuntu Condensed', sans-serif", textTransform: "uppercase", letterSpacing: ".3rem", margin: "1.5rem 0" }}>{ translations[this.props.language].projectmt }</h3>
                    <Col xs={12} md={6} style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "1rem 0 1rem 0" }}>
                      
                      <div class="card" onClick={this.handleShowG}>
                        <div class="image eighth">
                          <div class="screen"></div>
                          <div class="text" style={{ fontFamily: "'Source Sans Pro', sans-serif", textAlign: "end", padding: "1rem" }}>
                            <h1 style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }}><IoSchool /><br />Ad Gallery App</h1>
                            <h3>stage pre-Alpha</h3>
                            <h5>
                              For local commerce is a pratical way to create a "Virtual Shopping Mall", seek for ad-clients and show the gallery for viewer-clients.
                              <br />
                              <a href="https://poliedros.github.io/catalog-app/">
                                project example
                              </a>
                            </h5>
                          </div>
                        </div>
                      </div>
                      </Col>
                      </Row>
                      </Container>
                    </div> */}

        {/* <CookieConsent buttonText="Ok">{translations[this.props.language].cookie}</CookieConsent> */}
    </>;
}

export default CzIntro