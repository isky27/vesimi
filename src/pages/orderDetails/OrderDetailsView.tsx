import React from 'react'
import OrderDetailController from './orderDetailController'
import Loader from 'component/Loader'

const OrderDetailsView = () => {

    const { isLoadingOrderDetails, orderDetailsData } = OrderDetailController();

    console.log(orderDetailsData, "orderDetailsDataorderDetailsData");

  return (
    <section className="pageMain">
      <Loader isLoading={[isLoadingOrderDetails]} />
      <div className="container mt-4">
        <h1 className="mb-4 h1">Order Detail</h1>
      </div>
    </section>
  );
}

export default OrderDetailsView
