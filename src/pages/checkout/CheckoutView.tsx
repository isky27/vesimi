import { getPrice } from 'utils'
import CheckoutController from './checkoutController'
import Loader from 'component/Loader'

const CheckoutView = () => {
    const {
        isLoadingCartList,
        cartListData,
        isLoadingCartSummary,
        cartSummaryData
    } = CheckoutController()

    return (
        <section className="pageMain">
            <Loader isLoading={[isLoadingCartList, isLoadingCartSummary]} />
            <div className="container">
                <div className="py-5">
                    <div className="cartRow align-items-stretch">
                        <div className="cartleft checkOutLeft pb-5">
                            <h2>shipping and billing address </h2>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Shipping Information
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="addAddressBlock">
                                                <form>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">First Name</label>
                                                                <input type="text" className="form-control" id="firstName" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>


                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">Last Name</label>
                                                                <input type="text" className="form-control" id="" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">Last Name</label>
                                                                <select className="form-select" aria-label="Default select example">
                                                                    <option selected>Country</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">Address</label>
                                                                <input type="text" className="form-control" id="" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>


                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">Addition address information</label>
                                                                <input type="text" className="form-control" id="" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">City</label>
                                                                <input type="text" className="form-control" id="" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>


                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">State/Province/Region</label>
                                                                <input type="text" className="form-control" id="" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">Zip/postal Code</label>
                                                                <input type="text" className="form-control" id="" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">Phone Number</label>
                                                                <input type="text" className="form-control" id="" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <button className="themeBtnCart">Continue Checkout</button>

                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Payment Method
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="addAddressBlock">
                                                <form>

                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <label className="form-label">Card Number</label>
                                                                <input type="text" className="form-control" id="" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>


                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <label className="form-label">Name On Card</label>
                                                                <input type="text" className="form-control" id="" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label className="form-label">Month</label>
                                                                <select className="form-select" aria-label="Default select example">
                                                                    <option selected>Country</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                        </div>


                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label className="form-label">Years</label>
                                                                <select className="form-select" aria-label="Default select example">
                                                                    <option selected>Country</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label className="form-label">CVV</label>
                                                                <input type="text" className="form-control" id="" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>

                                                        <div className="form-check ms-3 mb-4">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                            <label className="form-check-label">
                                                                My billing addresss is  the same as  my shiping address.
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <button className="themeBtnCart">Continue Checkout</button>

                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Shipping Information
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="addAddressBlock">
                                                <form>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">First Name</label>
                                                                <input type="text" className="form-control" id="" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">Last Name</label>
                                                                <input type="text" className="form-control" id="" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">Last Name</label>
                                                                <select className="form-select" aria-label="Default select example">
                                                                    <option selected>Country</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">Address</label>
                                                                <input type="text" className="form-control" id="" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>


                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">Addition address information</label>
                                                                <input type="text" className="form-control" id="" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">City</label>
                                                                <input type="text" className="form-control" id="" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>


                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">State/Province/Region</label>
                                                                <input type="text" className="form-control" id="" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">Zip/postal Code</label>
                                                                <input type="text" className="form-control" id="" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">Phone Number</label>
                                                                <input type="text" className="form-control" id="" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>


                                                    </div>

                                                    <button className="themeBtnCart">Checkout</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cartRight">
                            <div className="cartRightBox">
                                <h2>PRICE DETAILS </h2>
                                <div className="cartRightInner">
                                    <ul>
                                        <li>ORDER Total <strong>{getPrice(cartSummaryData?.grand_total)}</strong></li>
                                        <li><p>Shipping & Duties<small>( Apply Coupon Codes on payments page )
                                        </small></p> <strong>Calculated at checkout </strong></li>
                                    </ul>
                                    <div className="cartRightInner">
                                        <ul>
                                            <li><span>TOTAL PAYABLE </span><strong>{getPrice(cartSummaryData?.sub_total)}</strong></li>
                                            <li className="text-green"><span>YOUR TOTAL SAVINGS </span><strong>{cartSummaryData?.discount}</strong></li>
                                        </ul>
                                    </div>
                                </div>
                                <button className="themeBtnCart">PROCEED TO CHECKOUT</button>
                            </div>

                            <div className="totalOrdersOuter">
                                <h4>ORDER DETAILS - <small>{cartListData?.data[0]?.cart_items?.length}Item(s)</small> </h4>
                                {
                                cartListData?.data[0]?.cart_items?.map((item: any) => <div className="cartListingOuter">
                                    <div className="cartListing">
                                        <figure>{item?.product_thumbnail_image && <img src={item?.product_thumbnail_image} alt="cart1" />}</figure>
                                        <figcaption>
                                            {item?.designer && <h5 className="mb-1">{item?.designer} </h5>}
                                            {item?.product_name && <p className="mb-1" style={{ fontSize: "11px" }}>{item?.product_name}</p>}
                                            {(item?.color || item?.size) && <div className="mb-1">{item?.color && <span className="me-2">Color: {item?.color}</span>}{item?.size && <span>Size: {item?.size}</span>}</div>}
                                            {item?.price && <div className="mb-1">Price: {getPrice(item?.price)}
                                                {/* <strong className="ms-2">₹ 17,600</strong>
                                                <span className="ms-2" style={{ color: "#388e3c" }}>(20% off)</span> */}
                                            </div>}
                                            {/* <div className="mb-1">
                                                <a href="#" className="assuedDelivary"> <span className=" d-inline-block "><i className="fa-regular fa-circle-check"></i></span>Assured Delivery </a>
                                                <span className="d-inline-block">by 20th November 2024 </span>
                                            </div> */}
                                        </figcaption>
                                        <button className="cartDelete top-0 right-0"><i className="fa-solid fa-trash-can"></i></button>
                                    </div>
                                </div>)
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default CheckoutView