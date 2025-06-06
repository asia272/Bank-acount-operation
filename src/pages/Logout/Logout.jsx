import React from 'react'
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let logOut = () => {
        dispatch(logout())
        navigate('/')
    }

    return (
        <button
            onClick={logOut}>
            Log out
        </button>
    )
}

export default Logout
