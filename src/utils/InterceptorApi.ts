import axios from "axios";
export const baseURL = process.env.REACT_APP_BASE_URL;
export const imageURL = process.env.REACT_APP_BASE_URL_ASSET;
// const CryptoJS = require("crypto-js");

/**
 * Define interceptor to handle api resoponse and set header value
 */
const Interceptors = () => {

  axios.interceptors.request.use(
    function (config) {
      return { ...config, baseURL: baseURL };
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
      return Promise.reject(error);
    }
  );
};
export default Interceptors;
