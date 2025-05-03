import { GoogleLogin } from '@react-oauth/google';
import React from 'react'
import { setOpenLoginPopup, setOpenSignPopup, socialLoginPost } from 'store/auth/authDataSlice';
import { useAppDispatch } from 'store/redux.hooks';

const GoogleOauth = () => {

    const dispatch = useAppDispatch()

     const handleOpenLoginPopup = (state: boolean) => {
        dispatch(setOpenLoginPopup(state));
        dispatch(setOpenSignPopup(state))
      }

  return (
    <div className="mt-4 text-center">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
           dispatch(socialLoginPost({
                payload: {
                    social_provider : "google",
                    access_token : credentialResponse.credential,
                    provider :" google"
                },
                closePopup: handleOpenLoginPopup
              }))
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
}

export default GoogleOauth
