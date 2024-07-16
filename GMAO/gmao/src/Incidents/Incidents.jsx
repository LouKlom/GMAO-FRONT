import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import IncidentPopup from './IncidentPopup';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default function Incidents() {
  
  const [isPanneOpen, setPanneOpen] = useState(false);
  const [data, setData] = useState('')



  useEffect(() => {
    const fetchData = async () => {
      const accessToken = localStorage.getItem('access_token');
      const response = await axios.get('http://localhost:8080/api/panne', {
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const responseData = await response.data;
      setData(responseData);
    };

    fetchData();
  }, []);


  return (
    <div className="min-h-screen flex flex-col bg-gray-200">
      <Navbar />
      <div className="flex-grow flex flex-col items-center pt-20">
        <div className="bg-white p-8 mt-10 mx-4 md:mx-10 lg:mx-20 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Pannes en cours</h1>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md"
              onClick={() => setPanneOpen(true)}
            >
              Déclarer une panne
            </button>
          </div>

          {isPanneOpen && <IncidentPopup onClose={() => setPanneOpen(false)} />}

          <div className="container mx-auto">
            <table className="w-full bg-white shadow-md rounded-lg mt-8">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left p-2">ID</th>
                  <th className="text-left p-2">Titre</th>
                  <th className="text-left p-2">Machine</th>
                  <th className="text-left p-2">Panne</th>
                  <th className="text-left p-2">Statut</th>
                  <th className="text-right p-2">Détails</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 && data.map((panne) => (
                  <tr key={panne.id} className="border-t">
                    <td className="p-2">{panne.id}</td>
                    <td className="p-2">{panne.titre}</td>
                    <td className="p-2">{panne.machine}</td>
                    <td className="p-2">{panne.typePanne}</td>
                    <td className="p-2">{panne.statut}</td>
                    <td className="text-right p-2">
                      <Link to={`/Incidents/${panne.id}`} className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                        Détails
                      </Link>
                    </td>
                  </tr>
                ))}
                {}
              </tbody>
            </table>
          </div>
        </div>
        
      </div>
    </div>
  );
}
