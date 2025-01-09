import { emailRegex } from "constant";
import { useFormik } from "formik";
import { newsLetterSubscribe } from "store/auth/authDataSlice";
import { useAppDispatch, useAppSelector } from "store/redux.hooks";
import * as Yup from "yup";

const FooterController = () => {
  const dispatch = useAppDispatch();
  const { loginDetails, isLoadingNewsSubscribe } = useAppSelector(
    (state) => state.auth
  );

  const handleSubscribeNews = (values:any) =>{
     dispatch(newsLetterSubscribe({
        email: values.email
     }));
  }

    const subscribeNewsFormik = useFormik({
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
        handleSubscribeNews(values);
      },
    });
  

  return {
    dispatch,
    loginDetails,
    isLoadingNewsSubscribe,
    subscribeNewsFormik,
  };
};

export default FooterController;
