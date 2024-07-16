import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';

export default function Materiel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = localStorage.getItem('access_token');
      const response = await axios.get('http://localhost:8080/api/machine', {
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

  console.log(data);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-gray-200 flex flex-col items-center pt-20">
        <div className="bg-white p-8 mt-10 mx-4 md:mx-10 lg:mx-20 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Machines</h1>
          <div className="container mx-auto">
            <table className="w-full bg-white shadow-md rounded-lg mt-8">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left p-2">ID</th>
                  <th className="text-left p-2">Modèle</th>
                  <th className="text-left p-2">Fabricant</th>
                  <th className="text-left p-2">Fournisseur</th>
                  <th className="text-left p-2">Emplacement</th>
                  <th className="text-left p-2">Actif</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="p-2">{item.id}</td>
                    <td className="p-2">{item.modele}</td>
                    <td className="p-2">{item.fabricant}</td> 
                    <td className="p-2">{item.fournisseur}</td>
                    <td className="p-2">{item.emplacement}</td>
                    <td className={`p-2 ${item.actif ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                      {item.actif ? 'Oui' : 'Non'}
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
