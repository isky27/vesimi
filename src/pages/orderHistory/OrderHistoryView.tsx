import React from "react";
import OrderHistoryController from "./orderHistoryController";
import { getPrice, normalizedList } from "utils";
import Loader from "component/Loader";
import { Link } from "react-router-dom";

const OrderHistoryView = () => {
    
  const { isLoadingOrderHistory, orderHistoryData } = OrderHistoryController();

  return (
    <section className="pageMain">
      <Loader isLoading={[isLoadingOrderHistory]} />
      <div className="container mt-4">
        <h1 className="mb-4 h1">Order List</h1>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Order #</th>
              <th>Date</th>
              <th>Order Total</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {normalizedList(orderHistoryData?.data)?.map((order: any) => (
              <tr key={order.id}>
                <td>{order.code}</td>
                <td>{order.date}</td>
                <td>{getPrice(order.grand_total)}</td>
                <td>{order.delivery_status_string}</td>
                <td>
                  <Link to={`/order-details/${order.id}`} className="btn btn-primary btn-sm">
                    View Order
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default OrderHistoryView;
