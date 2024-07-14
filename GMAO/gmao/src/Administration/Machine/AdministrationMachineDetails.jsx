import { useEffect, useState } from 'react'
import React from 'react'
import Navbar from '../../Components/Navbar'
import AdministrationNav from '../AdministrationNav'
import axios from 'axios'



export default function MachineDetails() {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false); 

  // Récupération ID de la machine
  function extractLastValueFromURL(url) {
    const pathSegments = url.split('/');
    const lastSegment = pathSegments[pathSegments.length - 1];
    return lastSegment;
  }
  
  const fullURL = window.location.href;
  const machineID = extractLastValueFromURL(fullURL);
  console.log(machineID);



  // recupération infos de la machine
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const accessToken = localStorage.getItem('access_token');
      const response = await axios.get('http://localhost:8080/api/machine/1', {
        headers: {
          'Accept': '*/*',
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      const responseData = await response.data;
      setData(responseData);
      setIsLoading(false);
    };

    fetchData();
  }, [machineID]);

  console.log(data)

  return (
    <div>
      <Navbar />
      <AdministrationNav />

      <div className="bg-gray-100 p-4 mx-10 mt-10">
        <h1 className="text-black text-2xl font-bold">Machine N° {machineID}</h1>
        {isLoading ? (
          <p>Loading machine details...</p>
        ) : (
          <>
            <div className="mt-3">
          <p className="text-gray-600">Modèle: {data.modele}</p>
          <p className="text-gray-600">Emplacement: {data.emplacement.emplacement}</p>
          <p className="text-gray-600">Fabricant: {data.fabricant.nom}</p>
          <p className="text-gray-600">Fournisseur: {data.fournisseur.nom}</p>
        </div>

          </>
        )}
        </div>
    </div>
  )
}
