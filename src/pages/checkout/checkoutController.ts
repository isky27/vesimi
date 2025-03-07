import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getUserAddress } from "store/account/accountDataSlice";
import { cartListDataApi, cartSummaryDataApi, orderSaveaApi, paymentWithRazorPayApi, updateOrderAddress } from "store/order/orderSlice";
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

  const {isLoadingOrderAddress, isLoadingCartList, cartListData, isLoadingCartSummary, cartSummaryData, isLoadingSaveOrder } = useAppSelector((state)=> state.order)
  const { loginDetails } = useAppSelector((state:any) => state.auth);
  const {isLoadingUserAddress, userAddressData} = useAppSelector((state)=>state.account)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  
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
      dispatch(
        updateOrderAddress({
          addressPayload: {
            user_id: loginDetails?.user?.id,
            address_id: selectedAddress?.id,
          },
          shippingPayload: {
            user_id: loginDetails?.user?.id,
            city_id: selectedAddress?.city_id,
          },
        })
      ).unwrap()
        .then(() => {
          setIsShippingMethodDisabled(false);
          handleNext("1");
        })
        .catch((error: any) => {
          console.log(error.message);
          toast.error("Something went wrong. Please try again.");
        });
    }else{
      toast.error("Select a address first.")
    }
  }

  const handleAfterAddAddress = () => {
      dispatch(getUserAddress({user_id: loginDetails?.user?.id})).unwrap().then(()=>{
        setOpenAddressForm(false)
      }).catch((error)=>{
        console.log(error.message);
      })
  }

  const handleSaveOrder = () => {
    dispatch(
      paymentWithRazorPayApi({
        payment_type: "cart_payment",
        combined_order_id: "19",
        user_id: "8",
        amount: "100",
      })
    ).then(() => {
      dispatch(
        paymentWithRazorPayApi({
          payment_type: "cart_payment",
          combined_order_id: "19",
          user_id: "8",
          amount: "100",
        })
      );
      navigate("/");
    });
  };

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
    handleAfterAddAddress,
    handleSaveOrder, isLoadingSaveOrder
  }
}

export default CheckoutController