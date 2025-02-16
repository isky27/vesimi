import React from 'react'
import VisaImages from "../../assets/images/visa.svg"
import MasterCard from "../../assets/images/master-card.svg";
import Paypal from "../../assets/images/paypal.svg";
import AmericanExpress from "../../assets/images/american-express.svg";
import LogoImage from "../../assets/images/VESIMI_new_logo-03.png"
import { Link } from 'react-router-dom';
import { setOpenLoginPopup } from 'store/auth/authDataSlice';
import Loader from 'component/Loader';
import FooterController from './footerController';
import { Form } from 'react-bootstrap';


const Footer = () => {

  const {
    loginDetails,
    isLoadingNewsSubscribe,
    dispatch,
    subscribeNewsFormik,
  } = FooterController();

  return (
    <footer className="webFooter">
      <Loader isLoading={[isLoadingNewsSubscribe]} />
      <div className="container">
        <div className="footerRow">
          <div className="footerCols">
            <Link to="/" className="footerLogo">
              <img src={LogoImage} />
            </Link>
            <Link to="/about-us" className="footerNavLink">
              About Vesimi
            </Link>
            <Link to={"/store-locator"} className="footerNavLink">
              Our store
            </Link>
            <Link to={"/career"} className="footerNavLink">
              Careers
            </Link>
            <Link to={"/contact"} className="footerNavLink">
              Contact Us
            </Link>
          </div>

          <div className="footerCols">
            <h5>BUYING GUIDE </h5>
            <Link to={"/"} className="footerNavLink">
              Gift Card
            </Link>
            <Link to={"/shipping"} className="footerNavLink">
              Shipping
            </Link>
            <Link to={"/"} className="footerNavLink">
              Celebrity closet
            </Link>
            <Link to={"/"} className="footerNavLink">
              Client Diaries
            </Link>
          </div>

          <div className="footerCols">
            <h5>ACCOUNT</h5>
            {loginDetails ? (
              <Link to={"/account"} className="footerNavLink">
                Account
              </Link>
            ) : (
              <div
                onClick={() => dispatch(setOpenLoginPopup(true))}
                className="footerNavLink cursor-pointer"
              >
                Login
              </div>
            )}
            <Link to={"/"} className="footerNavLink">
              Order History
            </Link>
            <Link to={"/"} className="footerNavLink">
              Track My Order
            </Link>
          </div>

          <div className="footerCols">
            <h5>CUSTOMER CARE</h5>
            <Link to={"/terms-conditions"} className="footerNavLink">
              Terms & Conditions
            </Link>
            <Link to={"/faqs"} className="footerNavLink">
              FAQ's
            </Link>
            <Link to={"/privacy-policy"} className="footerNavLink">
              Privacy Policy
            </Link>
            <Link to={"/returns-and-exchange"} className="footerNavLink">
              Return & Exchange
            </Link>
            <Link to={"/refund-cancellation-policy"} className="footerNavLink">
              Refund and Cancelation Policy
            </Link>
          </div>

          <div className="footerCols">
            <h5>SIGN UP FOR FASHION UPDATES </h5>
            <div className="subscribe">
              <Form onSubmit={subscribeNewsFormik?.handleSubmit}>
                <input
                  type="text"
                  name="email"
                  onChange={subscribeNewsFormik.handleChange}
                  className=""
                  placeholder="Enter Your Email"
                />
                <button type="submit" className="bg-themered subscribeBtn">
                  Subscribe
                </button>
              </Form>
            </div>
            {subscribeNewsFormik.touched.email &&
              subscribeNewsFormik.errors.email && (
                <span style={{ color: "red", fontSize: "12px" }}>
                  {subscribeNewsFormik.errors.email}
                </span>
              )}
            <div className="acceptCard mt-2 pt-1">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to={"https://www.instagram.com/vesimi/#"}
                className="w-6 h-6 d-inline-block bg-image instaSocial"
                style={{ backgroundPosition: "-47px -158px" }}
              ></Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to={"https://www.threads.net/@vesimi"}
                className="w-6 h-6 d-inline-block bg-image threadSocial"
                style={{ backgroundPosition: "-73px -211px" }}
              ></Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to={"https://www.facebook.com/VESIMI"}
                className="w-6 h-6 d-inline-block bg-image facebookSocial"
                style={{ backgroundPosition: "-72px -158px" }}
              ></Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to={"https://x.com/_VESIMI"}
                className="w-6 h-6 d-inline-block bg-image twitterSocial"
                style={{ backgroundPosition: "-101px -211px" }}
              ></Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to={"https://in.pinterest.com/VESIMIFashion/"}
                className="w-6 h-6 d-inline-block bg-image pinterestSocial"
                style={{ backgroundPosition: "0px -271px", backgroundSize: "810px 295px" }}
              ></Link>
            </div>
            <h5 className="mb-2">COMPLETELY SAFE AND SECURE PAYMENT METHOD</h5>

            <div className="acceptCard mt-2 pt-1">
              <h5 className="mb-2">
                We accept Netbanking, all major credit cards
              </h5>
              <span>
                <img src={VisaImages} />
              </span>
              <span>
                <img src={MasterCard} />
              </span>
              <span>
                <img src={Paypal} />
              </span>
              <span>
                <img src={AmericanExpress} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
