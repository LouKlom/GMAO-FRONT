import React from 'react'
import { useNavigate } from 'react-router-dom'
import RequireAuth from '../Login/RequireAuth'

export default function Navbar() {
 
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('access_token')
        navigate('/Login');
    }


    return (
    <div>
        <RequireAuth/>
        <nav className="bg-orange-500 text-white">
        <ul className="flex flex-row justify-between items-center px-4 py-4">
            <li>
            <a href="/Dashboard" className="text-lg font-bold hover:text-black-500">GMAO</a>
            </li>
            <li>
            <a href="/Incidents" className="text-lg font-medium hover:text-red-500">Incidents</a>
            </li>
            <li>
            <a href="/Materiel" className="text-lg font-medium hover:text-red-500">Machines</a>
            </li>
            <li>
            <a href="/Pieces" className="text-lg font-medium hover:text-red-500">Pieces</a>
            </li>
            <li>
            <a href="/Interventions" className="text-lg font-medium hover:text-red-500">Interventions</a>
            </li>
            <li>
            <a href="/Profil" className="text-lg font-medium hover:text-red-500">Profil</a>
            </li>
            <li>
            <a href="/Administration" className="text-lg font-medium hover:text-red-500">Administration</a>
            </li>
            <li>
            <button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600">
                Déconnexion
            </button>
            </li>
        </ul>
        </nav>
    </div>
    
  )
}
