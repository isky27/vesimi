import axios from 'axios'

// Login API Call
const authLoginPost = async (userData: any): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = (await axios.post("login", userData)).data;
    // If login is successful, save login details and set token in axios headers
    if (response?.status) {
      localStorage.setItem("loginDetails", JSON.stringify(response?.data));
    }
    return response;

  } catch (error: any) {
    throw error;
  }
};

const authService = {
  authLoginPost
};

export default authService;
