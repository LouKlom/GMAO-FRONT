import React, { useEffect, useState } from 'react'

import Navbar from '../../Components/Navbar'
import AdministrationNav from '../AdministrationNav'
import PannePopup from './PannePopup'
import ModifPannePopup from './PannePopup'
import axios from 'axios'


export default function AdminPanne() {


    const [isPanneOpen, setPanneOpen] = useState(false);
    const [isModifPanneOpen, setModifPanneOpen] = useState(false);

    const [selectedItemId, setSelectedItemId] = useState(false);
    const [selectedNom, setSelectednom] = useState(false);
    const [data, setData] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
          const accessToken = localStorage.getItem('access_token');
          const response = await axios.get('http://localhost:8080/api/type_panne', {
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
        setModifPanneOpen(true);
      }


  return (
    <div>
        <Navbar/>
        <AdministrationNav/>

        <div className="bg-gray-100 p-4 mx-10 mt-10">
            <div className="flex justify-between items-center">
            <h1 className="text-black text-2xl font-bold">Gestion des type de Pannes</h1>

            <button
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                    onClick={() => setPanneOpen(true)}
                >
                    Créer une nouvelle panne
                </button>
            </div>

            {isPanneOpen && <PannePopup onClose={() => setPanneOpen(false)} />}
            {isModifPanneOpen && (
                <ModifPannePopup 
                    onClose={() => setModifPanneOpen(false)}
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
