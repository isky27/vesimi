import { useAppSelector } from '../../store/redux.hooks';

/**
 * 
 * @returns all controllers for login page.
 */

const LoginFormController = () => {

    // Import data from auth selector
    const { isAuthLoginLoading } = useAppSelector((state:any) => state.auth);



    // All the state and function return to LoginView
    return {
    }

}

export default LoginFormController
