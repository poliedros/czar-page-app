import { useState } from 'react';

import Image from 'next/image';

import Start from '../components/start';
import Greetings from '../components/greetings';
import Services from '../components/services';
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

        <NavbarMenu language={language}/>
        {/* <h1>Anderson{ language }</h1> */}
        <NavbarTrans handleLanguage={handleLanguage}/>
        <Start />
        <Greetings />
        <Services language={language}/>
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

        <div className="App-header" id="projects">
            <Container>
                <Row className="justify-center" /* style={{ justifyContent: "center" }} */>
                    <h3 className="uppercase mx-6" style={{ fontFamily: "'Ubuntu Condensed', sans-serif", /* textTransform: "uppercase", letterSpacing: ".3rem", margin: "1.5rem 0" */ }}>{/* translations[this.props.language].projectmt */}</h3>

                    {/*<Col xs={12} md={6} style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "1rem 0 1rem 0" }}>
                      
                      <div class="card" onClick={this.handleShowG}>
                        <div class="image ninth">
                          <div class="screen"></div>
                          <div class="text" style={{ fontFamily: "'Source Sans Pro', sans-serif", textAlign: "end", padding: "1rem" }}>
                            <h1 style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }}><FaMotorcycle /><br />Motorcycle Workshop Email Sender</h1>
                            <h3>stage pre-Alpha</h3>
                            <h5>
                            Specific form for sending emails to motorcycle workshop.
                              <br />
                              {/* <a href="https://poliedros.github.io/catalog-app/">
                                project example
                              </a> /}
                            </h5>
                          </div>
                        </div>
                      </div>
                      </Col> */}

                    <Col xs={12} md={6} className="flex items-center justify-center my-4" /* style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "1rem 0 1rem 0" }} */>

                        <div className="card" onClick={undefined /* this.handleShowG */}>
                            <div className="image fifth">
                                <div className="screen"></div>
                                <div className="text text-end p-4" style={{ fontFamily: "'Source Sans Pro', sans-serif", /* textAlign: "end", padding: "1rem" */ }}>
                                    <h1 style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }}><IoGrid /><br />{/* translations[this.props.language].projectt[0] */}</h1>
                                    <h3>{/* translations[this.props.language].projectst[0] */}</h3>
                                    <h5>
                                        {/* translations[this.props.language].projecttmsg[0] */}
                                        <br />
                                        {/* <a href="https://poliedros.github.io/catalog-app/">
                                project example
                              </a> */}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="flex items-center justify-center my-4" /* style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "1rem 0 1rem 0" }} */>
                        <div className="card" onClick={undefined /* this.handleShowS */}>
                            <div className="image fourth">
                                <div className="screen"></div>
                                <div className="text text-end p-4" style={{ fontFamily: "'Source Sans Pro', sans-serif", /* textAlign: "end", padding: "1rem" */ }}>
                                    <h2 style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }}><IoListCircleSharp /><br />{/* translations[this.props.language].projectt[1] */}</h2>
                                    <h3>{/* translations[this.props.language].projectst[1] */}</h3>
                                    <h5>
                                        {/* translations[this.props.language].projecttmsg[1] */}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

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

        <div className="App-header" id="team">
            <Container>
                <h3 className="uppercase tracking-widest mx-6" style={{ fontFamily: "'Ubuntu Condensed', sans-serif", /* textTransform: "uppercase", letterSpacing: ".3rem", margin: "1.5rem 0" */ }}>{/* translations[this.props.language].teammt */}</h3>
                <Row style={{ fontFamily: "'Source Sans Pro', sans-serif", alignItems: "center" }}>
                    <Col md={6} style={{ /* height: "75vh", */ backgroundColor: "green" }}>
                        <Row style={{ /* height: "70vh" */ }}>
                            <Col xs={12} md={6} className="bg-no-repeat bg-center bg-cover flex flex-col justify-center text-left py-1" style={{
                                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://media-exp2.licdn.com/dms/image/C4E03AQF-gbqqU9DNnQ/profile-displayphoto-shrink_800_800/0/1641765343981?e=1662595200&v=beta&t=3AOlGXUzEifAAKsylEUSlYSBRiNXzp4hK1rbf0ddIY8)',
                                //backgroundRepeat: "no-repeat",
                                //backgroundPosition: "center",
                                //backgroundSize: "cover",
                                //display: "flex",
                                //flexDirection: "column",
                                //justifyContent: "center",
                                //textAlign: "left",
                                //paddingTop: "1rem",
                                //paddingBottom: "1rem"
                            }}>
                                <h1 style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }} >Carlos H. L. Zansavio</h1>
                                <h6 className="text-gray" style={{ fontFamily: "'M PLUS Code Latin', sans-serif"/* , color: "gray" */, textShadow: "1px 1px 2px black, 2px 2px 4px #000000" }} >{/* translations[this.props.language].teamlanguage[1] */}</h6>
                                <h4><b>{/* translations[this.props.language].teamrole[1] */}</b></h4>
                                <h5>{/* translations[this.props.language].teamcv[1] */}</h5>
                                <h6>{/* translations[this.props.language].teamaddress[1] */}</h6>
                                <Image src={'' /* process.env.PUBLIC_URL + '/ie.svg' */} alt='' className="w-25 h-35" /* style={{ width: '25px', height: '35px' }} */ />
                            </Col>
                            <Col xs={12} md={6} className="bg-no-repeat bg-center bg-cover flex flex-col justify-center text-left py-1" style={{
                                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://media-exp2.licdn.com/dms/image/C4D03AQHy7GiX0EUVXA/profile-displayphoto-shrink_800_800/0/1517736705680?e=1662595200&v=beta&t=8h4c-aAfVNxaCEjqgUsx0BjB7ep6wh0Edxl7LbOr17U)',
                                //backgroundRepeat: "no-repeat",
                                //backgroundPosition: "center",
                                //backgroundSize: "cover",
                                //display: "flex",
                                //flexDirection: "column",
                                //justifyContent: "center",
                                //textAlign: "left",
                                //paddingTop: "1rem",
                                //paddingBottom: "1rem"
                            }}>
                                <h1 style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }} >Anderson M. Ribeiro</h1>
                                <h6 className="text-gray" style={{ fontFamily: "'M PLUS Code Latin', sans-serif"/* , color: "gray" */, textShadow: "1px 1px 2px black, 2px 2px 4px #000000" }} >{/* translations[this.props.language].teamlanguage[0] */}</h6>
                                <h4><b>{/* translations[this.props.language].teamrole[0] */}</b></h4>
                                <h5>{/* translations[this.props.language].teamcv[0] */}</h5>
                                <h6>{/* translations[this.props.language].teamaddress[0] */}</h6>
                                <Image src={'' /* process.env.PUBLIC_URL + '/ar.svg' */} alt='' className="w-25 h-55" /* style={{ width: '25px', height: '55px' }} */ />
                            </Col>
                        </Row>
                        <Row style={{ height: "5vh" }}>
                            <Col>
                                <IoIosArrowUp /> &nbsp; {/* translations[this.props.language].teamfounders */}
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6} className="bg-green" /* style={{ /* height: "75vh", / backgroundColor: "green" }} */>
                        <Row style={{ height: "5vh" }}>
                            <Col>
                                <IoIosArrowDown /> &nbsp; <span style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "1.15rem" }}>CZAR</span> <BiPlusMedical style={{ width: "14px" }} />
                            </Col>
                        </Row>
                        <Row style={{ /* height: "70vh" */ }}>
                            <Col xs={12} md={6} className="bg-no-repeat bg-center bg-cover flex flex-col justify-center text-left py-1" style={{
                                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://media-exp2.licdn.com/dms/image/C4D03AQGpu5oac7sx_w/profile-displayphoto-shrink_800_800/0/1626460675704?e=1663200000&v=beta&t=WKEOlCw3O-nrqAChopMKLfCs4qH2badn8lGO2f2oBd0)',
                                //backgroundRepeat: "no-repeat",
                                //backgroundPosition: "center",
                                //backgroundSize: "cover",
                                //display: "flex",
                                //flexDirection: "column",
                                //justifyContent: "center",
                                //textAlign: "left",
                                //paddingTop: "1rem",
                                //paddingBottom: "1rem"
                            }} >
                                <h1 style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }} >Daniela S. Gomes</h1>
                                <h6 className="text-gray" style={{ fontFamily: "'M PLUS Code Latin', sans-serif"/* , color: "gray" */, textShadow: "1px 1px 2px black, 2px 2px 4px #000000" }} >{/* translations[this.props.language].teamlanguage[2] */}</h6>
                                <h4><b>{/* translations[this.props.language].teamrole[2] */}</b></h4>
                                <h5>{/* translations[this.props.language].teamcv[2] */}</h5>
                                <h6>{/* translations[this.props.language].teamaddress[2] */}</h6>
                                <Image src={'' /* process.env.PUBLIC_URL + '/br.svg' */} alt='' className="w-50 h-46" /* style={{ width: '50px', height: '46px' }} */ />
                            </Col>
                            <Col xs={12} md={6} className="bg-no-repeat bg-center bg-cover flex flex-col justify-center text-left py-1" style={{
                                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://media-exp2.licdn.com/dms/image/C5603AQFmRdwu54vuIQ/profile-displayphoto-shrink_800_800/0/1650575160073?e=1663200000&v=beta&t=PQ2T80l2p7n_foaH0cwC8lpZjN4ic6ppvw54BlIw1B0)',
                                //backgroundRepeat: "no-repeat",
                                //backgroundPosition: "center",
                                //backgroundSize: "cover",
                                //display: "flex",
                                //flexDirection: "column",
                                //justifyContent: "center",
                                //textAlign: "left",
                                //paddingTop: "1rem",
                                //paddingBottom: "1rem"
                            }} >
                                <h1 style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }} >Lucas M. Abreu</h1>
                                <h6 className="text-gray" style={{ fontFamily: "'M PLUS Code Latin', sans-serif"/* , color: "gray" */, textShadow: "1px 1px 2px black, 2px 2px 4px #000000" }} >{/* translations[this.props.language].teamlanguage[3] */}</h6>
                                <h4><b>{/* translations[this.props.language].teamrole[3] */}</b></h4>
                                <h5>{/* translations[this.props.language].teamcv[3] */}</h5>
                                <h6>{/* translations[this.props.language].teamaddress[3] */}</h6>
                                <Image src={'' /* process.env.PUBLIC_URL + '/br.svg' */} alt='' className="w-50 h-46" /* style={{ width: '50px', height: '46px' }} */ />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="App-header" id="contacts" style={{ fontFamily: "'Source Sans Pro', sans-serif" }} /*style={{ backgroundColor: "#282c34", minHeight: "100vh" }}*/>
            <Container>
                <h3 style={{ fontFamily: "'Ubuntu Condensed', sans-serif", textTransform: "uppercase", letterSpacing: ".3rem", margin: "1.5rem 0" }}>{/* translations[this.props.language].contactmt */}</h3>

                <br />
                <Row>
                    <Col xs={12} md={6} className="my-12" style={{ margin: "3rem 0" }}>
                        <h3 className="text-start" /* style={{ alignItem: "", textAlign: "start" }} */>
                            <h4 style={{ fontFamily: "'M PLUS Code Latin', sans-serif" }}>
                                <a href="https://www.linkedin.com/in/anderson-mendes-ribeiro/"><IoLogoLinkedin /></a>
                            </h4>
                            <div className="verticalLineBottom">Anderson M. Ribeiro <span style={{ fontSize: "0.7rem" }}>{/* translations[this.props.language].teamlanguage[0] */}</span></div>
                        </h3>

                        <h6 style={{ textAlign: "end" }}>
                            {/* translations[this.props.language].teamaddress[0] */} - {/* translations[this.props.language].teamcountry[0] */}
                        </h6>
                        <h3 className="text-start" /* style={{ alignItem: "", textAlign: "start" }} */>
                            <h4 style={{ fontFamily: "'M PLUS Code Latin', sans-serif" }}>
                                <a href="https://www.linkedin.com/in/carlos-zansavio/"><IoLogoLinkedin /></a>
                                &nbsp;
                                <a href="https://www.linkedin.com/in/carlos-zansavio/"><BsMedium /></a>
                                &nbsp;
                                <a href="https://www.linkedin.com/in/carlos-zansavio/"><BsTwitter /></a>
                                &nbsp;
                                <a href="https://www.linkedin.com/in/carlos-zansavio/"><BsYoutube /></a>
                            </h4>
                            <div className="verticalLineBottom">Carlos H. L. Zansavio <span style={{ fontSize: "0.7rem" }}>{/* translations[this.props.language].teamlanguage[1] */}</span></div>
                        </h3>

                        <h6 className="text-end" /* style={{ textAlign: "end" }} */>
                            {/* translations[this.props.language].teamaddress[1] */} - {/* translations[this.props.language].teamcountry[1] */}
                        </h6>
                        <h3 className="text-start" /* style={{ alignItem: "", textAlign: "start" }} */>
                            <h4 style={{ fontFamily: "'M PLUS Code Latin', sans-serif" }}>
                                <a href="https://www.linkedin.com/in/daniela-souza-gomes/"><IoLogoLinkedin /></a>
                            </h4>
                            <div className="verticalLineBottom">Daniela S. Gomes <span style={{ fontSize: "0.7rem" }}>{/* translations[this.props.language].teamlanguage[2] */}</span></div>
                        </h3>

                        <h6 className="text-end" /* style={{ textAlign: "end" }} */>
                            {/* translations[this.props.language].teamaddress[2] */} - {/* translations[this.props.language].teamcountry[2] */}
                        </h6>
                        <h3 className="text-start" /* style={{ alignItem: "", textAlign: "start" }} */>
                            <h4 style={{ fontFamily: "'M PLUS Code Latin', sans-serif" }}>
                                <a href="https://www.linkedin.com/in/lucas-abreu-417680238/"><IoLogoLinkedin /></a>
                            </h4>
                            <div className="verticalLineBottom">Lucas M. Abreu <span style={{ fontSize: "0.7rem" }}>{/* translations[this.props.language].teamlanguage[3] */}</span></div>
                        </h3>

                        <h6 className="text-end" /* style={{ textAlign: "end" }} */>
                            {/* translations[this.props.language].teamaddress[3] */} - {/* translations[this.props.language].teamcountry[3] */}
                        </h6>
                    </Col>
                    <Col xs={12} md={6} className="flex flex-col justify-center my-12 px-6" /* style={{ display: "flex", flexDirection: "column", justifyContent: "center", margin: "3rem 0", padding: "0 1.5rem" }} */>

                        <h5>{/* translations[this.props.language].contactmm */}</h5>
                        <br />
                        <Form onSubmit={undefined /* this.handleSubmit */}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder={undefined /* translations[this.props.language].contactilename */} value={''/* this.emailName */} onChange={(v) => {} /* this.setState({ emailName: v.target.value }) */} />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder={undefined /* translations[this.props.language].contactilemail */} value={''/* this.emailFrom */} onChange={(v) => {} /* this.setState({ emailFrom: v.target.value }) */} />
                                <Form.Text className="text-muted">
                                    <h6 style={{ color: "gray" }}>{/* translations[this.props.language].contactiledisclaimer */}</h6>
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={3} placeholder={undefined /* translations[this.props.language].contactilemessage */} value={''/* this.emailBody */} onChange={(v) => {} /* this.setState({ emailBody: v.target.value }) */} />
                            </Form.Group>
                            <Button variant="primary" type="submit" >
                                <FaPaperPlane /> &nbsp; {/* translations[this.props.language].btnsendemail */}
                            </Button>
                        </Form>

                    </Col>
                </Row>
            </Container>
        </div>

        <div className="App-header" id="about" /*style={{ backgroundColor: "#282c34", minHeight: "100vh" }}*/>
            <Container>
                <h2 style={{ fontFamily: "'Ubuntu Condensed', sans-serif", textAlign: "end" }}>{/* translations[this.props.language].aboutmt */}</h2>
                <br />
                <h5 className="verticalLineRight" style={{ fontFamily: "'Source Sans Pro', sans-serif", textAlign: "end", padding: "0 10px 0 10px" }}>
                    CZAR Devs is currently in an embryonic enterprise stage - the kick-off came from the founders after establishing a small range of ideas to solve common problems for small businesses. We currently work remotely from 3 different countries and so we added more members migrating to CZAR+ Devs.

                    Our focus are in to manage the flow of information in the business such as email system management, file management like cloud service and automatization of process to catch and delivery information.
                    In our projects that we develop based on the claims of companies/owners, the idea is to guide managers to have a better experience to organize information and the work cycle.
                    <br /> </h5>

                <h6 style={{ position: "fixed", bottom: ".7rem", fontFamily: "'M PLUS Code Latin', sans-serif", textAlign: "start", backdropFilter: "blur(5px)", padding: "5px" /*, width: "80vw" */ }}><span style={{ fontFamily: "'Josefin Sans', sans-serif" }}>CZAR+ {/* translations[this.props.language].footm */}</span> — {/* translations[this.props.language].foots */} </h6>
                <h6 className="container" style={{ position: "fixed", bottom: "1rem", fontFamily: "'M PLUS Code Latin', sans-serif", textAlign: "end", paddingRight: "24px" }}><span style={{ backgroundColor: "green", padding: "5px" }}>2022</span></h6>

            </Container>
        </div>

        <div className="App-header" id="drafts">
            <h3 style={{ fontFamily: "'Ubuntu Condensed', sans-serif", textTransform: "uppercase", letterSpacing: ".3rem", margin: "1.5rem 0" }}>{/* translations[this.props.language].draftmt */}</h3>
            <h5>{/* translations[this.props.language].comingsoon */}</h5>
            {/*<h5 style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
              Super Trunfo - Os Politicos<br />
              Media Tracking<br />
              <FaBusAlt style={{ padding: "3px" }} /> Dublin Bus Stop Manager<br />
              Farol Digital Literacy<br />
              Web pages [ Portfolio ]
            </h5>*/}
        </div>

        <div className="App-header" id="concepts">
            <h3 style={{ fontFamily: "'Ubuntu Condensed', sans-serif", textTransform: "uppercase", letterSpacing: ".3rem", margin: "1.5rem 0" }}>{/* translations[this.props.language].conceptmt */}</h3>
            <br />
            <Container>
                <div className="flex items-center justify-center" /* style={{ display: "flex", alignItems: "center", justifyContent: "center" }} */>
                    <div className="p-8" style={{ padding: "2rem" }}>
                        <SiReact />
                    </div>
                    <div className="verticalLineLeft p-2 text-left" /* style={{ padding: ".5rem", textAlign: "left" }} */>
                        <h6>{/* translations[this.props.language].conceptmsgs[0] */}</h6>
                        <h6 style={{ fontSize: ".8rem" }}>{/* translations[this.props.language].conceptqtrs[0] */}</h6>
                    </div>
                </div>
                <br />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div className="verticalLineRight" style={{ padding: ".5rem", textAlign: "right" }}>
                        <h6>{'' /* translations[this.props.language].conceptmsgs[1] */}</h6>
                        <h6 style={{ fontSize: ".8rem" }}>{/* translations[this.props.language].conceptqtrs[1] */}</h6>
                    </div>
                    <div style={{ padding: "2rem" }}>
                        <IoLogoPwa />
                    </div>
                </div>
                <br />
                <div className="flex items-center justify-center" /* style={{ display: "flex", alignItems: "center", justifyContent: "center" }} */>
                    <div className="p-8" style={{ padding: "2rem" }}>
                        <SiKubernetes />
                    </div>
                    <div className="verticalLineLeft p-2 text-left" /* style={{ padding: ".5rem", textAlign: "left" }} */>
                        <h6>{/* translations[this.props.language].conceptmsgs[2] */}</h6>
                        <h6 style={{ fontSize: ".8rem" }}>{/* translations[this.props.language].conceptqtrs[2] */}</h6>
                    </div>
                </div>
                <br />
                <div className="flex items-center justify-center" /* style={{ display: "flex", alignItems: "center", justifyContent: "center" }} */>
                    <div className="verticalLineRight p-2 text-right" /* style={{ padding: ".5rem", textAlign: "right" }} */>
                        <h6>{/* translations[this.props.language].conceptmsgs[3] */}</h6>
                        <h6 style={{ fontSize: ".8rem" }}>{/* translations[this.props.language].conceptqtrs[3] */}</h6>
                    </div>
                    <div className="p-8" style={{ padding: "2rem" }}>
                        {/* <VscAzure /> */}
                    </div>
                </div>
                <br />
                {/* <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <h1 style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }} className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Serviço de Automação de Processos (Robô)</h1>
                    </a>
                    <h6 style={{ fontFamily: "'M PLUS Code Latin', sans-serif", color: "lightgray", textShadow: "1px 1px 2px black, 2px 2px 4px #000000" }}>Domo arigato, Mr. Roboto</h6>
                    <h5 className="mb-3 font-normal text-gray-700 dark:text-gray-400">Robôs desenhados segundo as suas necessidades, tanto para pesquisar quanto para obter informações, com servidores funcionando 24 horas e 7 dias na semana</h5>
                    <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                </div> */}
            </Container>
        </div>

        {/* <CookieConsent buttonText="Ok">{translations[this.props.language].cookie}</CookieConsent> */}
        <Offcanvas show={false /* this.state.showOC */} placement="bottom" onHide={undefined /* this.handleCloseOC */} scroll={false} backdrop={false} className="h-24" /* style={{ height: '6rem' }} */ /* {...props} */>
            {/* <Offcanvas.Header>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header> */}
            <Offcanvas.Body className="flex items-center justify-between overflow-hidden" /* style={{ display: "flex", alignItems: "center", justifyContent: "space-between", overflow: "hidden" }} */>
                <>{/* translations[this.props.language].cookie */}</>
                <Button variant="primary" onClick={undefined /* this.handleCloseOC */} className="me-2">
                    {/* translations[this.props.language].btnok */}
                </Button>
            </Offcanvas.Body>
        </Offcanvas>
    </>;
}

export default CzIntro