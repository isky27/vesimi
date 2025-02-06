import React from "react";
import OrderDetailController from "./orderDetailController";
import Loader from "component/Loader";
import ProfileWrapper from "pages/account/ProfileWrapper";

const OrderDetailsView = () => {
  const { isLoadingOrderDetails, orderDetailsData } = OrderDetailController();
  return (
    <ProfileWrapper>
      <Loader isLoading={[isLoadingOrderDetails]} />
      <div className="myAccountMain">
        <h1 className="mb-4 h2">Order Detail</h1>
          <div className="cartRow">
            <div className="cartleft">
              <table className="product-order-table" id="product-table">
                <tbody>
                  <tr>
                    <th>Product Name</th>
                    <th>SKU</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Subtotal</th>
                  </tr>
                  <tr>
                    <td>
                      <p className="order-Name">
                        <strong>color</strong>Gray
                      </p>
                      <p className="order-Name">
                        <strong>Size</strong>2.4 x 0.85m
                      </p>
                    </td>
                    <td> 8923325563253322</td>
                    <td>
                      {" "}
                      <strong>Rs.410.00</strong>
                    </td>
                    <td id="price"> Order: 1</td>
                    <td>
                      {" "}
                      <strong>Rs.410.00</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <strong>color</strong>Gray
                      </p>
                      <p>
                        <strong>Size</strong>2.4 x 0.85m
                      </p>
                    </td>
                    <td> 8923325563253322</td>
                    <td>
                      {" "}
                      <strong>Rs.410.00</strong>
                    </td>
                    <td id="price"> Order: 1</td>
                    <td>
                      {" "}
                      <strong>Rs.410.00</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <strong>color</strong>Gray
                      </p>
                      <p>
                        <strong>Size</strong>2.4 x 0.85m
                      </p>
                    </td>
                    <td> 8923325563253322</td>
                    <td>
                      {" "}
                      <strong>Rs.410.00</strong>
                    </td>
                    <td id="price"> Order: 1</td>
                    <td>
                      {" "}
                      <strong>Rs.410.00</strong>
                    </td>
                  </tr>
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
