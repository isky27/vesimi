import axios from "axios";
import { logoutPost } from "store/auth/authDataSlice";
export const baseURL = process.env.REACT_APP_BASE_URL;
export const imageURL = process.env.REACT_APP_BASE_URL_ASSET;
// const CryptoJS = require("crypto-js");
const currentExecutingRequests: any = {};

/**
 * Define interceptor to handle api resoponse and set header value
 */
const Interceptors = (store:any) => {

  axios.interceptors.request.use(function (req:any) {

      let originalRequest: any = req;
      if (!originalRequest?.headers?.deniedCancle && currentExecutingRequests[originalRequest.url]) {
          const source = currentExecutingRequests[originalRequest.url];
          delete currentExecutingRequests[originalRequest.url];
          source.cancel();
      }

      return { ...originalRequest, baseURL: baseURL };
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  axios.interceptors.response.use(
    (response) => {
      if (response?.data) {
        // let bytes = CryptoJS.AES.decrypt(
        //   response?.data?.data,
        //   process.env.REACT_APP_EN_KEY
        // );
        // let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        // console.log(decryptedData, "response");
        // return { ...response, data: { ...response.data, data: decryptedData } };
        return response?.data;
      } else {
        return response;
      }
    },
    (error) => {
      if (error?.response?.data?.authorized === false) {

        for (const [key] of Object.entries(currentExecutingRequests)) {
            const source = currentExecutingRequests[key];
            delete currentExecutingRequests[key];
            source.cancel();
        }

        store.dispatch(logoutPost())
    }
      return Promise.reject(error);
    }
  );
};
export default Interceptors;
