import React from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Authguard(props) {
    const isAuth = useSelector((s) => s.user.currentUser) !== null;

    if(isAuth){
        return props.children;
        } else{
            return <Navigate to="/loginpage" />
        }
    }
