import React from 'react'
import CartController from './cartController'
import "../../scss/cart.css";
import Loader from 'component/Loader';
import { getPrice } from 'utils';
import { useAppSelector } from 'store/redux.hooks';

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
    } = CartController();

  const {selectedCurrency} = useAppSelector((state:any)=>state.auth)

    return (
      <section className="pageMain">
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
              <div className="cartRow">
                <div className="cartleft">
                  <div className="cartlistingWrap">
                    <h4>
                      ORDER DETAILS -
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
                            {/* <Link
                              className="text-dark text-decoration-none"
                              to={`/products/${item?.product_id}`}
                            > */}
                            {item?.product_name && (
                              <p className="mb-1" style={{ fontSize: "11px" }}>
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
                                // disabled={item.quantity<=1}
                                onClick={(e: any) => handleDecrease(e, item)}
                              >
                                −
                              </button>
                              <input
                                type="text"
                                className="form-control text-center mx-2"
                                value={item?.quantity}
                                readOnly
                                style={{ width: "50px" }}
                              />
                              <button
                                className="btn btn-outline-secondary"
                                onClick={(e: any) => handleIncrease(e, item)}
                              >
                                +
                              </button>
                            </div>
                            {/* <div className="mb-1">
                                                <a href="#" className="assuedDelivary"> <span className=" d-inline-block "><i className="fa-regular fa-circle-check"></i></span>Assured Delivery </a>
                                                <span className="d-inline-block">by 20th November 2024 </span>
                                            </div> */}
                            {/* </Link> */}
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
                              cartSummaryData?.grand_total,
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
                          <strong>Calculated at checkout </strong>
                        </li>
                      </ul>
                      <div className="cartRightInner">
                        <ul>
                          <li>
                            <span>TOTAL PAYABLE </span>
                            <strong>
                              {getPrice(
                                cartSummaryData?.sub_total,
                                selectedCurrency
                              )}
                            </strong>
                          </li>
                          <li className="text-green">
                            <span>YOUR TOTAL SAVINGS </span>
                            <strong>{cartSummaryData?.discount}</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <button onClick={handleProceed} className="themeBtnCart">
                      PROCEED TO CHECKOUT
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-5 my-5 text-center">Your cart is empty.</div>
            ))}
        </div>
      </section>
    );
}

export default CartView
