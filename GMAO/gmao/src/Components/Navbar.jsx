import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import RequireAuth from '../Login/RequireAuth';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    navigate('/Login');
  };

  const navItems = [
    { name: 'Pannes', path: '/Incidents' },
    { name: 'Machines', path: '/Materiel' },
    { name: 'Pieces', path: '/Pieces' },
    { name: 'Interventions Préventives', path: '/InterventionPreventives' },
    { name: 'Profil', path: '/Profil' },
    { name: 'Administration', path: '/Administration' },
  ];

  return (
    <div>
      <RequireAuth />
      <nav className="bg-gradient-to-r from-orange-600 via-orange-400 to-red-500 text-white shadow-md w-full">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <div className="text-2xl font-extrabold">
            <a href="/" className="hover:text-gray-200 transition duration-300">
              GMAO
            </a>
          </div>
          <ul className="flex flex-row space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.path}
                  className={`text-lg font-medium transition duration-300 ${
                    location.pathname === item.path ? 'text-gray-200 underline' : 'hover:text-gray-200'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
