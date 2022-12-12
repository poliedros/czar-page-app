import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ModalCzarBody from "./modalCzarBody";
import { Languages } from "../../types/languages";
import translations from "../../functions/translations";
import { RiCloseCircleLine } from "react-icons/ri";

type ObjType = {
  show: any;
  handleClose: any;
  state: any;
  title: any;
  language: Languages;
};

export default function ModalCzar({
  show,
  handleClose,
  state,
  title,
  language,
}: ObjType) {
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
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
