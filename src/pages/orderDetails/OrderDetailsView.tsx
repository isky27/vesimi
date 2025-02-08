import React from "react";
import OrderDetailController from "./orderDetailController";
import Loader from "component/Loader";
import ProfileWrapper from "pages/account/ProfileWrapper";
import { getPrice } from "utils";

const OrderDetailsView = () => {
  const {
    isLoadingOrderDetails,
    orderDetailsData,
    selectedCurrency,
    isLoadingOrderItems,
    orderItemeData,
  } = OrderDetailController();

  console.log(
    orderDetailsData?.data?.[0],
    {shipping_address : {
    "name": "Mr. Customer",
    "email": "customer@example.com",
    "address": "Now or never",
    "country": "Afghanistan",
    "state": "Andaman and Nicobar Islands",
    "city": "Sed ea dolore offici",
    "postal_code": "64643213456",
    "phone": "8765461215464"
}},
    "orderDetailsDataorderDetailsDataorderDetailsData"
  );

  return (
    <ProfileWrapper>
      <Loader isLoading={[isLoadingOrderDetails, isLoadingOrderItems]} />
      <div className="myAccountMain">
        <div className="d-flex align-items-center gap-2">
          <h1 className="h2">Order Detail</h1>
          {orderDetailsData?.data?.[0]?.code && (
            <h4 className="h5">#{orderDetailsData?.data?.[0]?.code}</h4>
          )}
        </div>
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
                {orderItemeData?.data?.map((el: any) => {
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
              <h2>Shipping Details </h2>
              <div className="cartRightInner">
                <p>{orderDetailsData?.data?.[0]?.shipping_address?.name}</p>
                <p>{orderDetailsData?.data?.[0]?.shipping_address?.phone}</p>
                <p>{orderDetailsData?.data?.[0]?.shipping_address?.address}</p>
                <p>{orderDetailsData?.data?.[0]?.shipping_address?.city}</p>
                <p>{`${orderDetailsData?.data?.[0]?.shipping_address?.state}, ${orderDetailsData?.data?.[0]?.shipping_address?.country}, ${orderDetailsData?.data?.[0]?.shipping_address?.postal_code}`}</p>
              </div>
            </div>
            <div className="cartRightBox mt-2">
              <h2>Price Details </h2>
              <div className="cartRightInner">
                <ul>
                  <li>
                    ORDER Total{" "}
                    <strong>
                      {getPrice(
                        orderDetailsData?.data?.[0]?.grand_total,
                        selectedCurrency
                      )}
                    </strong>
                  </li>
                  <li>
                    Shipping & Handing
                    <strong>
                      {getPrice(
                        orderDetailsData?.data?.[0]?.shipping_cost,
                        selectedCurrency
                      )}
                    </strong>
                  </li>
                  {/* <li>
                    <strong>Grand Total</strong>
                    <strong>{getPrice(orderDetailsData?.data?.[0]?.grand_total,  selectedCurrency)}</strong>
                  </li> */}
                  <li>
                    Tax
                    <strong>
                      {getPrice(
                        orderDetailsData?.data?.[0]?.tax,
                        selectedCurrency
                      )}
                    </strong>
                  </li>
                  <li style={{ fontSize: "18px" }}>
                    <strong>TOTAL PAYABLE </strong>
                    <strong>
                      {getPrice(
                        orderDetailsData?.data?.[0]?.grand_total,
                        selectedCurrency
                      )}
                    </strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProfileWrapper>
  );
};

export default OrderDetailsView;
