import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';

export default function InterventionPreventives() {
  const [preventives, setPreventives] = useState([]); // Use an empty array for initial state

  const sortByNbJours = (preventives) => {
    return preventives.sort((a, b) => a.intervalle.nbJours - b.intervalle.nbJours);
  };


  const getBackgroundColor = (nbJours) => {
    if (nbJours <= 5) {
      return 'bg-red-500'; // Red background
    } else if (nbJours <= 14) {
      return 'bg-orange-500'; // Orange background
    } else {
      return 'bg-green-500'; // Green background
    }
  };

  useEffect(() => {
    const fetchPreventives = async () => {
      try {
        const accessToken = localStorage.getItem('access_token');
        const response = await axios.get('http://localhost:8080/api/intervention-preventive', {
          headers: {
            'Accept': '*/*',
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        });

        // Check if response data is an array
        if (Array.isArray(response.data)) {
          const sortedPreventives = sortByNbJours(response.data);
          setPreventives(sortedPreventives);
        } else {
          console.error('Erreur lors de la récupération des preventives:', response.data);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des preventives:', error);
      }
    };

    fetchPreventives();
  }, []);

  console.log("kluijfebnuiofnon");
  console.log(preventives);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-gray-200 flex flex-col items-center pt-20">
        <div className="bg-white p-8 mt-10 mx-4 md:mx-10 lg:mx-20 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 w-full md:w-3/4 lg:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Interventions préventives</h1>
          {/* Conditionally render the table based on preventives length */}
          {preventives.length > 0 && (
            <div className="container mx-auto">
              <table className="w-full bg-white shadow-md rounded-lg mt-8">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="text-left p-2">ID</th>
                    <th className="text-left p-2">Titre</th>
                    <th className="text-left p-2">Description</th>
                    <th className="text-right p-2">Intervalle</th>
                  </tr>
                </thead>
                <tbody>
                  {preventives.map((item) => (
                  <tr className="border-t">
                    <td className="p-2">{item.id}</td>
                    <td className="p-2">{item.titre}</td>
                    <td className="p-2">{item.description}</td>
                    <td className={`text-right p-2 ${getBackgroundColor(item.intervalle.nbJours)}`}>{item.intervalle.nbJours}</td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
