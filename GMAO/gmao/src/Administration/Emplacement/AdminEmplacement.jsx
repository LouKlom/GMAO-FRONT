import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import AdministrationNav from '../AdministrationNav';
import EmplacementPopup from './EmplacementPopup';
import ModifEmplacementPopup from './ModifEmplacementPopup';
import DeleteEmplacement from './DeleteEmplacement';
import axios from 'axios';

export default function AdminEmplacement() {
  const [isEmplacementOpen, setEmplacementOpen] = useState(false);
  const [isModifEmplacementOpen, setModifEmplacementOpen] = useState(false);
  const [isDeleteEmplacementOpen, setDeleteEmplacementOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [selectedNom, setSelectednom] = useState(null);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = localStorage.getItem('access_token');
      const response = await axios.get('http://localhost:8080/api/emplacement', {
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
    setModifEmplacementOpen(true);
  };


  const handleDeleteClick = (id, nom) => {
    setSelectedItemId(id);
    setSelectednom(nom);
    setDeleteEmplacementOpen(true);
  };

  return (
    <div>
      <Navbar />
      <AdministrationNav />

      <div className="bg-gray-100 p-4 mx-10 mt-10">
        <div className="flex justify-between items-center">
          <h1 className="text-black text-2xl font-bold">Gestion des Emplacements</h1>

          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md"
            onClick={() => setEmplacementOpen(true)}
          >
            Créer un nouvel Emplacement
          </button>
        </div>

        {isEmplacementOpen && <EmplacementPopup onClose={() => setEmplacementOpen(false)} />}
        {isModifEmplacementOpen && (
          <ModifEmplacementPopup 
            onClose={() => setModifEmplacementOpen(false)}
            selectedItemId={selectedItemId}
            selectedNom={selectedNom}
          />
        )}
        {isDeleteEmplacementOpen && (
          <DeleteEmplacement
            onClose={() => setDeleteEmplacementOpen(false)}
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
                  <th className="text-left p-2">Libellé</th>
                  <th className="text-right p-2">Actions</th>
                </tr>
              </thead>

              <tbody>
                {data.map((item) => (
                  <tr className="border-t" key={item.id}> {/* Add key prop for better performance */}
                    <td className="p-2">{item.id}</td>
                    <td className="p-2">{item.emplacement}</td>
                    <td className="text-right p-2">
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                        onClick={() => handleDeleteClick(item.id, item.emplacement)}
                      >
                        Supprimer
                      </button>

                      <button
                        className="bg-blue-500 text-white px-4 m-1 py-2 rounded-md"
                        onClick={() => handleModifyClick(item.id, item.emplacement)}
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
  );
}
