import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import AdministrationNav from '../AdministrationNav'
import { Link } from 'react-router-dom';
import MachinePopup from './MachinePopup';

import axios from 'axios';


export default function MachineAdmin() {
  
    const [isMachineOpen, setMachineOpen] = useState(false);

    const [data, setData] = useState([]);

    // Récupération Machines
   useEffect(() => {
        const fetchData = async () => {
          const accessToken = localStorage.getItem('access_token');
          const response = await axios.get('http://localhost:8080/api/machine', {
            headers: {
              'Accept': '*/*',
              'Authorization': `Bearer ${accessToken}`,
              
            },
          });
          const responseData = await response.data;
          setData(responseData);
        };
    
        fetchData();
      }, []);

  return (
    <div>
        <Navbar />
        <AdministrationNav />

        <div className="bg-gray-100 p-4 mx-10 mt-10">
            <div className="flex justify-between items-center">
            <h1 className="text-black text-2xl font-bold">Gestion des Machines</h1>
            

            <button
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                    onClick={() => setMachineOpen(true)}
                >
                    Créer une Nouvelle Machine
                </button>
            </div>

            {isMachineOpen && <MachinePopup onClose={() => setMachineOpen(false)}/>}


            <div className="bg-gray-100 p-1 mx-2 mt-10">
                    <div className="container mx-auto">
                    <table className="w-full bg-white shadow-md rounded-lg mt-8">
                        <thead>
                        <tr className="bg-gray-800 text-white">
                            <th className="text-left p-2">ID</th>
                            <th className="text-left p-2">Modele</th>
                            <th className="text-left p-2">Fabricant</th>
                            <th className="text-left p-2">Fournisseur</th>
                            <th className="text-left p-2">Emplacement</th>
                            <th className="text-left p-2">Actif</th>
                            <th className="text-right p-2">Actions</th>
                        </tr>
                        </thead>

                        <tbody>
                            {data.map((item) => (
                                <tr className="border-t">
                                <td className="p-2">{item.id}</td>
                                <td className="p-2">{item.modele}</td>
                                <td className="p-2">{item.fabricant.nom}</td>
                                <td className="p-2">{item.fournisseur.nom}</td>
                                <td className="p-2">{item.emplacement.emplacement}</td>
                                <td className="p-2">{item.actif ? 'Oui' : 'Non'}</td>
                                <td className="text-right p-2">
                                    <Link to={`/Administration/MachineDetails/${item.id}`} className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                    Détails
                                    </Link>
                                </td>
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
