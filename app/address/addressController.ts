'use client';

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/redux.hooks";
import { deleteUserAddress, getUserAddress } from "@/store/auth/authDataSlice";

const AddressController = () => {
  const dispatch = useAppDispatch();
  const { userAddressData, isLoadingUserAddress } = useAppSelector((state: any) => state.auth);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [deleteAddressId, setDeleteAddressId] = useState(null);

  const handleDeleteModal = (id: any = null) => {
    setDeleteAddressId(id);
    setIsDeleteModal(!isDeleteModal);
  };

  const handleDeleteAddress = () => {
    if (deleteAddressId) {
      dispatch(deleteUserAddress({ payload: { id: deleteAddressId }, callback: () => handleDeleteModal() }));
    }
  };

  useEffect(() => {
    dispatch(getUserAddress());
  }, [dispatch]);

  return {
    userAddressData,
    isLoadingUserAddress,
    isDeleteModal,
    handleDeleteModal,
    handleDeleteAddress,
  };
};

export default AddressController;
