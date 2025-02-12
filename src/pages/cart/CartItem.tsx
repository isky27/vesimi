import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cartListDataApi, cartSummaryDataApi, deleteCartProductApi, updateCartApi } from "store/order/orderSlice";
import { useAppDispatch, useAppSelector } from "store/redux.hooks";
import { getPrice } from "utils";

const CartItem = (
  item: any,
  updateCartInput: any
) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const [showUpdate, setShowUpdate] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  const { selectedCurrency, loginDetails } = useAppSelector((state: any) => state.auth);


    const handleRemoveItem = (el: any) => {
      
      const userId = loginDetails?.user?.id;
  
      dispatch(deleteCartProductApi({cartId:el?.id}))
        .unwrap()
        .then(() => {
          refreshCartData(userId);
        })
        .catch(() => {
          refreshCartData(userId);
        });
    };
  
    // Helper function to refresh cart data
    const refreshCartData = (userId: string) => {
      dispatch(cartListDataApi({ user_id: userId }));
      dispatch(cartSummaryDataApi({ user_id: userId }));
    };
  
  const updateCartQuantity = (e: any, item: any, change: number) => {
    e.stopPropagation();
  
    const newQuantity = Number(item.quantity) + change;
    if (newQuantity < 1) return; // Prevents quantity from going below 1
  
    const userId = loginDetails?.user?.id;
  
    dispatch(
      updateCartApi({
        cart_ids: item.id,
        cart_quantities: newQuantity,
      })
    )
      .unwrap()
      .finally(() => refreshCartData(userId));
  };
  
  const handleDecrease = (e: any, item: any) => updateCartQuantity(e, item, -1);
  const handleIncrease = (e: any, item: any) => updateCartQuantity(e, item, 1);
  
  

  return (
    <div
      className="cartListingOuter"
      onClick={() => navigate(`/products/${item?.product_id}`)}
    >
      <div className="cartListing">
        <figure>
          {item?.product_thumbnail_image && (
            <img src={item?.product_thumbnail_image} alt="cart1" />
          )}
        </figure>
        <figcaption>
          {item?.product_name && (
            <p className="mb-1" style={{ fontSize: "11px" }}>
              {item?.product_name}
            </p>
          )}
          {item?.option_json &&
            Object.entries(JSON.parse(item?.option_json))?.map((atr: any) => {
              if (atr?.[0] && atr?.[1]) {
                return (
                  <div className="d-flex gap-1 align-items-top" key={atr[0]}>
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
              type="text"
              className="form-control text-center mx-2"
              value={item?.quantity}
              onChange={(e: any) => {
                e.stopPropagation();
                const value = e.target.value;
                if (!isNaN(value) && value > 0) {
                  setQuantity(Number(value));
                  setShowUpdate(true);
                }
              }}
              style={{ width: "50px" }}
            />
            <button
              className="btn btn-outline-secondary"
              onClick={(e: any) => handleIncrease(e, item)}
            >
              +
            </button>
          </div>
          {showUpdate && (
            <button
              className="btn btn-primary ms-2"
              onClick={(e: any) => {
                e.stopPropagation();
                updateCartInput(item.id, quantity);
                setShowUpdate(false);
              }}
            >
              Update
            </button>
          )}
          {/* <div className="mb-1">
                                                    <a href="#" className="assuedDelivary"> <span className=" d-inline-block "><i className="fa-regular fa-circle-check"></i></span>Assured Delivery </a>
                                                    <span className="d-inline-block">by 20th November 2024 </span>
                                                </div> */}
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
  );
};

export default CartItem;
