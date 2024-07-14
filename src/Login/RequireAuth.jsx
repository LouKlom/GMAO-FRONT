import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export default function RequireAuth() {
    const navigate = useNavigate();
    
    // Vérification si token existe
    const isAuthenticated = () => {
        return localStorage.getItem('access_token') !== null;
    };
 
    useEffect(() => {
        if(!isAuthenticated()) {
            navigate('/Login');
        }
    });
    
 
    return (
    <div></div>
  )
}
