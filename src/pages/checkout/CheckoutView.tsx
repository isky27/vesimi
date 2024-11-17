import React from 'react'
import CheckoutController from './checkoutController'

const CheckoutView = () => {
    const {

    } = CheckoutController()

    return (
        <main className="pageMain">
            <div className="container">
                <div className="py-5">
                    <div className="cartRow align-items-stretch">
                        <div className="cartleft checkOutLeft pb-5">
                            <h2>shipping and billing address </h2>
                            <div className="addAddressBlock">
                                <h3>Shipping Address </h3>
                                <button><i className="fa-solid fa-plus me-1"></i>ADD SHIPPING ADDRESS</button>
                            </div>

                            <label><input type="checkbox" /> address same as shipping address </label>

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

                            <div className="totalOrdersOuter">
                                <h4>ORDER DETAILS -<small>2 Item(s)</small> </h4>
                                <div className="cartListing">
                                    <figure><img src="images/cart.avif" alt="cart1" /></figure>
                                    <figcaption>
                                        <h5 className="mb-1 fs-6">Chatenya Mittal </h5>
                                        <p className="mb-1" style={{fontSize:"11px"}}>Sheesh Embroidered Ombre Kurta </p>
                                        <div className="mb-1"><span className="me-2">Color: Blue</span><span>Size: L</span></div>
                                        <div className="mb-1">Price: ₹ 22,000<strong className="ms-2">₹ 17,600</strong><span className="ms-2" style={{color:"#388e3c"}}>(20% off)</span></div>
                                        <div className="mb-1">
                                            <a href="#" className="assuedDelivary"> <span className=" d-inline-block "><i className="fa-regular fa-circle-check"></i></span>Assured Delivery </a>
                                            <span className="d-inline-block">by 20th November 2024 </span>
                                        </div>
                                    </figcaption>
                                    <button className="cartDelete top-0 right-0"><i className="fa-solid fa-trash-can"></i></button>
                                </div>

                                <div className="cartListing">
                                    <figure><img src="images/cart.avif" alt="cart1" /></figure>
                                    <figcaption>
                                        <h5 className="mb-1 fs-6">Chatenya Mittal </h5>
                                        <p className="mb-1" style={{fontSize:"11px"}}>Sheesh Embroidered Ombre Kurta </p>
                                        <div className="mb-1"><span className="me-2">Color: Blue</span><span>Size: L</span></div>
                                        <div className="mb-1">Price: ₹ 22,000<strong className="ms-2">₹ 17,600</strong><span className="ms-2" style={{color:"#388e3c"}}>(20% off)</span></div>
                                        <div className="mb-1">
                                            <a href="#" className="assuedDelivary"> <span className=" d-inline-block "><i className="fa-regular fa-circle-check"></i></span>Assured Delivery </a>
                                            <span className="d-inline-block">by 20th November 2024 </span>
                                        </div>
                                    </figcaption>
                                    <button className="cartDelete top-0 right-0"><i className="fa-solid fa-trash-can"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default CheckoutView