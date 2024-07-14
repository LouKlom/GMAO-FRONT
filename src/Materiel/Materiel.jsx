import React from 'react';
import Navbar from '../Components/Navbar';

export default function Materiel() {
  const data = [
    { id: 1, modele: "Modèle A", fabricant: "Fabricant 1", fournisseur: "Fournisseur X", emplacement: "Emplacement A" },
    { id: 2, modele: "Modèle B", fabricant: "Fabricant 2", fournisseur: "Fournisseur Y", emplacement: "Emplacement B" },
    // ... more data
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-gray-200 flex flex-col items-center pt-20">
        <div className="bg-white p-8 mt-10 mx-4 md:mx-10 lg:mx-20 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 w-full md:w-3/4 lg:w-1/2">
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
                </tr>
              </thead>
              <tbody>
                {data.map((machine) => (
                  <tr key={machine.id} className="border-t">
                    <td className="p-2">{machine.id}</td>
                    <td className="p-2">{machine.modele}</td>
                    <td className="p-2">{machine.fabricant}</td>
                    <td className="p-2">{machine.fournisseur}</td>
                    <td className="p-2">{machine.emplacement}</td>
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
