import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOrderDetails, getOrderItems } from "store/order/orderSlice";
import { useAppDispatch, useAppSelector } from "store/redux.hooks";

const OrderDetailController = () => {

    const {orderId} = useParams();

    const { isLoadingOrderDetails, orderDetailsData, isLoadingOrderItems, orderItemeData } = useAppSelector((state) => state.order);
    const { selectedCurrency } = useAppSelector((state: any) => state.auth);
    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(getOrderDetails({
          orderId: orderId,
        })
      );

      dispatch(getOrderItems({
          orderId: orderId,
        })
      );
    }, [dispatch, orderId]);

  return {
    isLoadingOrderDetails,
    orderDetailsData,
    selectedCurrency,
    isLoadingOrderItems,
    orderItemeData
  };
}

export default OrderDetailController;
