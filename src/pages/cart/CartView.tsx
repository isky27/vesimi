import React from "react";
import CartController from "./cartController";
import "../../scss/cart.css";
import Loader from "component/Loader";
import { extractNumber, getPrice } from "utils";

const CartView = () => {
  const {
    isLoadingCartList,
    cartListData,
    isLoadingCartSummary,
    cartSummaryData,
    handleProceed,
    handleRemoveItem,
    isLoadingDeleteCartProduct,
    navigate,
    handleDecrease,
    handleIncrease,
    isLoadingUpdateCart,
    selectedCurrency,
    handleUpdateCart,
    cartQuantity,
    setCartQuantity,
    isCartUpdated,
    setIsCartUpdated,
  } = CartController();

  return (
    <section
      className="parent d-flex flex-column border p-3"
      style={{ height: "100%" }}
    >
      <Loader
        isLoading={[
          isLoadingCartList,
          isLoadingCartSummary,
          isLoadingDeleteCartProduct,
          isLoadingUpdateCart,
        ]}
      />
      <div className="container py-3">
        <h1 className="h3 mb-3">Cart Items</h1>
        {!(isLoadingCartList || isLoadingCartSummary) &&
          (cartListData?.data[0]?.cart_items?.length > 0 ? (
            <div>
              <div className="cartRow">
                <div className="cartleft">
                  <div className="cartlistingWrap">
                    <h4>
                      ORDER DETAILS -{" "}
                      <small>
                        {cartListData?.data[0]?.cart_items?.length} Item(s)
                      </small>{" "}
                    </h4>
                    {cartListData?.data[0]?.cart_items?.map((item: any) => (
                      <div
                        className="cartListingOuter"
                        onClick={() =>
                          navigate(`/products/${item?.product_id}`)
                        }
                      >
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
                            {item?.product_name && (
                              <p className="mb-1" style={{ fontSize: "16px" }}>
                                {item?.product_name}
                              </p>
                            )}
                            {item?.option_json &&
                              Object.entries(
                                JSON.parse(item?.option_json)
                              )?.map((atr: any) => {
                                if (atr?.[0] && atr?.[1]) {
                                  return (
                                    <div
                                      className="d-flex gap-1 align-items-top"
                                      key={atr[0]}
                                    >
                                      <p
                                        style={{
                                          textTransform: "capitalize",
                                        }}
                                      >
                                        {atr[0]} :{" "}
                                      </p>
                                      <p>{atr[1]}</p>
                                    </div>
                                  );
                                } else {
                                  return <div></div>;
                                }
                              })}
                            {item?.price && (
                              <div className="mb-1">
                                Price: {getPrice(item?.price, selectedCurrency)}
                                {/* <strong className="ms-2">₹ 17,600</strong>
                                                <span className="ms-2" style={{ color: "#388e3c" }}>(20% off)</span> */}
                              </div>
                            )}
                            <div className="d-flex align-items-center">
                              <button
                                className="btn btn-outline-secondary"
                                onClick={(e: any) => handleDecrease(e, item)}
                              >
                                −
                              </button>
                              <input
                                type="number"
                                className="form-control text-center mx-2"
                                value={cartQuantity[item?.id]}
                                style={{ width: "50px" }}
                                min="1"
                                onClick={(e) => e.stopPropagation()}
                                onChange={(e: any) => {
                                  e.stopPropagation();
                                  setIsCartUpdated(true);
                                  const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                                  setCartQuantity((prev: any) => ({
                                    ...prev,
                                    [item?.id]: value ? Math.max(1, Number(value)) : "",
                                  }));
                                }}
                                onBlur={(e) => {
                                  if (
                                    !e.target.value ||
                                    Number(e.target.value) < 1
                                  ) {
                                    setCartQuantity((prev: any) => ({
                                      ...prev,
                                      [item?.id]: "1", // Reset to 1 if empty or less than 1
                                    }));
                                    setIsCartUpdated(true);
                                  }
                                }}
                              />
                              <button
                                className="btn btn-outline-secondary"
                                onClick={(e: any) => handleIncrease(e, item)}
                              >
                                +
                              </button>
                            </div>
                          </figcaption>
                          <button
                            className="cartDelete"
                            onClick={(e: any) => {
                              e.stopPropagation();
                              handleRemoveItem(item);
                            }}
                          >
                            <i className="fa-solid fa-trash-can"></i>Remove
                          </button>
                        </div>
                        <div className="promotionalTag">
                          This item is excluded from all promotional offers{" "}
                        </div>
                      </div>
                    ))}
                  </div>
                  {isCartUpdated && (
                    <div className="sticky-bottom bg-white p-3 border text-end">
                      <button
                        onClick={handleUpdateCart}
                        className="themeBtnCart"
                      >
                        Update Cart
                      </button>
                    </div>
                  )}
                </div>

                <div className="cartRight">
                  <div className="cartRightBox">
                    <h2>PRICE DETAILS </h2>
                    <div className="cartRightInner">
                      <ul>
                        <li>
                          Order Total{" "}
                          <strong>
                            {getPrice(
                              cartSummaryData?.sub_total,
                              selectedCurrency
                            )}
                          </strong>
                        </li>
                        <li>
                          <p>
                            Shipping & Duties
                            <small>
                              ( Apply Coupon Codes on payments page )
                            </small>
                          </p>{" "}
                          <strong>
                            {Number(
                              extractNumber(cartSummaryData?.shipping_cost)
                            ) > 0
                              ? getPrice(
                                  cartSummaryData?.shipping_cost,
                                  selectedCurrency
                                )
                              : "Calculated at checkout"}
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
                            <strong>{cartSummaryData?.discount}</strong>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                    <button
                      onClick={handleProceed}
                      className="themeBtnCart flex-right"
                    >
                      PROCEED TO CHECKOUT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="py-5 my-5 text-center">Your cart is empty.</div>
          ))}
      </div>
    </section>
  );
};

export default CartView;
