import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';

export default function Incidents() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const data = [
    { id: 1, titre: "Problème d'impression", machine: "Imprimante A123", panne: "Impression floue" },
    { id: 2, titre: "Erreur disque dur", machine: "Serveur B456", panne: "Disque dur plein" },
    // ... more data
  ];

  const machines = [ // Assuming you have an array of available machines
    { id: 1, name: "Imprimante A123" },
    { id: 2, name: "Serveur B456" },
    // ... other machines
  ];

  const panneTypes = [ // Assuming you have an array of panne types
    { id: 1, name: "Impression floue" },
    { id: 2, name: "Disque dur plein" },
    // ... other panne types
  ];

  const handleDeclareIncident = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Implement your logic to submit the incident data (e.g., API call)
    const newIncident = {
      date: new Date().toISOString().slice(0, 10), // Today's date in YYYY-MM-DD format
      machineId: event.target.machine.value,
      panneTypeId: event.target.panneType.value,
      titre: event.target.titre.value,
      description: event.target.description.value,
    };

    console.log("New incident:", newIncident); // Replace with your actual submission logic

    setIsPopupOpen(false); // Close the popup after submission
  };



  return (

    <div>  
      <Navbar/>



      <div className="bg-gray-100 p-4 mx-10 mt-10">
          <h1 className="text-black text-2xl font-bold">Incidents en cours</h1>
            <div className="container mx-auto">
              <table className="w-full bg-white shadow-md rounded-lg mt-8">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="text-left p-2">ID</th>
                    <th className="text-left p-2">Titre</th>
                    <th className="text-left p-2">Machine</th>
                    <th className="text-left p-2">Panne</th>
                    <th className="text-right p-2">Détails</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((panne) => (
                    <tr key={panne.id} className="border-t">
                      <td className="p-2">{panne.id}</td>
                      <td className="p-2">{panne.titre}</td>
                      <td className="p-2">{panne.machine}</td>
                      <td className="p-2">{panne.panne}</td>
                      <td className="text-right p-2">
                        <Link to={`/Incidents/${panne.id}`} className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                          Détails
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
          </div>
      </div>

      <button
        className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none"
        onClick={() => setIsPopupOpen(true)}
      >
        Déclarer un incident
      </button>




      <div className="bg-gray-100 p-4 mx-10 mt-10">
          <h1 className="text-black text-2xl font-bold">Incidents résolus</h1>
            <div className="container mx-auto">
              <table className="w-full bg-white shadow-md rounded-lg mt-8">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="text-left p-2">ID</th>
                    <th className="text-left p-2">Titre</th>
                    <th className="text-left p-2">Machine</th>
                    <th className="text-left p-2">Panne</th>
                    <th className="text-right p-2">Détails</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((panne) => (
                    <tr key={panne.id} className="border-t">
                      <td className="p-2">{panne.id}</td>
                      <td className="p-2">{panne.titre}</td>
                      <td className="p-2">{panne.machine}</td>
                      <td className="p-2">{panne.panne}</td>
                      <td className="text-right p-2">
                        <Link to={`/Incidents/${panne.id}`} className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                          Détails
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
          </div>
      </div>


      {isPopupOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-bold mb-4">Déclarer un incident</h2>
            <form onSubmit={handleDeclareIncident}>
              <div className="mb-4">
                <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
                  Date (automatique)
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={new Date().toISOString().slice(0, 10)} // Today's date (read-only)
                  readOnly
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="machine" className="block text-gray-700 font-bold mb-2">
                  Machine
                </label>
                <select
                  id="machine"
                  name="machine"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  {machines.map((machine) => (
                    <option key={machine.id} value={machine.id}>
                      {machine.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="panneType" className="block text-gray-700 font-bold mb-2">
                  Type de panne
                </label>
                <select
                  id="panneType"
                  name="panneType"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  {panneTypes.map((panneType) => (
                    <option key={panneType.id} value={panneType.id}>
                      {panneType.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="titre" className="block text-gray-700 font-bold mb-2">
                  Titre
                </label>
                <input
                  type="text"
                  id="titre"
                  name="titre"
                  placeholder="Titre de l'incident"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                    name="description"
                    rows="4"
                    placeholder="Détails de l'incident"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                    onClick={() => setIsPopupOpen(false)}
                  >
                    Annuler
                  </button>
                  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Déclarer
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}











    </div>
  )
}
