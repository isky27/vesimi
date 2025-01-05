import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { cartListDataApi, cartSummaryDataApi, deleteCartProductApi, updateCartApi } from "store/order/orderSlice"
import { useAppDispatch, useAppSelector } from "store/redux.hooks"

const CartController = () => {

  const { isLoadingCartList, cartListData, isLoadingCartSummary, cartSummaryData, isLoadingDeleteCartProduct } = useAppSelector((state) => state.order)
  const { loginDetails } = useAppSelector((state:any) => state.auth);

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(cartListDataApi({ user_id: loginDetails?.user?.id }))
    dispatch(cartSummaryDataApi({ user_id: loginDetails?.user?.id }))
  }, [dispatch, loginDetails])

  const handleProceed = () => {
    navigate("/checkout")
  }

  const handleRemoveItem = (el: any) => {
    
    const userId = loginDetails?.user?.id;

    dispatch(deleteCartProductApi({cartId:el?.id}))
      .unwrap()
      .then(() => {
        refreshCartData(userId);
      })
      .catch(() => {
        refreshCartData(userId);
      });
  };

  // Helper function to refresh cart data
  const refreshCartData = (userId: string) => {
    dispatch(cartListDataApi({ user_id: userId }));
    dispatch(cartSummaryDataApi({ user_id: userId }));
  };

  return {
    isLoadingCartList,
    cartListData,
    isLoadingCartSummary,
    cartSummaryData,
    handleProceed,
    handleRemoveItem,
    isLoadingDeleteCartProduct
  }
}

export default CartController