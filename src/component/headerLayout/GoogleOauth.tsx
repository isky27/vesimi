import { GoogleLogin } from '@react-oauth/google';
import React from 'react'

const GoogleOauth = () => {

  return (
    <div className="mt-4 text-center">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const token = credentialResponse;
          // const decoded = jwt_decode(token);
          console.log("User info:", token); // { name, email, picture, ... }
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
}

export default GoogleOauth
