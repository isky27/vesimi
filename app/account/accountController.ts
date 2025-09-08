'use client';

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/redux.hooks";
import { getUserAddress } from "../store/auth/authDataSlice";

const AccountController = () => {
  const dispatch = useAppDispatch();
  const { loginDetails, isLoadingUserAddress, userAddressData } = useAppSelector((state: any) => state.auth);

  useEffect(() => {
    dispatch(getUserAddress());
  }, [dispatch]);

  return {
    loginDetails,
    isLoadingUserAddress,
    userAddressData,
  };
};

export default AccountController;
