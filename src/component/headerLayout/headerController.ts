import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/redux.hooks";
import { useFormik } from "formik";
import * as Yup from "yup";
import { confirmPassSendPost, currencyChange, loginPost, logoutPost, resetPassSendCodePost, setOpenLoginPopup, setOpenSignPopup, signUpPost } from "store/auth/authDataSlice";
import { emailRegex, phoneRegex, priceRange } from "constant";
import { toast } from "react-toastify";

const HeaderController = () => {
  const [searchParams] = useSearchParams();
  const [searchInput,setSearchInput] = useState(searchParams.get("name") ?? "");
  const [isOpenResetPassEmail, setIsOpenResetPassEmail] = useState(false)
  const [isOpenResetPassCode, setIsOpenResetPassCode] = useState(false);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const {
    loginDetails,
    selectedCurrency,
    isOpenLoginPopup,
    isOpenSignupPopup
  } = useAppSelector((state: any) => state.auth);

  const { cartListData, isLoadingCartList } = useAppSelector((state: any) => state.order)

  const loginInitialValues = {
    email: "",
    password: ""
  };

  const signupInitialValues = {
    name: "",
    email_or_phone: "",
    password: "",
    passowrd_confirmation: ""
  };

  const resetPassEmailFormik = useFormik({
    initialValues: { email : ""},
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is required")
        .test(
          "email",
          "Invalid email",
          function (value) {
            return emailRegex.test(value);
          }
        )
    }),
    onSubmit: (values) => {
      handleResetPassSendCode(values);
    },
  });

  const loginFormik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is required")
        .test(
          "email-or-phone",
          "Invalid email or phone number",
          function (value) {
            return emailRegex.test(value);
          }
        ),
      password: Yup.string()
        .min(6, "Must be 6 characters or more")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  const confirmResetPassFormik = useFormik({
    initialValues: {
      verification_code:0,
      password: "",
      passowrd_confirmation: "",
    },
    validationSchema: Yup.object({
      verification_code: Yup.number().required("Verification code is required"),
      password: Yup.string()
        .min(6, "Must be 6 characters or more")
        .required("Password is required"),
      passowrd_confirmation: Yup.string()
        .oneOf([Yup.ref("password"), ""], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: (values) => {
      handleConfirmPassSendCode(values);
    },
  });

  const handleOpenLoginPopup = (state: boolean) => {
    dispatch(setOpenLoginPopup(state))
  }

  const handleOpenSignupPopup = (state: boolean) => {
    dispatch(setOpenSignPopup(state))
  }
  
  const signupFormik = useFormik({
    initialValues: {signupInitialValues},
    validationSchema: Yup.object({
      name : Yup.string().required("Name is required"),
      email_or_phone: Yup.string()
      .required("Email or phone is required")
      .test("email-or-phone", "Invalid email", function (value) {
        return emailRegex.test(value);
      }),
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

  const handleResetPassSendCode = (values: any) => {
    let login_by = "";
    if (values.email && emailRegex.test(values.email)) {
      login_by = "email";
    }
    if (values.email && phoneRegex.test(values.email)) {
      login_by = "phone";
    }
    dispatch(
      resetPassSendCodePost({
        payload: {
          email_or_phone: values.email,
          send_code_by: login_by,
        },
        openPopup: setIsOpenResetPassCode,
        closePopup: setIsOpenResetPassEmail
      })
    );
  };

  const handleConfirmPassSendCode = (values: any) => {
     dispatch(
       confirmPassSendPost({
           verification_code: values?.verification_code,
           password: values.password,
       })
     ).unwrap().then(()=>{
         setIsOpenResetPassCode(false)
         setIsOpenResetPassEmail(false)
         handleOpenLoginPopup(false);
         toast.success("Password reset successfully.")
     }).catch((error)=>{
          toast.error(error.message[0]);
          throw new Error(error);
     })
  };

  const handleLogin = (values: any) => {
    let login_by= ""
    if (values.email && emailRegex.test(values.email)) {
      login_by= "email"
    }
    if (values.email && phoneRegex.test(values.email)) {
      login_by = "phone"
    }
    dispatch(loginPost({
      payload: {
        "email": values.email,
        "password": values.password,
        "login_by": login_by
      },
      closePopup: handleOpenLoginPopup
    }))
  }

  const handleSignup = (values: any) => {
    let register_by= ""
    if (values.email_or_phone && emailRegex.test(values.email_or_phone)) {
      register_by= "email"
    }
    if (values.email_or_phone && phoneRegex.test(values.email_or_phone)) {
      register_by =  "phone"
    }

    dispatch(signUpPost({
      payload: {
        "name": values.name,
        "email_or_phone": values.email_or_phone,
        "password": values.password,
        "passowrd_confirmation": values.passowrd_confirmation,
        "register_by":register_by,
      },
      closePopup: handleOpenSignupPopup
    }))
  }

  const handleCurrencyChange=(countryDetails:any)=>{
    dispatch(currencyChange(countryDetails?.currency))
  };

  const handleSearch= (e:any) => {
    e.preventDefault();
    if(searchInput){
      navigate(`/search/category/6?min=${priceRange[0]}&max=${priceRange[1]}&name=${searchInput}`)
    }
  }

  useEffect(()=>{
    if(!searchParams.get("name")){
      setSearchInput("")
    }
  },[searchParams])

  const handleLogout = () =>{
    dispatch(logoutPost())
    navigate("/")
  }

  const handleCart = () =>{
    if (loginDetails?.access_token) {
     navigate("/cart")
    }else{
     dispatch(setOpenLoginPopup(true))
    }
  }

  return {
    isOpenLoginPopup,
    handleOpenLoginPopup,
    isOpenSignupPopup,
    handleOpenSignupPopup,
    navigate,
    loginFormik,
    signupFormik,
    loginDetails,
    handleLogout,
    searchInput,
    setSearchInput,
    handleSearch,
    handleCurrencyChange,
    selectedCurrency,
    cartListData,
    isLoadingCartList,
    handleCart,
    isOpenResetPassEmail,
    setIsOpenResetPassEmail,
    resetPassEmailFormik,
    isOpenResetPassCode,
    confirmResetPassFormik,
  };
};

export default HeaderController;
