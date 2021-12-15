import React from 'react';
import { Navigate } from 'react-router-dom'

function Logout(){
    localStorage.removeItem("jwt");
    return <Navigate to='/' />
}

export default Logout