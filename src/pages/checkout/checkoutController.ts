import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getUserAddress } from "store/account/accountDataSlice";
import { cartListDataApi, cartSummaryDataApi, updateOrderAddress } from "store/order/orderSlice";
import { useAppDispatch, useAppSelector } from "store/redux.hooks";

const CheckoutController = () => {
  
  const [openAddressForm, setOpenAddressForm] = useState(true)
  const [selectedAddress, setSelectedAddress] = useState<any>(null)
  const [activeKey, setActiveKey] = useState<string | null>("0");
  const [isShippingMethodDisabled, setIsShippingMethodDisabled] = useState(true);
  const [isPaymentMethodDisabled, setIsPaymentMethodDisabled] = useState(true);

  const handleNext = (key: string) => {
      setActiveKey(key);
  };

  const {isLoadingOrderAddress, isLoadingCartList, cartListData, isLoadingCartSummary, cartSummaryData } = useAppSelector((state)=> state.order)
  const { loginDetails } = useAppSelector((state:any) => state.auth);
  const {isLoadingUserAddress, userAddressData} = useAppSelector((state)=>state.account)

  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(cartListDataApi({user_id:loginDetails?.user?.id}))
    dispatch(cartSummaryDataApi({user_id: loginDetails?.user?.id}))
    dispatch(getUserAddress({user_id: loginDetails?.user?.id}))
  },[dispatch, loginDetails])

  useEffect(()=>{
    if(userAddressData?.data?.[0]){
      setOpenAddressForm(false)
      setSelectedAddress(userAddressData?.data?.[0])
    }
  },[userAddressData])

  const handleChooseAddress = ()=>{
    if(selectedAddress?.id){
      dispatch(updateOrderAddress({
        user_id:loginDetails?.user?.id,
        address_id:selectedAddress?.id
      })).unwrap().then(()=>{
        setIsShippingMethodDisabled(false)
        handleNext("1")
      }).catch((error:any)=>{
        console.log(error.message);
      })
    }else{
      toast.error("Select a address first.")
    }
  }

  const handleAfterAddAddress = () => {
      dispatch(getUserAddress({user_id: loginDetails?.user?.id})).unwrap().then(()=>{
        setOpenAddressForm(true)
      }).catch((error)=>{
        console.log(error.message);
      })
  }

  return {
    isLoadingCartList, 
    cartListData,
    isLoadingCartSummary, 
    cartSummaryData,
    isLoadingUserAddress,
    userAddressData,
    openAddressForm, 
    setOpenAddressForm,
    selectedAddress, 
    setSelectedAddress,
    handleChooseAddress,
    activeKey,
    setActiveKey,
    isShippingMethodDisabled, 
    setIsShippingMethodDisabled,
    isPaymentMethodDisabled, 
    setIsPaymentMethodDisabled,
    isLoadingOrderAddress,
    handleAfterAddAddress
  }
}

export default CheckoutController