import { Button, Col, Row } from "react-bootstrap";
import { Language } from "../languages";
import translations from "../../functions/translations";
import { useState } from "react";
import axios from "axios";

export default function ModalCloud({ language }: { language: Language }) {
  const [file, setFile] = useState<File>();

  async function onClickHandle() {
    const request = { file };
    const res = await axios.post("https://api.images.czar.dev", request, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const id = res.data.id;
    alert(`https://catalogv2.blob.core.windows.net/storage-images/${id}`);
    return `https://catalogv2.blob.core.windows.net/storage-images/${id}`;
  }

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
            onChange={(e) => {
              const files = e.target.files;
              const formData = new FormData();
              if (!files) return;
              formData.append("file", files[0]);

              if (!files) return;
              if (files.length <= 0) return;

              setFile(files[0]);
            }}
          />
          <Button
            className="!flex items-center"
            variant="secondary"
            onClick={onClickHandle}
          >
            {translations("btnsendfile", language)}
          </Button>
        </Col>
      </Row>
    </>
  );
}
