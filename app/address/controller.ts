import { useEffect, useState } from "react"
import { deleteAddress, getUserAddress } from "../../store/account/accountDataSlice";
import { useAppDispatch, useAppSelector } from "../../store/redux.hooks";

const AddressController = () =>{

    const [isOpenDeletePopup, setIsOPenDeletePopup] = useState({isOpen:false, addressId : ""})
    const { loginDetails } = useAppSelector((state: any) => state.auth);
    const {isLoadingUserAddress, userAddressData, isLoadingDeleteAddress} = useAppSelector((state)=>state.account)
    
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(getUserAddress({user_id: loginDetails?.user?.id}))
    },[dispatch, loginDetails])

    const handleDeleteAddress = () =>{
        dispatch(deleteAddress({addressId: isOpenDeletePopup?.addressId})).unwrap().then(()=>{
            dispatch(getUserAddress({user_id: loginDetails?.user?.id}))
        }).catch((error)=>{
            console.log(error.message);
        })
        setIsOPenDeletePopup({isOpen:false, addressId :""})
    }


    return {
        isLoadingUserAddress, 
        userAddressData,
        loginDetails,
        isOpenDeletePopup, 
        setIsOPenDeletePopup,
        handleDeleteAddress,
        isLoadingDeleteAddress
    }
}

export default AddressController