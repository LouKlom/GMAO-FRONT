import React from 'react'
import Navbar from '../Components/Navbar'

export default function Materiel() {
  return (
    <div>
      <Navbar />

      <div className="bg-gray-100 p-4 mx-10 mt-10">
          <h1 className="text-black text-2xl font-bold">Machines</h1>
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
                  
                </tbody>
              </table>
          </div>
      </div>
    </div>
  )
}
