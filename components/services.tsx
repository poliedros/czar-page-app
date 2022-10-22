import CardCzar from './cardCzar';

import { useReducer } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { RiCloudFill, RiRobotFill } from "react-icons/ri";
import { MdEmail, MdDomainVerification } from "react-icons/md";

import translations from "../translations.json";

export default function Services({ language }: { language: "en" | "es" | "pt" }) {


    return <>
        <div className="App-header" id="services" /*style={{ backgroundColor: "#282c34", minHeight: "100vh" }}*/>
            {/* <h1>Email Sercive | for your business | for your code</h1>
            <h1>Blob Service | for your business | for your code</h1>
            <h1>Robot Service | for your business | for your code</h1> */}
            <Container>
                {/*<div id="mainWrapper">
                <div id="cardsWrapper">*/}
                <Row className="justify-center" /* style={{ justifyContent: "center" }} */>
                    <h3 className="unselectable uppercase tracking-[.3rem] my-6" style={{ fontFamily: "'Ubuntu Condensed', sans-serif", /* textTransform: "uppercase", letterSpacing: ".3rem", margin: "1.5rem 0" */ }}>{ translations.servicemt[language] }</h3>
                    <Col xs={12} lg={4} className="flex items-center justify-center my-4" /* style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "1rem 0 1rem 0" }} */>
                        <CardCzar preview={
                            {
                                state: 'AD',
                                icon: 'MdWeb',
                                iconType: 'md',
                                type: 'service',
                                id: '0',
                                pos: '4',
                                message: '',
                                icon2: 'GiPaintBrush',
                                bgImage: 'seventh',
                                artist: 'jacksonsophat.com',
                                language: language,
                            }
                        }/>
                    </Col>
                    <Col xs={12} lg={4} className="flex items-center justify-center mx-4 my-4" /* style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "1rem 0 1rem 0" }} */>
                        <CardCzar preview={
                            {
                                state: 'HD',
                                icon: 'MdDomainVerification',
                                iconType: 'md',
                                type: 'service',
                                id: '1',
                                pos: '3',
                                message: 'czar.dev',
                                icon2: '',
                                bgImage: 'sixth',
                                artist: 'kobu.agency',
                                language: language,
                            }
                        }/>
                        
                        {/* <div className="card" onClick={undefined /* this.handleShowHD /}>
                            <div className="image sixth">
                                <div className="screen"></div>
                                <div className="text-end p-4" style={{ fontFamily: "'Source Sans Pro', sans-serif", /* textAlign: "end", padding: "1rem" / }}>
                                    <MdDomainVerification />
                                    <h1 style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }}>{/* translations[this.props.language].servicet[3] /}</h1>
                                    <h6 className="text-lightgray" style={{ fontFamily: "'M PLUS Code Latin', sans-serif"/* , color: "lightgray" /, textShadow: "1px 1px 2px black, 2px 2px 4px #000000" }} >czar.dev</h6>
                                    <h5>{/* translations[this.props.language].servicest[3] /}</h5>
                                    {/* <h6><a href="">for your business</a><br /><a href="">for your code</a></h6> /}
                                </div>
                            </div>
                        </div> */}
                    </Col>
                    <Col xs={12} lg={4} className="flex items-center justify-center my-4" style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "1rem 0 1rem 0" }}>
                        <CardCzar preview={
                            {
                                state: 'E',
                                icon: 'MdEmail',
                                iconType: 'md',
                                type: 'service',
                                id: '2',
                                pos: '0',
                                message: 'QWERTYIOP',
                                icon2: '',
                                bgImage: 'first',
                                artist: 'lucasgeorgewendtfotografia.blogspot.com',
                                language: language,
                            }
                        }/>
                        
                        {/* <div className="card" onClick={ undefined /* handleShowE / }>
                            <div className="image first">
                                <div className="screen"></div>
                                <div className="text" style={{ fontFamily: "'Source Sans Pro', sans-serif", textAlign: "end", padding: "1rem" }}>
                                    <MdEmail />
                                    <h1 style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }}>{/* translations[this.props.language].servicet[0] /}</h1>
                                    <h6 className="text-lightgray" style={{ fontFamily: "'M PLUS Code Latin', sans-serif"/* , color: "lightgray" /, textShadow: "1px 1px 2px black, 2px 2px 4px #000000" }} >QWERTYIOP</h6>
                                    <h5>{/* translations[this.props.language].servicest[0] /}</h5>
                                    {/* <h6><a href="">for your business</a><br /><a href="">for your code</a></h6> /}
                                </div>
                            </div>
                        </div> */}
                    </Col>
                    <Col xs={12} lg={4} className="flex items-center justify-center my-4" /* style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "1rem 0 1rem 0" }} */>
                        <CardCzar preview={
                            {
                                state: 'C',
                                icon: 'RiCloudFill',
                                iconType: 'ri',
                                type: 'service',
                                id: '3',
                                pos: '1',
                                message: 'Cumulonimbus',
                                icon2: '',
                                bgImage: 'second',
                                artist: 'instagram.com/ibam_photovideo',
                                language: language,
                            }
                        }/>
                        
                        {/* <div className="card" onClick={undefined /* this.handleShowC /}>
                            <div className="image second">
                                <div className="screen"></div>
                                <div className="text text-end p-4" style={{ fontFamily: "'Source Sans Pro', sans-serif", /* textAlign: "end", padding: "1rem" / }}>
                                    <RiCloudFill />
                                    <h1 style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }}>{/* translations[this.props.language].servicet[1] /}</h1>
                                    <h6 className="text-[#e2e8f0] drop-shadow-[1px_1px_2px_black]" style={{ fontFamily: "'M PLUS Code Latin', sans-serif"/* , color: "lightgray"/,  }} >Cumulonimbus</h6>
                                    <h5>{/* translations[this.props.language].servicest[1]/}</h5>
                                    {/* <h6><a href="">for your business</a><br /><a href="">for your code</a></h6> /}
                                </div>
                            </div>
                        </div> */}
                    </Col>
                    <Col xs={12} lg={4} className="flex items-center justify-center my-4" /* style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "1rem 0 1rem 0" }} */>
                        <CardCzar preview={
                            {
                                state: 'R',
                                icon: 'RiRobotFill',
                                iconType: 'ri',
                                type: 'service',
                                id: '4',
                                pos: '2',
                                message: 'Domo arigato, Mr. Roboto',
                                icon2: '',
                                bgImage: 'third',
                                artist: 'instagram.com/jem.sahagun',
                                language: language,
                            }
                        }/> 
                        
                        {/* <div className="card" onClick={undefined /* this.handleShowR /}>
                            <div className="image third">
                                <div className="screen"></div>
                                <div className="text text-end p-4" style={{ fontFamily: "'Source Sans Pro', sans-serif", textAlign: "end", padding: "1rem" }}>
                                    <RiRobotFill />
                                    <h1 style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }}>{/* translations[this.props.language].servicet[2] /}</h1>
                                    <h6 style={{ fontFamily: "'M PLUS Code Latin', sans-serif", color: "lightgray", textShadow: "1px 1px 2px black, 2px 2px 4px #000000" }} >Domo arigato, Mr. Roboto</h6>
                                    <h5>{/* translations[this.props.language].servicest[2] /}</h5>
                                    {/* <h6><a href="">for your business</a><br /><a href="">for your code</a></h6> /}
                                </div>
                            </div>
                        </div> */}
                    </Col>
                </Row>
                {/*</div>
            </div>*/}
            </Container>
        </div>
    </>;
}
