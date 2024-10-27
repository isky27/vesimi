import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import LogoImage from "../assets/images/VESIMI_new_logo-03.png";
import StoreImage from "../assets/images/store.png";
import "../scss/bookAppointment.css";
import CustomModal from "./modal/CustomModal";

const BookAppointment = () => {

    const [appointmentModal, setAppointmentModal] = useState(false)

    const handleToggleModal = () =>{
        setAppointmentModal(!appointmentModal)
    }

  return (
    <section className="bookAppointment py-3 py-md-5">
      <div className="container py-0">
        <Row className="align-items-center px-0 py-0">
          <Col md="8" className="px-0 py-0 m-0">
            <img
              src={StoreImage}
              alt="Vrsimi Stores"
              className="banner img-fluid py-0 my-0"
            />
          </Col>
          <Col md="4" className="text-section px-5">
            <img src={LogoImage} alt="logo" />
            <p className="fst-italic mt-2">
              A luxury and personalized shopping experience awaits you at our
              store.
            </p>
            <p className="fw-bold">Come Shop And Celebrate</p>
            <Button onClick={handleToggleModal}>BOOK AN APPOINTMENT</Button>
          </Col>
        </Row>
      </div>
      <CustomModal show={appointmentModal} handleClose={handleToggleModal} />
    </section>
  );
};

export default BookAppointment;
