import { useEffect } from "react";
import { getOrderHistory } from "store/order/orderSlice";
import { useAppDispatch, useAppSelector } from "store/redux.hooks";

const OrderHistoryController = () => {

    const { isLoadingOrderHistory, orderHistoryData } = useAppSelector((state) => state.order);
    const dispatch = useAppDispatch();
    const { loginDetails } = useAppSelector((state:any) => state.auth);

    useEffect(() => {
      dispatch(getOrderHistory({ user_id: loginDetails?.user?.id }));
    }, [dispatch, loginDetails]);

  return {
    isLoadingOrderHistory,
    orderHistoryData,
  };
}

export default OrderHistoryController;
