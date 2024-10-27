import { useEffect, useState } from "react"
import { getUserAddress } from "store/account/accountDataSlice";
import { useAppDispatch, useAppSelector } from "store/redux.hooks";

const AddressController = () =>{

    const [isOpenDeletePopup, setIsOPenDeletePopup] = useState({isOpen:false, addressId : ""})
    const { loginDetails } = useAppSelector((state: any) => state.auth);
    const {isLoadingUserAddress, userAddressData} = useAppSelector((state)=>state.account)
    
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(getUserAddress({user_id: loginDetails?.user?.id}))
    },[dispatch, loginDetails])

    return {
        isLoadingUserAddress, 
        userAddressData,
        loginDetails,
        isOpenDeletePopup, 
        setIsOPenDeletePopup
    }
}

export default AddressController