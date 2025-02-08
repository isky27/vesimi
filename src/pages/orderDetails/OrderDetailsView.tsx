import React from "react";
import OrderDetailController from "./orderDetailController";
import Loader from "component/Loader";
import ProfileWrapper from "pages/account/ProfileWrapper";
import { getPrice } from "utils";

const OrderDetailsView = () => {
  const { isLoadingOrderDetails, orderDetailsData, selectedCurrency } =
    OrderDetailController();
    
  return (
    <ProfileWrapper>
      <Loader isLoading={[isLoadingOrderDetails]} />
      <div className="myAccountMain">
        <h1 className="h2">Order Detail</h1>
        <div className="cartRow">
          <div className="cartleft">
            <table className="product-order-table" id="product-table">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {orderDetailsData?.data?.map((el: any) => {
                  return (
                    <tr>
                      <td className="order-Name">
                        <p>
                          <strong>{el?.product_name}</strong>
                        </p>
                        <p>{el?.variation}</p>
                      </td>
                      <td>
                        <strong>{getPrice(el.price, selectedCurrency)}</strong>
                      </td>
                      <td id="price"> Order: {el?.quantity}</td>
                      <td>
                        <strong>{getPrice(el.price, selectedCurrency)}</strong>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="cartRight">
            <div className="cartRightBox">
              <h2>PRICE DETAILS </h2>
              <div className="cartRightInner">
                <ul>
                  <li>
                    ORDER Total <strong>₹ 30,400</strong>
                  </li>
                  <li>
                    Shipping & Handing<strong>₹ 49,400</strong>
                  </li>
                  <li>
                    <strong>Grand Total</strong>
                    <strong>₹ 49,400</strong>
                  </li>
                  <li>
                    GST (5%)<strong>₹ 49,400</strong>
                  </li>
                  <li>
                    Tax<strong>₹ 49,400</strong>
                  </li>
                  <li style={{ fontSize: "18px" }}>
                    <strong>TOTAL PAYABLE </strong>
                    <strong>₹ 30,400 </strong>
                  </li>
                </ul>
              </div>
              {/* <button className="themeBtnCart">PROCEED TO CHECKOUT</button> */}
            </div>
          </div>
        </div>
      </div>
    </ProfileWrapper>
  );
};

export default OrderDetailsView;
