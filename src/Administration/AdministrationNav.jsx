import React from 'react'

export default function AdministrationNav() {
  return (
    <div>
        <nav className="bg-orange-700 text-white p-4 mx-10 mt-10 rounded-lg">
        <ul className="flex flex-row justify-between items-center px-4 py-4">
            <li>
            <a href="/Administration/GestionCompte" className="text-lg font-medium hover:text-red-500">Gestion des Comptes</a>
            </li>
            <li>
            <a href="/Administration/Fournisseurs" className="text-lg font-medium hover:text-red-500">Fournisseurs</a>
            </li>
            <li>
            <a href="/Administration/Fabriquants" className="text-lg font-medium hover:text-red-500">Fabriquants</a>
            </li>
            <li>
            <a href="/Administration/Machines" className="text-lg font-medium hover:text-red-500">Machines</a>
            </li>
            <li>
            <a href="/Administration/Pieces" className="text-lg font-medium hover:text-red-500">Pieces</a>
            </li>
            <li>
            <a href="/Administration/Emplacements" className="text-lg font-medium hover:text-red-500">Emplacements</a>
            </li>
            <li>
            <a href="/Administration/Pannes" className="text-lg font-medium hover:text-red-500">Pannes</a>
            </li>
        </ul>
        </nav>
    </div>
  )
}
