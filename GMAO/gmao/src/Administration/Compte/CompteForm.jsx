import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ComptePopup = ({ onClose }) => {
  const [selectedEmplacementId, setSelectedEmplacementId] =useState('');
  const [emplacements, setEmplacements] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [role, setRole] = useState(null);
  const [nom, setNom] = useState(null);
  const [prenom, setPrenom] = useState(null);
  const [email, setEmail] = useState(null);
  const [telephone, setTelephone] = useState(null);
  const [password, setPassword] = useState(null);


  // Construction liste Emplacements
  useEffect(() => {
    const fetchEmplacements = async () => {
      try {
        const accessToken = localStorage.getItem('access_token');
          const response = await axios.get('http://localhost:8080/api/emplacement', {
            headers: {
              'Accept': '*/*',
              'Authorization': `Bearer ${accessToken}`,
            },
          });
        const emplacements = response.data;
        setEmplacements(emplacements); // Update fournisseurs state with fetched data
      } catch (error) {
        console.error('Erreur lors de la récupération des emplacements:', error);
      }
    };
  
    fetchEmplacements();
  }, []);



  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
        nom: nom,
        prenom: prenom,
        actif: true,
        emplacementId: selectedEmplacementId,
        telephone: telephone,
        email: email,
        password: password,
        role: role,
      };

      console.log(formData)

    setIsLoading(true); 
    setError(null); 

    try {
      const accessToken = localStorage.getItem('access_token');
      const response = await axios.post('http://localhost:8080/api/auth/register', {
        prenom: prenom,
        nom: nom,
        email: email,
        mdp: password,
        actif: true,
        telephone: telephone,
        emplacementId: selectedEmplacementId,
        role: role,
      }, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': '*/*',
          'Content-Type': 'application/json',
        },
      });


      console.log('Request successful:', response.data);
      
      onClose(); 
    } catch (error) {
      console.error('Request failed:', error);
      setError(error.message); 
    } finally {
      setIsLoading(false); 
    }

    //window.location.reload()
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-gray-800 text-lg font-bold mb-4">Créer un nouvel utilisateur</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-2">

          <label htmlFor="nom" className="block text-gray-700">
            Nom
          </label>
          <input
            type="text"
            id="nom"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />


          <label htmlFor="prenom" className="block text-gray-700">
            Prenom
          </label>
          <input
            type="text"
            id="prenom"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />

          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="telephone" className="block text-gray-700">
            Telephone
          </label>
          <input
            type="text"
            id="telephone"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />


          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="text"
            id="password"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />



            <label htmlFor="emplacement" className="block text-gray-700">
            Emplacement
            </label>
            <select
                id="emplacement"
                value={selectedEmplacementId}
                onChange={(e) => setSelectedEmplacementId(e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                {emplacements.map((emplacement) => (
                    <option key={emplacement.id} value={emplacement.id}>
                    {emplacement.emplacement}
                    </option>
                ))}
                </select>


              
            <label htmlFor="role" className="block text-gray-700">Rôle</label>
            <select
              id="role"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="UTILISATEUR">UTILISATEUR</option>
              <option value="ADMIN">ADMIN</option>
              <option value="TECH">TECH</option>
              <option value="RESP_TECH">RESP_TECH</option>
              <option value="RESP_PROD">RESP_PROD</option>
              <option value="CHEF_EQUIP">CHEF_EQUIP</option>
            </select>
            

        </div>

        <div className="flex justify-center items-center mt-2">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
            disabled={isLoading}
          >
            Créer
          </button>
          <button
            type="button"
            className="bg-gray-400 text-white px-4 py-2 rounded-md ml-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            onClick={onClose}
          >
            Annuler
          </button>
        </div>
      </form>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default ComptePopup;