// Import necessary assets
import moment from "moment";
import { AxiosError } from "axios";
import { imageURL } from "./InterceptorApi";

//Get value from local storage or default to an empty string
export const getLocalStorage = (key: string) => {
  const localStorageData = localStorage.getItem(key);
  if (!localStorageData) {
    return "";
  }
  return JSON.parse(localStorageData);
};

export const currentYear = 2023;

// Function to handle error responses
export const getErrorMessage = (error: AxiosError): any => {
  const errorData: any = error?.response?.data;
  const errorMessage = errorData?.message
    ? errorData.message.toString()
    : "Something went wrong!";
  return { code: error?.code, message: errorMessage };
};

// Helper function to get token header
export const getTokenHeader = () => {
  const userdata: any = getLocalStorage("loginDetails");

  let token: string = userdata?.token;

  return {
    headers: { Authorization: `Bearer ${token}` },

  };
};

export const getImageUrl = (imageName: string) => {
  return imageURL + imageName
}

export const formatDate = (date: any) => {
  return moment(date).format("DD MMM YYYY");
}

// Function to download a file with fileUrl
export const downloadFile = async(fileUrl:string, fileName:string) => {
  try {   
      // Create a download link with appropriate filename
      const link = document.createElement('a');
      link.href = fileUrl;
      link.setAttribute('download', fileName);
      // Trigger the download in the browser
      link.click();
      link.remove()
    } catch (error) {
    }
}

// Function to prevent spaces in input for certain fields.
export const removeSpaceOnly = (e: any) => {
  const inputValue = e.target.value;
  const key = e.keyCode ? e.keyCode : e.which;

  // Allowing spaces only if the input value is not empty and not starting with a space
  if (inputValue.length === 0 && key === 32) {
    e.preventDefault();
  }
};

