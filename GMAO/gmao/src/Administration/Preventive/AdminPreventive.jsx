import React, {useState, useEffect} from 'react'
import Navbar from '../../Components/Navbar'
import AdministrationNav from '../AdministrationNav'
import PreventivePopup from './PreventivePopup'
import axios from 'axios'

export default function AdminPreventive() {
  
  const [isPreventiveOpen, setPreventiveOpen] = useState(false)
  const [preventives, setPreventives] = useState('')
  

   // Construction liste preventives
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
        const preventives = response.data;
        console.log(preventives)
        setPreventives(preventives);
      } catch (error) {
        console.error('Erreur lors de la récupération des preventives:', error);
      }
    };
  
    fetchPreventives();
  }, []);




  return (
    <div>
        <Navbar/>
        <AdministrationNav/>

        <div className="bg-gray-100 p-4 mx-10 mt-10 rounded-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-black text-2xl font-bold">Gestion des Interventions Préventives</h1>

          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md"
            onClick={() => setPreventiveOpen(true)}
          >
            Créer une intervention préventive
          </button>
        </div>

        {isPreventiveOpen && <PreventivePopup onClose={() => setPreventiveOpen(false)}/>}


        <div className="bg-gray-100 p-1 mx-2 mt-10 rounded-lg">
          <div className="container mx-auto">
            <table className="w-full bg-white shadow-md rounded-lg mt-8">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left p-2">ID</th>
                  <th className="text-left p-2">Titre</th>
                  <th className="text-right p-2">Description</th>
                  <th className="text-right p-2">Intervale</th>
                </tr>
              </thead>

              <tbody>
                


              </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
