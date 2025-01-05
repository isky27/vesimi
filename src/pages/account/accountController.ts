import { useEffect } from "react";
import { getUserAddress } from "store/account/accountDataSlice";
import { useAppDispatch, useAppSelector } from "store/redux.hooks";

const AccountController = () => {
    const dispatch = useAppDispatch()
    const { loginDetails } = useAppSelector((state: any) => state.auth);
    const {isLoadingUserAddress, userAddressData} = useAppSelector((state)=>state.account)

    useEffect(()=>{
        dispatch(getUserAddress({user_id: loginDetails?.user?.id}))
    },[dispatch, loginDetails])

    return {
        loginDetails,
        isLoadingUserAddress, 
        userAddressData
    }
}

export default AccountController