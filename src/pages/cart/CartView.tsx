import React from 'react'
import CartController from './cartController'
import "../../scss/cart.css";

const CartView = () => {

    const { } = CartController()

    return (
        <section className="pageMain">
            <div className="container py-5">
                <div className="cartRow">
                    <div className="cartleft">
                        <div className="cartFeature">
                            <ul>
                                <li className="text-center">
                                    <span className="bg-image d-block" style={{ width: "45px", height: "33px", backgroundPosition: "-44px -10px", backgroundRepeat: "no-repeat", margin: "auto" }}></span>
                                    <strong className="py-2 d-block">Free shipping </strong>
                                </li>

                                <li className="text-center">
                                    <span className="bg-image d-block" style={{ width: "45px", height: "33px", backgroundPosition: "-44px -10px", backgroundRepeat: "no-repeat", margin: "auto" }}></span>
                                    <strong className="py-2 d-block">Hassle free return policy </strong>
                                </li>

                                <li className="text-center">
                                    <span className="bg-image d-block" style={{ width: "45px", height: "33px", backgroundPosition: "-44px -10px", backgroundRepeat: "no-repeat", margin: "auto" }}></span>
                                    <strong className="py-0 d-block">WhatsApp: +91 8291990059 </strong>
                                    <strong className="py-0 d-block">contactus@azafashions.com </strong>
                                </li>
                            </ul>

                        </div>
                        <div className="watsappLink">Shop for <strong className="mx-1">₹19,600 </strong>more to get additional offers on your order. To know more <button><i className="fa-brands fa-whatsapp"></i> Chat with us</button></div>


                        <div className="cartlistingWrap">
                            <h4>ORDER DETAILS -<small>2 Item(s)</small> </h4>
                            <div className="cartListingOuter">
                                <div className="cartListing">
                                    <figure><img src="images/cart.avif" alt="cart1" /></figure>
                                    <figcaption>
                                        <h5 className="mb-1">Chatenya Mittal </h5>
                                        <p className="mb-1" style={{ fontSize: "11px" }}>Sheesh Embroidered Ombre Kurta </p>
                                        <div className="mb-1"><span className="me-2">Color: Blue</span><span>Size: L</span></div>
                                        <div className="mb-1">Price: ₹ 22,000<strong className="ms-2">₹ 17,600</strong><span className="ms-2" style={{ color: "#388e3c" }}>(20% off)</span></div>
                                        <div className="mb-1">
                                            <a href="#" className="assuedDelivary"> <span className=" d-inline-block "><i className="fa-regular fa-circle-check"></i></span>Assured Delivery </a>
                                            <span className="d-inline-block">by 20th November 2024 </span>
                                        </div>
                                    </figcaption>
                                    <button className="cartDelete"><i className="fa-solid fa-trash-can"></i>Remove</button>
                                </div>
                                <div className="promotionalTag">This item is excluded from all promotional offers </div>
                            </div>

                            <div className="cartListingOuter">
                                <div className="cartListing">
                                    <figure><img src="images/cart.avif" alt="cart1" /></figure>
                                    <figcaption>
                                        <h5 className="mb-1">Chatenya Mittal </h5>
                                        <p className="mb-1" style={{ fontSize: "11px" }}>Sheesh Embroidered Ombre Kurta </p>
                                        <div className="mb-1"><span className="me-2">Color: Blue</span><span>Size: L</span></div>
                                        <div className="mb-1">Price: ₹ 22,000<strong className="ms-2">₹ 17,600</strong><span className="ms-2" style={{ color: "#388e3c" }}>(20% off)</span></div>
                                        <div className="mb-1">
                                            <a href="#" className="assuedDelivary"> <span className=" d-inline-block "><i className="fa-regular fa-circle-check"></i></span>Assured Delivery </a>
                                            <span className="d-inline-block">by 20th November 2024 </span>
                                        </div>
                                    </figcaption>
                                    <button className="cartDelete"><i className="fa-solid fa-trash-can"></i>Remove</button>
                                </div>
                                <div className="promotionalTag">This item is excluded from all promotional offers </div>
                            </div>
                        </div>
                    </div>

                    <div className="cartRight">
                        <div className="cartRightBox">
                            <h2>PRICE DETAILS </h2>
                            <div className="cartRightInner">
                                <ul>
                                    <li>ORDER Total <strong>₹ 30,400</strong></li>
                                    <li><p>Shipping & Duties<small>( Apply Coupon Codes on payments page )
                                    </small></p> <strong>Calculated at checkout </strong></li>
                                </ul>

                                <div className="cartRightInner">
                                    <ul>
                                        <li><span>TOTAL PAYABLE </span><strong>₹ 30,400 </strong></li>
                                        <li className="text-green"><span>YOUR TOTAL SAVINGS </span><strong>₹ 7,600 </strong></li>
                                    </ul>
                                </div>
                            </div>

                            <button className="themeBtnCart">PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartView