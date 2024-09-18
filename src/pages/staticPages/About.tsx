import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const AboutUs = () => {
    return (
            <section className="pageMain ">
                <Row className="container mx-auto w-100 d-flex justify-content-center">
                    <Col md={10} className="pt-3 pb-5 ">
                    <h1 className="text-left h3">ABOUT US</h1>
                        <Card >
                            <Card.Body>

                                <p>
                                    <span className="text-danger font-weight-bold">VESIMI</span> is a multi-designer online &amp; offline fashion store owned by Yogi Group, curated &amp; managed by Atinirmal G. Pagarani. We have established ourselves as a destination fashion store for high quality bridal, trousseau, vacation &amp; all your festive needs. We have been successfully operating for more than a decade now. We are associated with some of the top-selling designers like <b>Arpita Mehta, Amit Aggarwal, Aisha Rao, Anushree Reddy, Astha Narang, Jayanti Reddy, Isharya, Outhouse, Kunal Rawal, Masaba, Neeta Lulla, Papa Don't Preach, Ridhi Mehra, Shantnu Nikhil, Shivan Narresh, Shyamal &amp; Bhumika, Torani, Tarun Tahiliani, Varun Bahl</b> to name a few, retail their newest creations at <span className="text-danger font-weight-bold">VESIMI</span>.
                                </p>
                                <p>Shop with <span className="text-danger font-weight-bold">VESIMI</span> online and at store in Dubai, UAE. Enjoy the hassle-free shopping with guaranteed on time delivery.</p>
                                <div className="mt-4">
                                    <h5>Company Information:</h5>
                                    <p>
                                        <b>VESIMI FASHIONS INDIA PRIVATE LIMITED.</b><br />
                                        504, Simran plaza, 3rd &amp; 4th road junction, Near Regal exclave hotel, Khar (w)<br />
                                        Mumbai, India<br />
                                        Po Box: 400052<br />
                                        Tel: 022 61276691 / 92 / 93 / 94<br />
                                        GST No: 27AAGCV1895B1Z8
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>

    );
};

export default AboutUs;
