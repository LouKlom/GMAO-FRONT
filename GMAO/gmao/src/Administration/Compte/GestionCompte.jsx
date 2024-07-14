import React, { useState, useEffect } from 'react'
import AdministrationNav from '../AdministrationNav'
import Navbar from '../../Components/Navbar'
import PopupForm from './CompteForm';

import axios from 'axios';

export default function GestionCompte() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [data, setData] = useState([]);

      // Récupération Users
      useEffect(() => {
        const fetchData = async () => {
          const accessToken = localStorage.getItem('access_token');
          const response = await axios.get('http://localhost:8080/api/users', {
            headers: {
              'Accept': '*/*',
              'Authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
            },
          });
          const responseData = await response.data;
          setData(responseData);
        };
    
        fetchData();
      }, []);

    console.log(data)


  return (
    <div>
    <Navbar />
    <AdministrationNav />

    <div className="bg-gray-100 p-4 mx-10 mt-10">
    <div className="flex justify-between items-center">
      <h1 className="text-black text-2xl font-bold">Gestion des comptes utilisateurs</h1>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-md"
        onClick={() => setIsPopupOpen(true)}
      >
        Créer un nouvel utilisateur
      </button>
    </div>

    {isPopupOpen && <PopupForm onClose={() => setIsPopupOpen(false)} />}

      <div className="bg-gray-100 p-1 mx-2 mt-10">
            <div className="container mx-auto">
              <table className="w-full bg-white shadow-md rounded-lg mt-8">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="text-left p-2">ID</th>
                    <th className="text-left p-2">Nom</th>
                    <th className="text-left p-2">Prénom</th>
                    <th className="text-left p-2">Email</th>
                    <th className="text-left p-2">Role</th>
                    <th className="text-left p-2">Telephone</th>
                    <th className="text-left p-2">Zone</th>
                    <th className="text-left p-2">Actif</th>
                  </tr>
                </thead>

                <tbody>
                  {data.map((item) => (
                    <tr className="border-t">
                    <td className="p-2">{item.id}</td>
                    <td className="p-2">{item.nom}</td>
                    <td className="p-2">{item.prenom}</td>
                    <td className="p-2">{item.email}</td>
                    <td className="p-2">{item.role}</td>
                    <td className="p-2">{item.telephone}</td>
                    <td className="p-2">{item.emplacement.emplacement}</td>
                    <td className="p-2">{item.enabled ? 'Oui' : 'Non'}</td>
                  </tr>
                  ))}
                </tbody>
              </table>
          </div>
      </div>
      
    </div>
  </div>
  )
}
