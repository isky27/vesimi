/**
 * Authentication State Interface
 */


export interface AuthDataInterface {
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  isAuthLoginLoading: boolean;
  message: string | null;
  loginDetails: any | null;
  selectedCurrency: string;
  isOpenLoginPopup: boolean;
  isOpenSignupPopup: boolean;
}

