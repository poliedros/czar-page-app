import { Button, Col, Row } from "react-bootstrap";
import { Languages } from "../../types/languages";
import translations from "../../functions/translations";

export default function ModalCloud({ language }: { language: Languages }) {
  return (
    <>
      <Row>
        <Col>
          <h4>{translations("servicemodalt", language, 1)}</h4>
          <h6>{translations("servicemodalmsg", language, 1)}</h6>
        </Col>
        <Col>
          <h4>{translations("cloudservicedescription", language)}</h4>
          <input
            type="file"
            id="input-file-now-custom-2"
            className="file-upload"
            data-height="500"
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
                            }} */
          />
          <Button onClick={undefined /* this.handleClick */}>
            {translations("btnsendfile", language)}
          </Button>
        </Col>
      </Row>
    </>
  );
}
