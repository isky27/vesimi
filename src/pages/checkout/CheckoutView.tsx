import { getPrice } from 'utils'
import CheckoutController from './checkoutController'
import { Accordion } from "react-bootstrap";
import Loader from 'component/Loader'
import AddressFormView from 'pages/address/addressForm/AddressFormView';

const CheckoutView = () => {
    const {
        isLoadingCartList,
        cartListData,
        isLoadingCartSummary,
        cartSummaryData,
        isLoadingUserAddress,
        userAddressData,
        openAddressForm,
        setOpenAddressForm,
        selectedAddress,
        setSelectedAddress,
        handleChooseAddress,
        activeKey,
        setActiveKey,
        isShippingMethodDisabled, 
        setIsShippingMethodDisabled,
        isPaymentMethodDisabled, 
        setIsPaymentMethodDisabled,
        isLoadingOrderAddress,
        handleAfterAddAddress
    } = CheckoutController()

    return (
        <section className="pageMain">
            <Loader isLoading={[isLoadingCartList, isLoadingCartSummary, isLoadingUserAddress, isLoadingOrderAddress]} />
            <div className="container">
                <div className="py-5">
                    <div className="cartRow align-items-stretch">
                        <div className="cartleft checkOutLeft pb-5">
                            <h2>shipping and billing address </h2>
                            <Accordion className='accordian' activeKey={activeKey} onSelect={(key) => setActiveKey(key as string)}>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Shipping Information</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="addAddressBlock">
                                            {openAddressForm ? (
                                                <AddressFormView handleAfterSuccess={handleAfterAddAddress}/>
                                            ) : (
                                                <div>
                                                    {userAddressData?.data?.map((elem: any) => (
                                                        <div className="addressBox d-flex align-items-center gap-3" key={elem.id}>
                                                            <input
                                                                type="radio"
                                                                value={elem.id}
                                                                checked={selectedAddress?.id === elem.id}
                                                                onChange={() => setSelectedAddress(elem)}
                                                            />
                                                            <div>
                                                                <p>{elem.address}</p>
                                                                <p>{elem.city_name}</p>
                                                                <p>{`${elem.state_name}, ${elem.country_name}, ${elem.postal_code}`}</p>
                                                                <p>{elem.phone}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                    <div>
                                                        <button className="themeBtnCart" onClick={handleChooseAddress}>
                                                            Continue Checkout
                                                        </button>
                                                        <button
                                                            className="themeBtnCart"
                                                            onClick={() => {
                                                                setOpenAddressForm(!openAddressForm);
                                                                setSelectedAddress(null);
                                                            }}
                                                        >
                                                            Add new address
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header className={isShippingMethodDisabled ? "disabled" : ""}
                                        style={{ cursor: isShippingMethodDisabled ? "not-allowed" : "pointer" }}>Shipping Methods</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="addAddressBlock">
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">First Name</label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    {/* Add other form fields */}
                                                </div>
                                                <button className="themeBtnCart">Checkout</button>
                                            </form>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header className={isPaymentMethodDisabled ? "disabled" : ""}
                                        style={{ cursor: isPaymentMethodDisabled ? "not-allowed" : "pointer" }}>Payment Method</Accordion.Header>
                                    <Accordion.Body>
                                        <form>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="mb-3">
                                                        <label className="form-label">Card Number</label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                {/* Add remaining form fields */}
                                            </div>
                                            <button className="themeBtnCart">Continue Checkout</button>
                                        </form>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

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