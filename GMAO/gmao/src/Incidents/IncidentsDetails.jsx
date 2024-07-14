import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';

export default function IncidentDetails() {
  const { incidentId } = useParams();

  console.log(incidentId);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-gray-200 flex flex-col items-center pt-20">
        <div className="bg-white p-8 mt-10 mx-4 md:mx-10 lg:mx-20 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 w-full md:w-3/4 lg:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Incident N° {incidentId}</h1>
          <p className="text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo totam maiores atque repellat, sunt dolores earum alias rem deserunt, saepe ullam, vel facere voluptatum sequi nam optio blanditiis a? Necessitatibus.</p>
        </div>
      </div>
    </div>
  );
}
