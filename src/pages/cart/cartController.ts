import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { cartListDataApi, cartSummaryDataApi } from "store/product/productSlice"
import { useAppDispatch, useAppSelector } from "store/redux.hooks"

const CartController = () => {
  
  const {isLoadingCartList, cartListData, isLoadingCartSummary, cartSummaryData } = useAppSelector((state:any)=> state.product)
  const { loginDetails } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    dispatch(cartListDataApi({user_id:loginDetails?.user?.id}))
    dispatch(cartSummaryDataApi({user_id: loginDetails?.user?.id}))
  },[dispatch, loginDetails])

  const handleProceed = () =>{
    navigate("/checkout")
  }

  return {
    isLoadingCartList, 
    cartListData,
    isLoadingCartSummary, 
    cartSummaryData,
    handleProceed
  }
}

export default CartController