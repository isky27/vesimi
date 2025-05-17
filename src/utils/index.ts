// Import necessary assets
import moment from "moment";
import axios, { AxiosError } from "axios";
import { assetURL } from "./InterceptorApi";
import { toast } from "react-toastify";
import { countryOptions, currencyPrice, sizeConst } from "../constant";

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

  let token: string = userdata?.access_token;

  return {
    headers: { Authorization: `Bearer ${token}` },

  };
};

export const getImageUrl = (imageName: string) => {
  return assetURL + imageName
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
  return `/category/${categId}`
};

function formatNumber(number: any, countryCode:any) {
  let locale = "en-US"; // Default

  if (countryCode === "IND") {
    locale = "en-IN";
  } else if (countryCode === "UAE") {
    locale = "en-AE";
  } else if (countryCode === "US") {
    locale = "en-US";
  }

  return new Intl.NumberFormat(locale, {
    maximumFractionDigits: 2,
  }).format(number);
}

export const getPrice = (price: any, selectedPrice: string = "INR") => {
  const convertedPrice = Number(extractNumber(price)) / currencyPrice[selectedPrice];
  return countryOptions[selectedPrice]["symbol"] + formatNumber(convertedPrice.toFixed(2), countryOptions[selectedPrice]["symbol"]);
};

export const getVarient = (entries:any) => {
  return entries.map((obj: any) => Object.values(obj)[0]?.toString().split(" ").join(""))
  .filter((value: any) => value !== undefined && value !== null && value !== '')
  .join('-');
}

export function extractNumber(input: string | number): number {
  // If the input is already a number, return it as is
  if (typeof input === "number") {
    return input;
  }
  // Remove all non-numeric characters except for decimal points and commas
  let cleanedText = input?.replace(/[^0-9.,]/g, "");

  // Remove commas (used in Indian currency format)
  cleanedText = cleanedText?.replace(/,/g, "");

  // Convert the cleaned string to a float
  const number = parseFloat(cleanedText);

  // Return the extracted number
  return isNaN(number) ? 0 : number;
}

export const getOrignalPrice = (price:any, discount:any, selectedCurrency:any) =>{
 return getPrice(extractNumber(price)*100 / (100-extractNumber(discount)), selectedCurrency)
}

export const normalizeAndSortSizes = (inputSizes: string[]): string[] => {
  const sizeOrder = sizeConst.reduce(
    (map: Record<string, number>, size, index) => {
      map[size.toUpperCase()] = index;
      return map;
    },
    {}
  );

  return inputSizes
    .map((size) => size.toUpperCase())
    .sort((a, b) => {
      const aOrder = sizeOrder[a] !== undefined ? sizeOrder[a] : Infinity;
      const bOrder = sizeOrder[b] !== undefined ? sizeOrder[b] : Infinity;
      return aOrder - bOrder;
    });
};

export const normalizedList = (list: any) => {
  return Array.isArray(list) ? list : [];
};

export const getRequest = async (apiUrl: string) => {
  try {
    const response = await axios.get(apiUrl);
    return response?.data;
  } catch (error: any) {
    throw error;
  }
};