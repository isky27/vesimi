import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { cartListDataApi, cartSummaryDataApi, updateCartApi } from "store/order/orderSlice"
import { useAppDispatch, useAppSelector } from "store/redux.hooks"

const CartController = () => {

  const { isLoadingCartList, cartListData, isLoadingCartSummary, cartSummaryData } = useAppSelector((state) => state.order)
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

    const data = cartListData?.data?.[0]?.cart_items?.reduce(
      (acc: any, element: any) => {
        console.log(element, el, "dsfrfwerdfdgtsefgzdfnhtregfr");
        if (element?.id !== el?.id) {
          acc.cart_ids.push(element?.id);
          acc.cart_quantities.push(element?.quantity);
        }else{
          acc.cart_ids.push(element?.id);
          acc.cart_quantities.push(0);
        }
        return acc;
      },
      { cart_ids: [], cart_quantities: [] }
    );

    console.log(cartListData?.data?.cart_items, cartListData?.data, data, "FSsddddddddddddddddddddddddddddd");


    // Convert arrays to comma-separated strings
    data.cart_ids = data.cart_ids.join(",");
    data.cart_quantities = data.cart_quantities.join(",");

    dispatch(updateCartApi(data))
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
    handleRemoveItem
  }
}

export default CartController