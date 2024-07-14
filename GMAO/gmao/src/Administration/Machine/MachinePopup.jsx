import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MachinePopup = ({ onClose }) => {
  const [selectedFournisseurId, setSelectedFournisseurId] = useState('');
  const [selectedFabricantId, setSelectedFabricantId] = useState('');
  const [selectedEmplacementId, setSelectedEmplacementId] =useState('');
  const [modele, setModele] = useState('');
  const [fournisseurs, setFournisseurs] = useState([]);
  const [fabricants, setFabricants] = useState([]);
  const [emplacements, setEmplacements] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Construction liste de fournisseurs
  useEffect(() => {
    const fetchFournisseurs = async () => {
      try {
        const accessToken = localStorage.getItem('access_token');
          const response = await axios.get('http://localhost:8080/api/fournisseur', {
            headers: {
              'Accept': '*/*',
              'Authorization': `Bearer ${accessToken}`,
            },
          });
        const fournisseurs = response.data;
        setFournisseurs(fournisseurs); // Update fournisseurs state with fetched data
      } catch (error) {
        console.error('Erreur lors de la récupération des fournisseurs:', error);
      }
    };
  
    fetchFournisseurs();
  }, []);


  // Construction liste Fabricants
  useEffect(() => {
    const fetchFabricants = async () => {
      try {
        const accessToken = localStorage.getItem('access_token');
          const response = await axios.get('http://localhost:8080/api/fabricant', {
            headers: {
              'Accept': '*/*',
              'Authorization': `Bearer ${accessToken}`,
            },
          });
        const fabricants = response.data;
        setFabricants(fabricants); // Update fournisseurs state with fetched data
      } catch (error) {
        console.error('Erreur lors de la récupération des fabricants:', error);
      }
    };
  
    fetchFabricants();
  }, []);

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
        modele: modele,
        actif: true,
        emplacementId: selectedEmplacementId,
        fournisseurId: selectedFournisseurId,
        fabricantID: selectedFabricantId,
      };

      console.log(formData)

    setIsLoading(true); 
    setError(null); 

    try {
      const accessToken = localStorage.getItem('access_token');
      const response = await axios.post('http://localhost:8080/api/machine', {
        "modele": modele,
        "actif": 1,
        "emplacementId": selectedEmplacementId,
        "fournisseurId": selectedFournisseurId,
        "fabricantId": selectedFabricantId
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

    window.location.reload()
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-gray-800 text-lg font-bold mb-4">Créer une nouvelle pièce</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="modele" className="block text-gray-700">
            Modele
          </label>
          <input
            type="text"
            id="modele"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={modele}
            onChange={(e) => setModele(e.target.value)}
          />

          <label htmlFor="fournisseur" className="block text-gray-700">
            Fournisseur
          </label>
            <select
                id="fournisseur"
                value={selectedFournisseurId}
                onChange={(e) => setSelectedFournisseurId(e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                {fournisseurs.map((fournisseur) => (
                    <option key={fournisseur.id} value={fournisseur.id}>
                    {fournisseur.nom}
                    </option>
                ))}
                </select>

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
            

            <label htmlFor="fabricant" className="block text-gray-700">
            Fabricant
            </label>
                <select
                    id="fabricant"
                    value={selectedFabricantId}
                    onChange={(e) => setSelectedFabricantId(e.target.value)}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                    {fabricants.map((fabricant) => (
                        <option key={fabricant.id} value={fabricant.id}>
                        {fabricant.nom}
                        </option>
                    ))}
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

export default MachinePopup;