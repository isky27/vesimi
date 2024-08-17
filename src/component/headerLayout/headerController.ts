import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getHeaderMenu } from "store/home/home.slice";
import { useAppDispatch, useAppSelector } from "store/redux.hooks";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginPost, signUpPost } from "store/auth/authDataSlice";

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

  const signupInitialValues = {
    name: "",
    email: "",
    password: "",
    passowrd_confirmation: ""
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

  const signupFormik = useFormik({
    initialValues: signupInitialValues,
    validationSchema: Yup.object({
      name : Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string()
        .min(6, "Must be 6 characters or more")
        .required("Password is required"),
      passowrd_confirmation: Yup.string()
        .oneOf([Yup.ref('password'), ''], 'Passwords must match')
      .required("Confirm password is required"),
    }),
    onSubmit: (values) => {
      handleSignup(values);
    },
  });

  const handleLogin = (values: any) => {
    dispatch(loginPost({
      "email": values.email,
      "password": values.password,
      "login_by": "browser"
    }))
  }

  const handleSignup = (values: any) => {
    dispatch(signUpPost({
      "name": values.name,
      "email": values.email,
      "password": values.password,
      "passowrd_confirmation": values.passowrd_confirmation,
      "login_by": "browser"
    }))
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
    signupFormik
  };
};

export default HeaderController;
