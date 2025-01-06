import { phoneRegex } from "constant";
import { useFormik } from "formik";
import { useEffect } from "react";
import { getCities, getCountries, getStates, addAddress } from "store/account/accountDataSlice";
import { useAppDispatch, useAppSelector } from "store/redux.hooks"
import * as Yup from "yup";

const AddressController = ({isEdit, handleAfterSuccess }: any) => {

  const { countriesData, statesData, citiesData } = useAppSelector((state) => state.account)
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
      name: Yup.string().required("Name is required"),
      phone: Yup.string()
        .required("Phone number is required")
        .test("phone", "Invalid phone number", function (value) {
          return phoneRegex.test(value);
        }),
      address: Yup.string()
        .required("Address is required"),
      country: Yup.object().shape({
        code: Yup.number(),
        label: Yup.string(),
      }).required("Country is required"),
      state: Yup.object().shape({
        code: Yup.number(),
        label: Yup.string(),
      }).required("State is required"),
      city: Yup.object().shape({
        code: Yup.number(),
        label: Yup.string(),
      }).required("City is required"),
      zip_code: Yup.string().required("Zip code is required"),
    }),
    onSubmit: (values: any) => {
      dispatch(addAddress(
        {
          "user_id": loginDetails?.user?.id,
          "address": values?.address,
          "country_id": values?.country?.value,
          "state_id": values?.state?.value,
          "city_id": values?.city?.value,
          "postal_code": values?.zip_code,
          "phone": values?.phone
        })).unwrap().then(() => {
          handleAfterSuccess()
        }).catch((error) => {
          console.log(error?.message);
        })
    },
  });

  useEffect(() => {
    if(isEdit){
      
    }
  }, [isEdit]);

  useEffect(() => {
    if (addressFormik?.values?.country?.value) {
      dispatch(getStates(addressFormik?.values?.country?.value))
    }
  }, [dispatch, addressFormik?.values?.country])

  useEffect(() => {
    if (addressFormik?.values?.state?.value) {
      dispatch(getCities(addressFormik?.values?.state?.value))
    }
  }, [dispatch, addressFormik?.values?.state])

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  return { addressFormik, countriesData, statesData, citiesData }
}

export default AddressController