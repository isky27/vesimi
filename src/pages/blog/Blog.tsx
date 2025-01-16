import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import closeWhiteIcon from "../assets/images/closeWhiteIcon.png";

function Blog() {
  return (
    <div>
      <div className="productListinfWrap wishListSection py-4">
        <div className="container">
          <Row>
            <Col sm={6} lg={4}>
              <div className="blogList">
                  <figure>
                    <img src="images/blog1.avif" alt="blog"/>
                  </figure>
                  <figcaption> 
                    <h2>11 Different Types of Sarees Popular in India and Beyond </h2>
                    <div className="blogDate">January 15, 2025</div>
                    <p>India’s intense love affair with sarees for women makes it the unmatched star of every occasion. From the meticulous zari work of the classic
                       Kanjeevaram silk sarees and iconic Banarasis… </p>
                       <div className="socialIcon">
                          <a href="#"><img src="images/Wishlistheart.svg" /></a>
                          <a href="#"><img src="images/brand-facebook.svg" /></a>
                          <a href="#"><img src="images/brand-pinterest.svg" /></a>
                       </div>
                  </figcaption> 

              </div>
            
            </Col>

            <Col sm={6} lg={4}>
              <div className="blogList">
                  <figure>
                    <img src="images/blog2.avif" alt="blog"/>
                  </figure>
                  <figcaption> 
                    <h2>11 Different Types of Sarees Popular in India and Beyond </h2>
                    <div className="blogDate">January 15, 2025</div>
                    <p>India’s intense love affair with sarees for women makes it the unmatched star of every occasion. From the meticulous zari work of the classic
                       Kanjeevaram silk sarees and iconic Banarasis… </p>
                       <div className="socialIcon">
                          <a href="#"><img src="images/Wishlistheart.svg" /></a>
                          <a href="#"><img src="images/brand-facebook.svg" /></a>
                          <a href="#"><img src="images/brand-pinterest.svg" /></a>
                       </div>
                  </figcaption> 

              </div>
            
            </Col>

            <Col sm={6} lg={4}>
              <div className="blogList">
                  <figure>
                    <img src="images/blog3.avif" alt="blog"/>
                  </figure>
                  <figcaption> 
                    <h2>11 Different Types of Sarees Popular in India and Beyond </h2>
                    <div className="blogDate">January 15, 2025</div>
                    <p>India’s intense love affair with sarees for women makes it the unmatched star of every occasion. From the meticulous zari work of the classic
                       Kanjeevaram silk sarees and iconic Banarasis… </p>
                       <div className="socialIcon">
                          <a href="#"><img src="images/Wishlistheart.svg" /></a>
                          <a href="#"><img src="images/brand-facebook.svg" /></a>
                          <a href="#"><img src="images/brand-pinterest.svg" /></a>
                       </div>
                  </figcaption> 

              </div>
            
            </Col>

            <Col sm={6} lg={4}>
              <div className="blogList">
                  <figure>
                    <img src="images/blog2.avif" alt="blog"/>
                  </figure>
                  <figcaption> 
                    <h2>11 Different Types of Sarees Popular in India and Beyond </h2>
                    <div className="blogDate">January 15, 2025</div>
                    <p>India’s intense love affair with sarees for women makes it the unmatched star of every occasion. From the meticulous zari work of the classic
                       Kanjeevaram silk sarees and iconic Banarasis… </p>
                       <div className="socialIcon">
                          <a href="#"><img src="images/Wishlistheart.svg" /></a>
                          <a href="#"><img src="images/brand-facebook.svg" /></a>
                          <a href="#"><img src="images/brand-pinterest.svg" /></a>
                       </div>
                  </figcaption> 

              </div>
            
            </Col> 
        
          </Row>

          <div className="themePagger text-center py-3">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="#">
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link text-dark" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link text-dark" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link text-dark" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link text-dark" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
