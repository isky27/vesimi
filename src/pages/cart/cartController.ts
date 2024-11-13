import { useEffect } from "react"
import { cartListDataApi, cartSummaryDataApi } from "store/product/productSlice"
import { useAppDispatch, useAppSelector } from "store/redux.hooks"

const CartController = () => {
  
  const {isLoadingCartList, cartListData, isLoadingCartSummary, cartSummaryData } = useAppSelector((state:any)=> state.product)
  const { loginDetails } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(cartListDataApi({user_id:loginDetails?.user?.id}))
    dispatch(cartSummaryDataApi({user_id: loginDetails?.user?.id}))
  },[dispatch, loginDetails])

  return {
    isLoadingCartList, 
    cartListData,
    isLoadingCartSummary, 
    cartSummaryData
  }
}

export default CartController