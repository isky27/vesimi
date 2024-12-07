import axios from 'axios'

// Login API Call
const getAddressApi = async (userData: any, userToken: { headers: { Authorization: string } }): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = await axios.get(`user/shipping/address?id=${userData?.user_id}`, userToken);
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

const deleteAddressApi = async (userData: any, userToken: { headers: { Authorization: string } }): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = await axios.get(`user/shipping/delete/${userData?.addressId}`, userToken);
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

const getStatesApi = async (countryId:number, userToken: { headers: { Authorization: string } }): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = await axios.get(`states-by-country/${countryId}`, userToken);
    return response;
  } catch (error: any) {
    throw error;
  }
};

const getCitiesApi = async (stateId:number, userToken: { headers: { Authorization: string } }): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = await axios.get(`cities-by-state/${stateId}`, userToken);
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
  addAddressApi,
  deleteAddressApi
};

export default accountService;
