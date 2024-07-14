import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import Homepage from "./Components/Homepage";
import Profil from "./Components/Profil";
import Incidents from "./Incidents/Incidents";
import Materiel from "./Materiel/Materiel"
import Login from "./Login/Login";
import Piece from "./Piece/Piece";
import IncidentsDetails from "./Incidents/IncidentsDetails";


// Administration
import Administration from "./Administration/Administration";
import GestionCompte from "./Administration/Compte/GestionCompte";
import Fournisseur from "./Administration/Fournisseur/Fournisseur";
import MachineAdmin from "./Administration/Machine/MachineAdmin";
import AdminEmplacement from "./Administration/Emplacement/AdminEmplacement";
import AdminPiece from "./Administration/Pieces/AdminPiece";
import AdministrationMachineDetails from "./Administration/Machine/AdministrationMachineDetails";
import AdminFabricant from "./Administration/Fabricant/AdminFabricant";
import AdminPanne from "./Administration/Panne/AdminPanne";

import {BrowserRouter, Routes, Route} from "react-router-dom"







function App() {
  return (
    
    <div>
      
      
      <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Profil" element={<Profil/>} />
        <Route path="/Incidents" element={<Incidents/>} />
        <Route path="/Materiel" element={<Materiel/>} />
        <Route path="/Login" element={<Login/>} />  
        <Route path="/Pieces" element={<Piece />} />
        <Route path="/Incidents/:incidentId" element={<IncidentsDetails />} />

        [Pages d'administration]
        <Route path="/Administration" element={<Administration/>} />
        <Route path="/Administration/GestionCompte" element={<GestionCompte/>} />
        <Route path="/Administration/Fournisseurs" element={<Fournisseur/>} />
        <Route path="/Administration/Machines" element={<MachineAdmin/>} />
        <Route path="/Administration/MachineDetails/:machineId" element={<AdministrationMachineDetails />} />
        <Route path="/Administration/Emplacements" element={<AdminEmplacement/>} />
        <Route path="/Administration/Pieces" element={<AdminPiece/>} />
        <Route path="/Administration/Fabriquants" element={<AdminFabricant/>} />
        <Route path="/Administration/Pannes" element={<AdminPanne/>} />

      </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
