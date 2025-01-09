import { Modal, ModalBody, ModalHeader, Button, Form, Input, Row, Col } from "reactstrap";

const CustomModal = ({ show, handleClose, modalClass, handleSubmit }: any) => {
  return (
    <Modal isOpen={show} toggle={handleClose} className={modalClass}>
      <ModalHeader toggle={handleClose} className="py-2 px-3">
        Book An Appointment
      </ModalHeader>
      <ModalBody className="p-0">
        <Form onSubmit={handleSubmit} className="modalForm">
          <Input type="text" placeholder="Full Name" />
          <Row>
            <Col>
              <Input type="tel" placeholder="Mobile Number" />
            </Col>
            <Col>
              <Input type="text" placeholder="Email" />
            </Col>
          </Row>
          <Row md={12}>
            <Col md={6}>
              <Input type="date" placeholder="Mobile Number" />
            </Col>
            <Col md={6}>
              <Input type="time" placeholder="Email" />
            </Col>
          </Row>
          <Input type="textarea" placeholder="Tell Us More" />
          <Button className="btn btn-primary">Book Now</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

CustomModal.defaultProps = {
  secondaryBtnDisabled: false,
  primaryBtnDisabled: false,
  primaryButtonText: "",
  secondaryButtonText: "",
  modalBody: "",
  primaryButtonClass: "btn-deepgreenLg font-14 w-100",
  secondaryButtonclass: "btn-deepgreenLg font-14 w-100",
  modalClass: "",
};

export default CustomModal;
