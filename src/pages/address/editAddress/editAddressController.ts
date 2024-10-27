import { phoneRegex } from "constant";
import { useFormik } from "formik";
import { useEffect } from "react";
import { getCities, getCountries, getStates } from "store/account/accountDataSlice";
import { useAppDispatch, useAppSelector } from "store/redux.hooks"
import * as Yup from "yup";

const EditAddressController = () => {

  const { countriesData, statesData } = useAppSelector((state) => state.account)
  const dispatch = useAppDispatch();


  const addressInitialValues = {
    name: "",
    company: "",
    phone: "",
    fax: "",
    addressLine1: "",
    addressLine2: "",
    country: "",
    state: "",
    city: "",
    zip_code: ""
  };

  const addressFormik = useFormik({
    initialValues: addressInitialValues,
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      phone: Yup.string()
        .required("Phone number is required")
        .test("phone", "Invalid phone number", function (value) {
          return phoneRegex.test(value);
        }),
      addressLine1: Yup.string()
        .required("Address is required"),
      country: Yup.string()
        .required("Country is required"),
      state: Yup.string()
        .required("State is required"),
      city: Yup.string()
        .required("City is required"),
      zip_code: Yup.string()
        .required("Zip code is required"),
    }),
    onSubmit: (values) => {
      // handleSignup(values);
    },
  });


  useEffect(() => {
    dispatch(getCountries())
    dispatch(getStates())
    dispatch(getCities())
  }, [dispatch])

  return { addressFormik, countriesData, statesData }
}

export default EditAddressController