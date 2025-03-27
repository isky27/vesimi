import { useEffect, useState } from "react";
import { getOrderHistory } from "../../store/order/orderSlice";
import { useAppDispatch, useAppSelector } from "../../store/redux.hooks";

const OrderHistoryController = () => {

    const { isLoadingOrderHistory, orderHistoryData } = useAppSelector((state) => state.order);
    const [currentPage, setCurrentPage] = useState(1)
    const dispatch = useAppDispatch();
    const { loginDetails } = useAppSelector((state:any) => state.auth);

    useEffect(() => {
      dispatch(
        getOrderHistory({ user_id: loginDetails?.user?.id, page: currentPage })
      );
    }, [dispatch, loginDetails, currentPage]);

  return {
    isLoadingOrderHistory,
    orderHistoryData,
    currentPage,
    setCurrentPage,
  };
}

export default OrderHistoryController;
