import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getHeaderMenu } from "store/home/home.slice";
import { useAppDispatch, useAppSelector } from "store/redux.hooks";
import { useFormik } from "formik";
import * as Yup from "yup";

const HeaderController = () => {
  const [isOpenLoginPopup, setIsOpenLoginPopup] = useState(false);
  const [isOpenSignupPopup, setIsOpenSignupPopup] = useState(false);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { isLoadingMenuBar, headerMenuData } = useAppSelector(
    (state: any) => state.home
  );

  const loginInitialValues = {
    email: "",
    password: ""
  };

  const loginFormik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string()
        .min(6, "Must be 6 characters or more")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  const handleLogin = (values:any) =>{
    console.log(values, "dkuhdujkhdw")
  }


  useEffect(() => {
    dispatch(getHeaderMenu());
  }, [dispatch]);

  return {
    isOpenLoginPopup,
    setIsOpenLoginPopup,
    isOpenSignupPopup,
    setIsOpenSignupPopup,
    isLoadingMenuBar,
    navigate,
    loginFormik,
  };
};

export default HeaderController;
