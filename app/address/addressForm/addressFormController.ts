'use client';

import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../store/redux.hooks";
import { addUserAddress, getCities, getCountries, getStates, updateUserAddress } from "../../store/auth/authDataSlice";

const AddressController = ({ isEdit, handleAfterSuccess }: any) => {
  const dispatch = useAppDispatch();
  const { 
    countriesData,
    statesData,
    citiesData,
    isLoadingUserAddress,
    userAddressData
   } = useAppSelector((state: any) => state.auth);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const addressFormik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      address: "",
      country: "",
      state: "",
      city: "",
      zip_code: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      phone: Yup.string().required("Phone is required"),
      address: Yup.string().required("Address is required"),
      country: Yup.string().required("Country is required"),
      state: Yup.string().required("State is required"),
      city: Yup.string().required("City is required"),
      zip_code: Yup.string().required("Zip code is required"),
    }),
    onSubmit: (values) => {
      if (isEdit) {
        dispatch(updateUserAddress({ payload: values, callback: handleAfterSuccess }));
      } else {
        dispatch(addUserAddress({ payload: values, callback: handleAfterSuccess }));
      }
    },
  });

  useEffect(() => {
    if (addressFormik.values.country) {
      dispatch(getStates({ country_id: addressFormik.values.country }));
    }
  }, [addressFormik.values.country, dispatch]);

  useEffect(() => {
    if (addressFormik.values.state) {
      dispatch(getCities({ state_id: addressFormik.values.state }));
    }
  }, [addressFormik.values.state, dispatch]);

  return {
    addressFormik,
    countriesData,
    statesData,
    citiesData,
    isLoadingUserAddress
  };
};

export default AddressController;
