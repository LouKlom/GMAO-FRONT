import React, {useState, useEffect} from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';



export default function InterventionPreventives() {
  const [preventives, setPreventives] = useState('')

   // Construction liste preventives
   useEffect(() => {
    const fetchPreventives = async () => {
      try {
        const accessToken = localStorage.getItem('access_token');
          await axios.get('http://localhost:8080/api/intervention-preventive', {
            headers: {
              'Accept': '*/*',
              'Authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
            },
          }).then((response) => setPreventives(response.data));
        //const preventives = response.data;
        console.log(preventives)
        //setPreventives(preventives);
      } catch (error) {
        console.error('Erreur lors de la récupération des preventives:', error);
      }
    };
  
    fetchPreventives();
  }, );
  console.log("kluijfebnuiofnon")
  console.log(preventives)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-gray-200 flex flex-col items-center pt-20">
        <div className="bg-white p-8 mt-10 mx-4 md:mx-10 lg:mx-20 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 w-full md:w-3/4 lg:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Interventions préventives</h1>
          <div className="container mx-auto">
            <table className="w-full bg-white shadow-md rounded-lg mt-8">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left p-2">ID</th>
                  <th className="text-left p-2">Titre</th>
                  <th className="text-left p-2">Description</th>
                  <th className="text-right p-2">Jours restants</th>
                </tr>
              </thead>
              <tbody>
              {preventives.map((item) => (
                  <tr className="border-t" key={item.id}>
                    <td className="p-2">{item.id}</td>
                    <td className="p-2">{item.titre}</td>
                    <td className="p-2">{item.description}</td>
                    <td className="text-right p-2">{item.intervalle}</td>
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
