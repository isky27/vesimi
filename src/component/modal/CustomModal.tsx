import { useState } from "react";
import { Modal, ModalBody, ModalHeader, Button, Form, Input, Row, Col } from "reactstrap";
type DataType = {
  name: string;
  email: string;
  phone: string; 
  date: string;
  time: string;
  textarea: string;
};

const initialValue: DataType = {
  name: "",
  email: "",
  phone: "", 
  date: "",
  time: "",
  textarea: "",
};

const CustomModal = ({
  show,
  handleClose,
  modalClass,
}: {
  show: boolean;
  handleClose: () => void;
  modalClass?: string;
}) => {
  const [FormData, setFormData] = useState<DataType>(initialValue);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target; 
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(FormData);
  };

  return (
    <Modal isOpen={show} toggle={handleClose} className={modalClass}>
      <ModalHeader toggle={handleClose} className="py-2 px-3">
        Book An Appointment
      </ModalHeader>
      <ModalBody className="p-0">
        <Form onSubmit={handleSubmit} className="modalForm">
          <Input
            type="text"
            placeholder="Full Name"
            onChange={handleChange}
            name="name"
            value={FormData.name}
          />
          <Row>
            <Col>
              <Input
                type="email"
                placeholder="Enter Email"
                onChange={handleChange}
                name="email"
                value={FormData.email}
              />
            </Col>
            <Col>
              <Input
                type="number"
                placeholder="Enter Number"
                onChange={handleChange}
                name="phone"
                value={FormData.phone}
              />
            </Col>
          </Row>
          <Row md={12}>
            <Col md={6}>
              <Input
                type="date"
                placeholder="Enter Date"
                onChange={handleChange}
                name="date"
                value={FormData.date}
              />
            </Col>
            <Col md={6}>
              <Input
                type="time"
                placeholder="Enter time"
                onChange={handleChange}
                name="time"
                value={FormData.time}
              />
            </Col>
          </Row>
          <Input
            type="textarea"
            placeholder="Tell Us More"
            onChange={handleChange}
            name="textarea"
            value={FormData.textarea}
          />
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
