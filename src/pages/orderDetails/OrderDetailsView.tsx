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
        <h1 className="mb-4 h1">Order Detail</h1>

      </div>
    </ProfileWrapper>
  );
};

export default OrderDetailsView;
