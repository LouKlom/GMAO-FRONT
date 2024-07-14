import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import AdministrationNav from '../AdministrationNav'
import FournisseurPopup from './FournisseurPopup'
import ModifFournisseurPopup from './ModifFournisseurPopup'
import DeleteFournisseurPopup from './DeleteFournisseur'

import axios from 'axios'

export default function Fournisseur() {

    const [isFournisseurOpen, setFournisseurOpen] = useState(false);
    const [isModifFournisseurOpen, setModifFournisseurOpen] = useState(false);
    const [isDeleteFournisseurOpen, setDeleteFournisseurOpen] = useState(false)

    const [selectedItemId, setSelectedItemId] = useState(false);
    const [selectedNom, setSelectednom] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const accessToken = localStorage.getItem('access_token');
          const response = await axios.get('http://localhost:8080/api/fournisseur', {
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

      

      const handleModifyClick = (id, nom) => {
        setSelectedItemId(id);
        setSelectednom(nom);
        setModifFournisseurOpen(true);
      }
    
      const handleDeleteClick = (id, nom) => {
        setSelectedItemId(id);
        setSelectednom(nom);
        setDeleteFournisseurOpen(true);
      }


  return (
    <div>
    <Navbar />
    <AdministrationNav />

        <div className="bg-gray-100 p-4 mx-10 mt-10">
            <div className="flex justify-between items-center">
            <h1 className="text-black text-2xl font-bold">Gestion des Fournisseurs</h1>

            <button
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                    onClick={() => setFournisseurOpen(true)}
                >
                    Créer un nouveau Fournisseur
                </button>
            </div>

            {isFournisseurOpen && <FournisseurPopup onClose={() => setFournisseurOpen(false)} />}
            {isModifFournisseurOpen && (
                <ModifFournisseurPopup 
                    onClose={() => setModifFournisseurOpen(false)}
                    selectedItemId={selectedItemId}
                    selectedNom={selectedNom}
                />
            )}
            {isDeleteFournisseurOpen && (
                <DeleteFournisseurPopup
                    onClose={() => setDeleteFournisseurOpen(false)}
                    selectedItemId={selectedItemId}
                    selectedNom={selectedNom}
                />
            )}

            <div className="bg-gray-100 p-1 mx-2 mt-10">
                    <div className="container mx-auto">
                    <table className="w-full bg-white shadow-md rounded-lg mt-8">
                        <thead>
                        <tr className="bg-gray-800 text-white">
                            <th className="text-left p-2">ID</th>
                            <th className="text-left p-2">Nom</th>
                            <th className="text-right p-2">Actions</th>
                        </tr>
                        </thead>

                        <tbody>
                            {data.map((item) => (
                                <tr className="border-t" key={item.id}>
                                    <td className="p-2">{item.id}</td>
                                    <td className="p-2">{item.nom}</td>
                                    <td className="text-right p-2">
                                    <button
                                      className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                      onClick={() => handleDeleteClick(item.id, item.nom)}
                                    >
                                      Supprimer
                                    </button>

                                    <button
                                      className="bg-blue-500 text-white px-4 m-1 py-2 rounded-md"
                                      onClick={() => handleModifyClick(item.id, item.nom)}
                                    >
                                      Modifier
                                    </button>
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
