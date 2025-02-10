import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { cartListDataApi, cartSummaryDataApi, deleteCartProductApi, updateCartApi } from "store/order/orderSlice"
import { useAppDispatch, useAppSelector } from "store/redux.hooks"

const CartController = () => {

  const {
    isLoadingCartList,
    cartListData,
    isLoadingCartSummary,
    cartSummaryData,
    isLoadingDeleteCartProduct,
    isLoadingUpdateCart,
  } = useAppSelector((state) => state.order);
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

const updateCartQuantity = (e: any, item: any, change: number) => {
  e.stopPropagation();

  const newQuantity = Number(item.quantity) + change;
  if (newQuantity < 1) return; // Prevents quantity from going below 1

  const userId = loginDetails?.user?.id;

  dispatch(
    updateCartApi({
      cart_ids: item.id,
      cart_quantities: newQuantity,
    })
  )
    .unwrap()
    .finally(() => refreshCartData(userId));
};

const handleDecrease = (e: any, item: any) => updateCartQuantity(e, item, -1);
const handleIncrease = (e: any, item: any) => updateCartQuantity(e, item, 1);


  return {
    isLoadingCartList,
    cartListData,
    isLoadingCartSummary,
    cartSummaryData,
    handleProceed,
    handleRemoveItem,
    isLoadingDeleteCartProduct,
    handleDecrease,
    handleIncrease,
    navigate,
    isLoadingUpdateCart,
  };
}

export default CartController