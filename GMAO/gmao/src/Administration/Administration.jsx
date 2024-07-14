import React from 'react'
import Navbar from '../Components/Navbar'
import AdministrationNav from './AdministrationNav'

export default function Administration() {

  const lienPHP = (url) => {
    window.open(url, '_blank')
  }

  const lienSwagger = (url) => {
    window.open(url, '_blank')
  }


  return (
    <div>
      <Navbar />
      <AdministrationNav />
      <div className="bg-gray-100 p-4 mx-10 mt-10">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md md:w-1/2"
            onClick={() => lienSwagger("http://localhost:8080/swagger-ui/index.html")}
          >
            Swagger
          </button>

          <button
            className="bg-yellow-600 text-white px-4 py-2 rounded-md md:w-1/2"
            onClick={() => lienPHP("http://localhost:8082/")}
          >
            PHPMyAdmin
          </button>
      </div>

      <div className="bg-gray-100 p-4 mx-10 mt-10">
        <h1 className="text-black text-2xl font-bold">Note de version - v0.X</h1>
        <p></p> <br/>


        <h1 className="text-black text-2xl font-bold">Note de version - v0.10</h1>
        <p>
          - Ajout Création Machines <br/>
          - Ajout Création de comptes  
        </p> <br/>
        

        <h1 className="text-black text-2xl font-bold">Note de version - v0.9</h1>
        <p>
          - Ajout méthode GET Fabricant <br/>
          - Ajout méthode POST Fabricant <br/>
          - Ajout méthode DELETE Fabricant <br/>
          - Ajout méthode PUT Fabricant
        </p> <br/>

        <h1 className="text-black text-2xl font-bold">Note de version - v0.8</h1>
        <p>
        - Ajout méthode DELETE emplacement <br/>
        - Ajout méthode PUT emplacement <br/>  
        - Séparation Fabricants & Fournisseurs <br/>
        - Ajout GET Fournisseurs <br/>
        - Ajout POST Fournisseurs <br/>
        - Ajout DELETE Fournisseurs <br/>
        - Ajout PUT Fournisseurs <br/>
        - Suppressions liens Swagger et PHPMyAdmin <br/>
        - Ajout bouton Swagger et PHPMyAdmin
        </p> <br/>


        <h1 className="text-black text-2xl font-bold">Note de version - v0.7</h1>
        - Ajout page de détails pour les incidents <br/>
        - Ajout page affichage des pièces <br/>
        - Suppression page Stock <br/>
        - Ajout page administration des pièces <br/>
        - Ajout page détails administration des machines <br/>
        - Modification page machine 
        <p></p> <br/>

        <h1 className="text-black text-2xl font-bold">Note de version - v0.6</h1>
        <p>
          - Modification page d'authentification <br/>
          - Ajout du token réel dans le localStorage <br/>
          - Modification des routes pour ajout du token automatique <br/>
          - Début désérialisation du token dans page de Profil <br/>
        </p> <br/>

        <h1 className="text-black text-2xl font-bold">Note de version - v0.5</h1>
        <p>
          - Mise en place route GET emplacements pour administration <br/>
          - Mise en place route POST emplacements pour administration <br/>
          - Correction requete CORS
        </p> <br/>

        <h1 className="text-black text-2xl font-bold">Note de version - v0.4</h1>
        <p>
          - Revue de l'architecture de la plateforme <br/>
          - Ajout administration des machines <br/>
          - Ajout administration des emplacements <br/>
        </p> <br/>

        <h1 className="text-black text-2xl font-bold">Note de version - v0.3</h1>
        <p>
          - Ajout Gestion des comptes utilisateur <br/>
          - Ajout Gestion des fournisseurs <br/>
          - Ajout Gestion des fabriquants  
        </p> <br/>


        <h1 className="text-black text-2xl font-bold">Note de version - v0.2</h1>
        <p>
          - Mise en place page de connexion utilisateur <br/>
          - Mise en place sécurisation de l'accès à l'application <br/>
          - Mise en place page de Profil <br/>
          - Mise en place bouton de déconnexion <br/>
          
        </p> <br/>



        <h1 className="text-black text-2xl font-bold">Note de version - v0.1</h1>
        <p>
          - Initalialisation du Projet <br/>
          - Mise en place architecture simple <br/>
          - Mise en place menu de navigation global
        </p>
      </div>
    </div>
  )
}
