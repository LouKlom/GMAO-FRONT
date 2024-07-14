import React from 'react';
import Navbar from '../Components/Navbar';

export default function Piece() {
  const data = [
    { id: 1, nom: "Pièce A", fabricant: "Fabricant 1", fournisseur: "Fournisseur X", description: "Description de la pièce A", stock: 10 },
    { id: 2, nom: "Pièce B", fabricant: "Fabricant 2", fournisseur: "Fournisseur Y", description: "Description de la pièce B", stock: 20 },
    // ... more data
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-gray-200 flex flex-col items-center pt-20">
        <div className="bg-white p-8 mt-10 mx-4 md:mx-10 lg:mx-20 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 w-full md:w-3/4 lg:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Stock de pièces</h1>
          <div className="container mx-auto">
            <table className="w-full bg-white shadow-md rounded-lg mt-8">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left p-2">ID</th>
                  <th className="text-left p-2">Nom</th>
                  <th className="text-left p-2">Fabricant</th>
                  <th className="text-left p-2">Fournisseur</th>
                  <th className="text-left p-2">Description</th>
                  <th className="text-right p-2">Stock</th>
                </tr>
              </thead>
              <tbody>
                {data.map((piece) => (
                  <tr key={piece.id} className="border-t">
                    <td className="p-2">{piece.id}</td>
                    <td className="p-2">{piece.nom}</td>
                    <td className="p-2">{piece.fabricant}</td>
                    <td className="p-2">{piece.fournisseur}</td>
                    <td className="p-2">{piece.description}</td>
                    <td className="text-right p-2">{piece.stock}</td>
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
