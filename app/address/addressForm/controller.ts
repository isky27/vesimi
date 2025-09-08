import { useFormik } from "formik";
import { useEffect } from "react";
import { getCities, getCountries, getStates, addAddress, getSingleAddress, editAddress } from "../../../store/account/accountDataSlice";
import { useAppDispatch, useAppSelector } from "../../../store/redux.hooks";
import * as Yup from "yup";
import { phoneRegex } from "../../../constant";

const AddressController = ({ isEdit, handleAfterSuccess }: any) => {

  const { countriesData, statesData, citiesData, isLoadingUserAddress, singleAddressDetails } = useAppSelector((state) => state.account)
  const { loginDetails } = useAppSelector((state: any) => state.auth);
  const dispatch = useAppDispatch();

  const addressInitialValues = {
    name: "",
    phone: "",
    address: "",
    country: null,
    state: null,
    city: null,
    zip_code: ""
  };

  const addressFormik: any = useFormik({
    initialValues: addressInitialValues,
    validationSchema: Yup.object({
      name: Yup.string(),
      phone: Yup.string()
        .required("Phone number is required")
        .test("phone", "Invalid phone number", function (value) {
          return phoneRegex.test(value);
        }),
      address: Yup.string()
        .required("Address is required"),
      country: Yup.number()
        .required("Country is required"),
      state: Yup.number()
        .required("State is required"),
      city: Yup.number()
        .required("City is required"),
      zip_code: Yup.string().required("Zip code is required"),
    }),
    onSubmit: (values: any, { resetForm }) => {
      const payload = {
        "user_id": loginDetails?.user?.id,
        "address": values?.address,
        "country_id": values?.country,
        "state_id": values?.state,
        "city_id": values?.city,
        "postal_code": values?.zip_code,
        "phone": values?.phone
      }
      dispatch(isEdit ? editAddress({ ...payload, id: isEdit }) :
        addAddress(payload)).unwrap().then(() => {
          handleAfterSuccess()
          resetForm();
        }).catch((error) => {
          console.log(error?.message);
        })
    },
  });

  useEffect(() => {
    if (isEdit) {
      dispatch(getSingleAddress({ addressId: isEdit }))
    }
  }, [dispatch, isEdit]);

  useEffect(() => {
    if (singleAddressDetails?.data) {
      addressFormik.setFieldValue("name", singleAddressDetails?.data?.name);
      addressFormik.setFieldValue("phone", singleAddressDetails?.data?.phone)
      addressFormik.setFieldValue("address", singleAddressDetails?.data?.address)
      addressFormik.setFieldValue("country", singleAddressDetails?.data?.country_id);
      addressFormik.setFieldValue("state", singleAddressDetails?.data?.state_id);
      addressFormik.setFieldValue("city", singleAddressDetails?.data?.city_id);
      addressFormik.setFieldValue("zip_code", singleAddressDetails?.data?.postal_code);
    }
  }, [singleAddressDetails])

  useEffect(() => {
    if (addressFormik?.values?.country) {
      dispatch(getStates(addressFormik?.values?.country))
    }
  }, [dispatch, addressFormik?.values?.country])

  useEffect(() => {
    if (addressFormik?.values?.state) {
      dispatch(getCities(addressFormik?.values?.state))
    }
  }, [dispatch, addressFormik?.values?.state])

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  return { addressFormik, countriesData, statesData, citiesData, isLoadingUserAddress }
}

export default AddressController