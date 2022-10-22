import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ModalCzarBody from './modalCzarBody';

export default function ModalCzar({ show, handleClose, state }: any) {
    return <>
        <Modal
            show={ show } onHide={ handleClose }
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                <h2 style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }}>{/* <MdEmail /> */} { /* translations[this.props.language].servicet[0] */ }</h2>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ModalCzarBody state={state} />
              <Row>
              <Col>
                <h4>{ /* translations[this.props.language].servicemodalt[0] */ }</h4>
                <h6>{ /* translations[this.props.language].servicemodalmsg[0] */ }</h6>
                {/* <h6>Obsoleto, atiquado ou utrapassado talvez voce pense isso sobre emails, mas nao eh a verdade, para cada cadastro em algum site ou aplicativo é necessario se usar um email, é um meio informal que preserva a privacidade do usuario. Emails profissionais sao amplamente utilizados em empresas. Para contactar clientes, mostrar atualizações dos seus produtos, ou em caso de cobranças permanentes. Nosso sistema tem diferentes pacotes de envio para o seu negocio.
Um sistema de email pronto para ser usado em aplicativos ou paginas, todos os problemas de escalonamento, banco de dados e gerenciamento podemos deixar a sua disposição. Com documentação simples pode ter o sistema rodando em questao de minutos, poucos minutos de verdade, sem dor de cabeça, altamente costumizavel.</h6> */}
              </Col>
                <Col>
              <h4>{ /* translations[this.props.language].testemailt */ }</h4>
              <Form onSubmit={ undefined /* this.handleSubmit2 */ } style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder={ '' /* translations[this.props.language].contactilemail */ } value={ '' /* this.emailFrom */ } onChange={ () => {} /* (v) => this.setState({ emailTo: v.target.value }) */ } />
                        <Form.Text className="text-muted">
                          <h6 style={{ color: "gray" }}>{ /* translations[this.props.language].contactiledisclaimer */ }</h6>
                        </Form.Text>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder={ '' /* translations[this.props.language].testemaililmessage */ } value={ ''/* this.emailBody */ } onChange={ () => {} /* (v) => this.setState({ emailBodyTo: v.target.value  }) */ } />
                      </Form.Group>
                      <Button variant="primary" type="submit" >
                        {/* <FaPaperPlane /> */} &nbsp; { /* translations[this.props.language].btnsendemail */ }
                      </Button>
                    </Form>
                    </Col>
                  </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={ handleClose }>{ /* this.getIcons('ri', 'btniclose') */ } { /* translations[this.props.language].btnclose */ }</Button>{/* <RiCloseCircleLine /> */}
            </Modal.Footer>
          </Modal>
    </>;
}