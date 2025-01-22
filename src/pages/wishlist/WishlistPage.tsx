import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import closeWhiteIcon from "../assets/images/closeWhiteIcon.png";

function WishlistPage() {
  return (
    <div>
      <div className="productListinfWrap wishListSection py-4">
        <div className="container">
          <Row>
            <Col sm={6} lg={3}>
              <div className="productCols position-relative mb-2 mb-md-3">
                <a href="#" className="text-dark text-decoration-none">
                  <div className="position-relative">
                    <picture>
                      <img
                        src="images/wishlist1.avif"
                        alt=""
                      />
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7z"></path>
                      </svg>
                    </picture>
                    <button className="wishListCloseIcon">
					<img src="images/closeWhiteIcon.png" alt="close" />
                    </button>
                    <div className="QuickView">
                      <strong>Quick View</strong>
                      <div className="addTags">
                        <span>XXS</span>
                        <span>XS</span>
                        <span>S</span>
                        <span>M</span>
                        <span>L</span>
                        <span>XL</span>
                        <span>XXL</span>
                        <span>3XL</span>
                      </div>

                      <div className="AddProductAction">
                        <button style={{ color: "bb3d1f" }}>ADD TO CART</button>
                        <button
                          style={{ color: "bb3d1f" }}
                          className="border-0"
                        >
                          BUY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="py-2">
                    <h3 className="text-uparcase">the cocktail bar'24</h3>
                    <p className="text-gray ">Sequin Embroidered Lehenga Set</p>
                    <small className="font-semibold">₹22,400</small>
                  </div>
                </a>
              </div>
            </Col>

            <Col sm={6} lg={3}>
              <div className="productCols position-relative mb-2 mb-md-3">
                <a href="#" className="text-dark text-decoration-none">
                  <div className="position-relative">
                    <picture>
                      <img
                       src="images/wishlist2.avif"
                        alt=""
                      />
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7z"></path>
                      </svg>
                    </picture>
					<button className="wishListCloseIcon">
					<img src="images/closeWhiteIcon.png" alt="close" />
                    </button>
                    <div className="QuickView">
                      <strong>Quick View</strong>
                      <div className="addTags">
                        <span>XXS</span>
                        <span>XS</span>
                        <span>S</span>
                        <span>M</span>
                        <span>L</span>
                        <span>XL</span>
                        <span>XXL</span>
                        <span>3XL</span>
                      </div>

                      <div className="AddProductAction">
                        <button style={{ color: "bb3d1f" }}>ADD TO CART</button>
                        <button
                          style={{ color: "bb3d1f" }}
                          className="border-0"
                        >
                          BUY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="py-2">
                    <h3 className="text-uparcase">the cocktail bar'24</h3>
                    <p className="text-gray ">Sequin Embroidered Lehenga Set</p>
                    <small className="font-semibold">₹22,400</small>
                  </div>
                </a>
              </div>
            </Col>

			<Col sm={6} lg={3}>
              <div className="productCols position-relative mb-2 mb-md-3">
                <a href="#" className="text-dark text-decoration-none">
                  <div className="position-relative">
                    <picture>
                      <img
                        src="images/wishlist1.avif"
                        alt=""
                      />
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7z"></path>
                      </svg>
                    </picture>
                    <button className="wishListCloseIcon">
					<img src="images/closeWhiteIcon.png" alt="close" />
                    </button>
                    <div className="QuickView">
                      <strong>Quick View</strong>
                      <div className="addTags">
                        <span>XXS</span>
                        <span>XS</span>
                        <span>S</span>
                        <span>M</span>
                        <span>L</span>
                        <span>XL</span>
                        <span>XXL</span>
                        <span>3XL</span>
                      </div>

                      <div className="AddProductAction">
                        <button style={{ color: "bb3d1f" }}>ADD TO CART</button>
                        <button
                          style={{ color: "bb3d1f" }}
                          className="border-0"
                        >
                          BUY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="py-2">
                    <h3 className="text-uparcase">the cocktail bar'24</h3>
                    <p className="text-gray ">Sequin Embroidered Lehenga Set</p>
                    <small className="font-semibold">₹22,400</small>
                  </div>
                </a>
              </div>
            </Col>

            <Col sm={6} lg={3}>
              <div className="productCols position-relative mb-2 mb-md-3">
                <a href="#" className="text-dark text-decoration-none">
                  <div className="position-relative">
                    <picture>
                      <img
                       src="images/wishlist2.avif"
                        alt=""
                      />
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7z"></path>
                      </svg>
                    </picture>
                    <button className="wishListCloseIcon">
					<img src="images/closeWhiteIcon.png" alt="close" />
                    </button>
                    <div className="QuickView">
                      <strong>Quick View</strong>
                      <div className="addTags">
                        <span>XXS</span>
                        <span>XS</span>
                        <span>S</span>
                        <span>M</span>
                        <span>L</span>
                        <span>XL</span>
                        <span>XXL</span>
                        <span>3XL</span>
                      </div>

                      <div className="AddProductAction">
                        <button style={{ color: "bb3d1f" }}>ADD TO CART</button>
                        <button
                          style={{ color: "bb3d1f" }}
                          className="border-0"
                        >
                          BUY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="py-2">
                    <h3 className="text-uparcase">the cocktail bar'24</h3>
                    <p className="text-gray ">Sequin Embroidered Lehenga Set</p>
                    <small className="font-semibold">₹22,400</small>
                  </div>
                </a>
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

export default WishlistPage;
