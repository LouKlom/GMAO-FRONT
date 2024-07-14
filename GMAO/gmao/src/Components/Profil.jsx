import React from 'react'
import Navbar from './Navbar';
import { jwtDecode } from 'jwt-decode';


export default function Profil() {
    const utilisateur = {
        id: '1598763',
        nom: 'Doe',
        prénom: 'John',
        email: 'johndoe@example.com',
        téléphone: '+33 1 23 45 67 89',
        adresse: '1 rue de l\'Exemple, 75000 Paris, France',
      };
    
      const accessToken = localStorage.getItem('access_token');
      const decodedToken = jwtDecode(accessToken);
      console.log("DECODED TOKEN =====");
      console.log(decodedToken);

      return (
        
        <div className="min-h-screen bg-gray-200 flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col items-center pt-20">
        <div className="bg-white p-8 mt-10 mx-4 md:mx-10 lg:mx-20 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 w-full md:w-3/4 lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Profil</h2>

          <div className="mt-4">
            <p className="text-gray-800">ID:</p>
            <span className="font-bold">{utilisateur.id}</span>
          </div>

          <div className="mt-4">
            <p className="text-gray-800">Nom:</p>
            <span className="font-bold">{utilisateur.nom} {utilisateur.prénom}</span>
          </div>

          <div className="mt-4">
            <p className="text-gray-800">Email:</p>
            <span className="font-bold">{utilisateur.email}</span>
          </div>

          <div className="mt-4">
            <p className="text-gray-800">Téléphone:</p>
            <span className="font-bold">{utilisateur.téléphone}</span>
          </div>

          <div className="mt-4">
            <p className="text-gray-800">Adresse:</p>
            <span className="font-bold">{utilisateur.adresse}</span>
          </div>
        </div>
      </div>
    </div>




      );
}
