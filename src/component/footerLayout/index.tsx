import React from 'react'
import VisaImages from "../../assets/images/visa.svg"
import MasterCard from "../../assets/images/master-card.svg";
import Paypal from "../../assets/images/paypal.svg";
import AmericanExpress from "../../assets/images/american-express.svg";
import LogoImage from "../../assets/images/VESIMI_new_logo-03.png"
import { useNavigate } from 'react-router-dom';


const Footer = () => {
  const navigate = useNavigate()
  return (
    <footer className="webFooter">

      <div className="container">
        <div className="footerRow">
          <div className="footerCols">
            <a href="index.html" className="footerLogo"><img src={LogoImage} /></a>
            <li onClick={()=>navigate('/about-us')} className="footerNavLink">About Vesimi</li>
            <a href="#" className="footerNavLink">Our store</a>
            <a href="#" className="footerNavLink">Careers</a>
            <a href="#" className="footerNavLink">Contact Us</a>
          </div>

          <div className="footerCols">
            <h5>BUYING GUIDE </h5>
            <a href="#" className="footerNavLink">Gift Card</a>
            <a href="#" className="footerNavLink">Shipping</a>
            <a href="#" className="footerNavLink">Celebrity closet</a>
            <a href="#" className="footerNavLink">Client Diaries</a>
          </div>


          <div className="footerCols">
            <h5>ACCOUNT</h5>
            <a href="#" className="footerNavLink">Login</a>
            <a href="#" className="footerNavLink">Order History</a>
            <a href="#" className="footerNavLink">Track My Order</a>
           </div>

           <div className="footerCols">
            <h5>CUSTOMER CARE</h5>
            <a href="#" className="footerNavLink">Terms & Conditions</a>
            <a href="#" className="footerNavLink">FAQ's</a>
            <a href="#" className="footerNavLink">Privacy Policy</a>
            <a href="#" className="footerNavLink">Return & Exchange</a>
            <a href="#" className="footerNavLink">Refund and Cancelation Policy</a>
           </div>

          <div className="footerCols">
            <h5>SIGN UP FOR FASHION UPDATES </h5>
            <div className="subscribe">
              <input type="text" className="" placeholder="Enter Your Email" />
              <button className="bg-themered subscribeBtn">Share App Link</button>
            </div>

            <div className="acceptCard mt-2 pt-1">
              <a href="#" className="w-6 h-6 d-inline-block bg-image instaSocial"
                style={{backgroundPosition: "-47px -158px"}}></a>
              <a href="#" className="w-6 h-6 d-inline-block bg-image threadSocial"
                style={{backgroundPosition: "-73px -211px"}}></a>
              <a href="#" className="w-6 h-6 d-inline-block bg-image facebookSocial"
                style={{backgroundPosition: "-72px -158px"}}></a>
              <a href="#" className="w-6 h-6 d-inline-block bg-image youtubeSocial"
                style={{backgroundPosition: "-97px -158px"}}></a>
              <a href="#" className="w-6 h-6 d-inline-block bg-image twitterSocial"
                style={{backgroundPosition: "-101px -211px"}}></a>
            </div>
            <h5 className="mb-2">COMPLETELY SAFE AND SECURE PAYMENT METHOD</h5>

            <div className="acceptCard mt-2 pt-1">
              <h5 className="mb-2">We accept Netbanking, all major credit cards</h5>
              <span><img src={VisaImages} /></span>
              <span><img src={MasterCard} /></span>
              <span><img src={Paypal} /></span>
              <span><img src={AmericanExpress} /></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
