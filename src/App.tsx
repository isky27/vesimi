import { HelmetProvider } from "react-helmet-async";
import Loader from "./component/Loader";
import CustomRoute from "./routes/routs";
import { useAppDispatch, useAppSelector } from "./store/redux.hooks";
import { useGoogleOneTapLogin } from "@react-oauth/google";
import { setOpenLoginPopup, setOpenSignPopup, socialLoginPost } from "store/auth/authDataSlice";

const App = () => {
  const { isAuthLoginLoading } = useAppSelector((state: any) => state.auth);

  const dispatch = useAppDispatch();

  const handleOpenLoginPopup = (state: boolean) => {
    dispatch(setOpenLoginPopup(state));
    dispatch(setOpenSignPopup(state));
  };

  useGoogleOneTapLogin({
    onSuccess: (credentialResponse) => {
      dispatch(
        socialLoginPost({
          payload: {
            social_provider: "google",
            access_token: credentialResponse.credential,
            provider: " google",
          },
          closePopup: handleOpenLoginPopup,
        })
      );
    },
    onError: () => {
      console.log("One Tap Login Failed");
    }
  });

  return (
    <HelmetProvider>
      <Loader isLoading={[isAuthLoginLoading]} />
      <CustomRoute />
    </HelmetProvider>
  );
};

export default App;
