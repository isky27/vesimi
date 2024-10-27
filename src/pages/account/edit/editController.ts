import { useState } from "react"
import { useParams } from "react-router-dom"
import { useAppSelector } from "store/redux.hooks";

interface User {
    email:string,
    currentPassword:string,
    password:string,
    confirmPassword: string
}

const EditController = () => {

    const {isChangePassword} = useParams()

    const [editEmail, setEditEmail] = useState( false)

    const [user, setUser] = useState<User>()

    const [changePassword, setChangePassword] = useState<any>(isChangePassword === "passChng")

    const { loginDetails } = useAppSelector((state: any) => state.auth);

    return {
        editEmail, setEditEmail,
        changePassword, setChangePassword,
        loginDetails,
        user,setUser
    }
}

export default EditController