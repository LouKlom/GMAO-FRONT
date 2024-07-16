import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import axios from 'axios';



export default function IncidentDetails() {
  const { incidentId } = useParams();
  const navigate = useNavigate(); 
  console.log(incidentId);



  const [data, setData] = useState('')



  useEffect(() => {
    const fetchData = async () => {
      const accessToken = localStorage.getItem('access_token');
      const response = await axios.get(`http://localhost:8080/api/panne/${incidentId}`, {
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


  const handleDeleteIncident = async () => {
    try {
      const accessToken = localStorage.getItem('access_token');
      await axios.delete(`http://localhost:8080/api/panne/${incidentId}`,  // Corrected closing parenthesis
        {
          headers: {
            Accept: '*/*',
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      navigate('/home'); // Redirect to home page using navigate
    } catch (error) {
      console.error('Error deleting incident:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-gray-200">
        <div className="p-8 bg-white rounded shadow-lg mx-auto mt-10 max-w-2xl">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Incident N° {incidentId} - {data.titre}
          </h1>
          <div className="flex items-center mb-2">
            <p className="text-gray-600 mr-2">Machine impactée:</p>
            <span className="font-medium">{data.machine}</span>
          </div>
          <div className="flex items-center mb-2">
            <p className="text-gray-600 mr-2">Statut:</p>
            <span className="font-medium">{data.statut}</span>
          </div>
          <div className="flex items-center mb-2">
            <p className="text-gray-600 mr-2">Type de panne:</p>
            <span className="font-medium">{data.typePanne}</span>
          </div>
          <div className="flex items-center mb-2">
            <p className="text-gray-600 mr-2">Date:</p>
            <span className="font-medium">{data.debut}</span>
          </div>
          <div className="flex items-center mb-2">
            <p className="text-gray-600 mr-2">Auteur:</p>
            <span className="font-medium">{data.utilisateur}</span>
          </div>
          <div className="flex items-center mb-2">
            <p className="text-gray-600 mr-2">Description:</p>
            <span className="font-medium">{data.description}</span>
          </div>
          <div className="flex justify-end mt-4">
          <button
            className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600"
            onClick={() => handleDeleteIncident()}
          >
            Panne résolue
          </button>
        </div>
        </div>
      </div>
    </div>
  );
  
  
}
