import { extractNumber, getPrice } from "utils";
import CheckoutController from "./checkoutController";
import { Accordion } from "react-bootstrap";
import Loader from "component/Loader";
import AddressFormView from "pages/address/addressForm/AddressFormView";
import { Link } from "react-router-dom";
import { useAppSelector } from "store/redux.hooks";
import RazorpayPayment from "pages/payment/RazorPayment";

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
    isPaymentMethodDisabled,
    setIsPaymentMethodDisabled,
    isLoadingOrderAddress,
    handleAfterAddAddress,
    handleSaveOrder,
    isLoadingSaveOrder,
  } = CheckoutController();

  const { selectedCurrency } = useAppSelector((state: any) => state.auth);

  return (
    <section className="pageMain">
      <Loader
        isLoading={[
          isLoadingCartList,
          isLoadingCartSummary,
          isLoadingUserAddress,
          isLoadingOrderAddress,
          isLoadingSaveOrder,
        ]}
      />
      <div className="container">
        <div className="py-5">
          <div className="cartRow align-items-stretch">
            <div className="cartleft checkOutLeft pb-5">
              <h2>shipping and billing address </h2>
              <Accordion
                className="accordian"
                activeKey={activeKey}
                onSelect={(key) => setActiveKey(key as string)}
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Shipping Information</Accordion.Header>
                  <Accordion.Body>
                    <div className="addAddressBlock">
                      {openAddressForm ? (
                        <AddressFormView
                          handleAfterSuccess={handleAfterAddAddress}
                        />
                      ) : (
                        <div>
                          {userAddressData?.data?.map((elem: any) => (
                            <div
                              className="addressBox d-flex align-items-center gap-3"
                              key={elem.id}
                            >
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
                            <button
                              className="themeBtnCart"
                              onClick={handleChooseAddress}
                            >
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
                  <Accordion.Header
                    className={isShippingMethodDisabled ? "disabled" : ""}
                    style={{cursor: isShippingMethodDisabled ? "not-allowed" : "pointer"}}
                  >
                    Shipping Methods
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="addAddressBlock">
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          setIsPaymentMethodDisabled(false);
                          setActiveKey("2");
                        }}
                      >
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <input type="radio" checked={true} />{" "}
                            <label>
                              Shipping Cost :{" "}
                              {isShippingMethodDisabled
                                ? "Calculated at checkout"
                                : getPrice(
                                    cartSummaryData?.shipping_cost,
                                    selectedCurrency
                                  )}
                            </label>
                          </div>
                        </div>
                        <button type="submit" className="themeBtnCart">
                          Save and Continue
                        </button>
                      </form>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header
                    className={isPaymentMethodDisabled ? "disabled" : ""}
                    style={{
                      cursor: isPaymentMethodDisabled
                        ? "not-allowed"
                        : "pointer",
                    }}
                  >
                    Payment Method
                  </Accordion.Header>
                  <Accordion.Body>
                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <input type="radio" checked={true} />{" "}
                          <label>Razorpay</label>
                        </div>
                      </div>
                      {/* Add remaining form fields */}
                      <RazorpayPayment amount={extractNumber(cartSummaryData?.grand_total)} handleAfterPayment={handleSaveOrder}/>
                    {/* </form> */}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="cartRight">
              <div className="cartRightBox">
                <h2>PRICE DETAILS </h2>
                <div className="cartRightInner">
                  <ul>
                    <li>
                      Order Total{" "}
                      <strong>
                        {getPrice(cartSummaryData?.sub_total, selectedCurrency)}
                      </strong>
                    </li>
                    <li>
                      <p>
                        Shipping & Duties
                        <small>( Apply Coupon Codes on payments page )</small>
                      </p>{" "}
                      <strong>
                        {getPrice(
                          cartSummaryData?.shipping_cost,
                          selectedCurrency
                        )}
                      </strong>
                    </li>
                  </ul>
                  <div className="cartRightInner">
                    <ul>
                      <li>
                        <span>TOTAL PAYABLE </span>
                        <strong>
                          {getPrice(
                            cartSummaryData?.grand_total,
                            selectedCurrency
                          )}
                        </strong>
                      </li>
                      {/* <li className="text-green">
                        <span>YOUR TOTAL SAVINGS </span>
                        <strong>
                          {cartSummaryData?.discount}
                        </strong>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="totalOrdersOuter">
                <h4>
                  ORDER DETAILS -{" "}
                  <small>
                    {cartListData?.data[0]?.cart_items?.length}Item(s)
                  </small>{" "}
                </h4>
                {cartListData?.data[0]?.cart_items?.map((item: any, index:number) => (
                  <div key={index} className="cartListingOuter">
                    <div className="cartListing">
                      <figure>
                        {item?.product_thumbnail_image && (
                          <img
                            src={item?.product_thumbnail_image}
                            alt="cart1"
                          />
                        )}
                      </figure>
                      <figcaption>
                        <Link
                          className="text-dark text-decoration-none"
                          to={`/products/${item?.product_id}`}
                        >
                          {item?.product_name && (
                            <p className="mb-1" style={{ fontSize: "11px" }}>
                              {item?.product_name}
                            </p>
                          )}
                          {item?.option_json &&
                            Object.entries(JSON.parse(item?.option_json))?.map(
                              (atr: any) => {
                                if (atr?.[0] && atr?.[1]) {
                                  return (
                                    <div
                                      className="d-flex gap-1 align-items-top"
                                      key={atr[0]}
                                    >
                                      <p
                                        style={{ textTransform: "capitalize" }}
                                      >
                                        {atr[0]} :{" "}
                                      </p>
                                      <p>{atr[1]}</p>
                                    </div>
                                  );
                                } else {
                                  return <div></div>;
                                }
                              }
                            )}
                          {item?.price && (
                            <div className="mb-1">
                              Price: {getPrice(item?.price, selectedCurrency)}
                              {/* <strong className="ms-2">₹ 17,600</strong>
                                                <span className="ms-2" style={{ color: "#388e3c" }}>(20% off)</span> */}
                            </div>
                          )}
                          {/* <div className="mb-1">
                                                <a href="#" className="assuedDelivary"> <span className=" d-inline-block "><i className="fa-regular fa-circle-check"></i></span>Assured Delivery </a>
                                                <span className="d-inline-block">by 20th November 2024 </span>
                                            </div> */}
                        </Link>
                      </figcaption>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutView;
