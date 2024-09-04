import { useAppSelector } from "store/redux.hooks";

const AccountController = () => {

    const { loginDetails } = useAppSelector((state) => state.auth);

    return {
        loginDetails
    }
}

export default AccountController