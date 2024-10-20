import axios from 'axios'

// Login API Call
const getAddressApi = async (userData: any, userToken: { headers: { Authorization: string } }): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = await axios.get(`user/shipping/address/${userData?.user_id}`, userToken);
    return response;
  } catch (error: any) {
    throw error;
  }
};

const addAddressApi = async (userData: any, userToken: { headers: { Authorization: string } }): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = await axios.post(`user/shipping/create`, userData, userToken);
    return response;
  } catch (error: any) {
    throw error;
  }
};

const getCountriesApi = async ( userToken: { headers: { Authorization: string } }): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = await axios.get("countries", userToken);
    return response;
  } catch (error: any) {
    throw error;
  }
};

const getStatesApi = async ( userToken: { headers: { Authorization: string } }): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = await axios.get("states", userToken);
    return response;
  } catch (error: any) {
    throw error;
  }
};

const getCitiesApi = async ( userToken: { headers: { Authorization: string } }): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = await axios.get("cities", userToken);
    return response;
  } catch (error: any) {
    throw error;
  }
};

const accountService = {
  getAddressApi,
  getCountriesApi,
  getStatesApi,
  getCitiesApi,
  addAddressApi
};

export default accountService;
