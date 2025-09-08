'use client';

import { useState } from "react";
import { useAppSelector } from "../../store/redux.hooks";

const EditController = () => {
  const [editEmail, setEditEmail] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const { loginDetails } = useAppSelector((state:any) => state.auth);
  const [user, setUser] = useState({
    email: '',
    currentPassword: '',
    password: '',
    confirmPassword: '',
  });

  return {
    editEmail,
    setEditEmail,
    changePassword,
    setChangePassword,
    loginDetails,
    user,
    setUser
  };
};

export default EditController;
