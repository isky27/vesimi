// Import necessary assets
import moment from "moment";
import { AxiosError } from "axios";
import { imageURL } from "./InterceptorApi";
import { toast } from "react-toastify";
import { countryOptions, currencyPrice, priceRange } from "constant";
import store from 'store'; 

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
    errorData && toast.error(errorMessage);
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

export const isCancelRequest = (res: any) => {
  return res?.code === "ERR_CANCELED" || res === "canceled";
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

export const getCategoryUrl=(categId:number | string)=>{
  return `/category/${categId}?sub-category=${categId}&min=${priceRange[0]}&max=${priceRange[1]}`
};

export const getPrice = (price: any) =>{
  const selectedPrice:string = store?.getState()?.auth?.selectedCurrency || "INR"
  return countryOptions[selectedPrice]["symbol"]+ (Math.round(Number(extractNumber(price))/currencyPrice[selectedPrice] * 100) / 100)
}

export function extractNumber(text: string): number {
  // Remove all non-numeric characters except for decimal points and commas
  let cleanedText = text?.replace(/[^0-9.,]/g, '');
  
  // Remove commas (used in Indian currency format)
  cleanedText = cleanedText?.replace(/,/g, '');
  
  // Convert the cleaned string to a float
  const number = parseFloat(cleanedText);
  
  // Return the extracted number
  return isNaN(number) ? 0 : number;
}

