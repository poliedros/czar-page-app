import { Button, Col, Row } from "react-bootstrap";
import { Language } from "../languages";

export default function ModalCloud({ language }: Language) {
    return <>
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
            </>
}