import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ModalCzarBody from "./modalCzarBody";
import { Language } from "../languages";
import translations from "../../functions/translations";
import { RiCloseCircleLine } from "react-icons/ri";

export default function ModalCzar(
  { show, handleClose, state, title }: any,
  { language }: Language
) {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h2 style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }}>
              {title}
            </h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalCzarBody state={state} language={language} />
        </Modal.Body>
        <Modal.Footer>
          {language}
          <Button onClick={handleClose}>
            {translations("btnclose", language)}
            <RiCloseCircleLine />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
