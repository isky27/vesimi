import axios from 'axios'

// Login API Call
const authLoginPost = async (userData: any): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = await axios.post("auth/login", userData);
    return response;

  } catch (error: any) {
    throw error;
  }
};

const authSignUpPost = async (userData: any): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = await axios.post("auth/signup", userData);
    return response;

  } catch (error: any) {
    throw error;
  }
};

const resetPassSendCodeApi = async (userData: any): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = await axios.post("auth/password/forget_request", userData);
    return response;
  } catch (error: any) {
    throw error;
  }
};

const confirmPassCodeApi=  async (userData: any): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = await axios.post("auth/password/confirm_reset", userData);
    return response;
  } catch (error: any) {
    throw error;
  }
};

const authService = {
  authLoginPost,
  authSignUpPost,
  resetPassSendCodeApi,
  confirmPassCodeApi
};

export default authService;
