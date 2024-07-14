import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';

export default function IncidentDetails() {
  //const [incidentData, setIncidentData] = useState(null); // State to store incident details
  const { incidentId } = useParams(); // Get the incidentId from the URL


  console.log(incidentId)
  /*
  useEffect(() => {
    fetch(`/api/incidents/${incidentId}`) // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => setIncidentData(data));
  }, [incidentId]); // Dependency array to trigger effect when incidentId changes

  if (!incidentData) {
    return <div>Chargement des détails de l'incident...</div>; // Loading indicator
  }
*/
  return (
    <div>
        <Navbar/>
      <h2>Détails de l'incident {incidentId}</h2>

      <div className="bg-gray-100 p-4 mx-10 mt-10">
        <h1 className="text-black text-2xl font-bold">Incident N° {incidentId}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo totam maiores atque repellat, sunt dolores earum alias rem deserunt, saepe ullam, vel facere voluptatum sequi nam optio blanditiis a? Necessitatibus.</p>

      </div>
    </div>
  );
}
