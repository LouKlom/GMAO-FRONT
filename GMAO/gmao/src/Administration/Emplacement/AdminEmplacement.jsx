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

  // Récypération des emplacements
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
    <div className="min-h-screen bg-gray-200 flex flex-col">
      <Navbar />
      <AdministrationNav />

      <div className="flex-grow flex flex-col items-center pt-6">
        <div className="bg-white p-8 mt-6 mx-4 md:mx-10 lg:mx-20 rounded-lg shadow-lg w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
          <div className="flex justify-between items-center mb-4">
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

          <div className="container mx-auto">
            <table className="w-full bg-white shadow-md rounded-lg mt-8">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left p-4">ID</th>
                  <th className="text-left p-4">Libellé</th>
                  <th className="text-right p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr className="border-t" key={item.id}>
                    <td className="p-4">{item.id}</td>
                    <td className="p-4">{item.emplacement}</td>
                    <td className="text-right p-4">
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                        onClick={() => handleModifyClick(item.id, item.emplacement)}
                      >
                        Modifier
                      </button>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded-md"
                        onClick={() => handleDeleteClick(item.id, item.emplacement)}
                      >
                        Supprimer
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
