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
        
        <div>
          <Navbar/>
          <div className="bg-gray-100 p-4 mx-10 mt-10">
          <h2 className="text-2xl font-bold">Profil</h2>
    
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





      );
}
