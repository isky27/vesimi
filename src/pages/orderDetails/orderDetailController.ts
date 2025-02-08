import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOrderDetails } from "store/order/orderSlice";
import { useAppDispatch, useAppSelector } from "store/redux.hooks";

const OrderDetailController = () => {

    const {orderId} = useParams();

    const { isLoadingOrderDetails, orderDetailsData } = useAppSelector((state) => state.order);
    const { selectedCurrency } = useAppSelector((state: any) => state.auth);
    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(getOrderDetails({
          orderId: orderId,
        })
      );
    }, [dispatch, orderId]);

  return {
    isLoadingOrderDetails,
    orderDetailsData,
    selectedCurrency,
  };
}

export default OrderDetailController;
