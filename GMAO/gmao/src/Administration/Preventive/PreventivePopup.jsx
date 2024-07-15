import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PopupForm = ({ onClose }) => {
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('')
  const [intervalles, setIntervalles] =useState('')
  const [selectedIntervalleId, setSelectedIntervalleId] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


    // Récupération des intervalles
    useEffect(() => {
        const fetchIntervalles = async () => {
          try {
            const accessToken = localStorage.getItem('access_token');
              const response = await axios.get('http://localhost:8080/api/intervalle', {
                headers: {
                  'Accept': '*/*',
                  'Authorization': `Bearer ${accessToken}`,
                },
              });
            const intervalles = response.data;
            setIntervalles(intervalles); // Update fournisseurs state with fetched data
          } catch (error) {
            console.error('Erreur lors de la récupération des emplacements:', error);
          }
        };
      
        fetchIntervalles();
      }, []);





    // Envoi données formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();

    const accessToken = localStorage.getItem('access_token');

    setIsLoading(true); 
    setError(null); 

    try {
      const response = await axios.post('http://localhost:8080/api/fournisseur', {
        titre: titre,
        description: description,
        intervalleId: selectedIntervalleId
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
      <h2 className="text-gray-800 text-lg font-bold mb-4">Créer une nouvelle intervention préventive</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="titre" className="block text-gray-700">Titre</label>
          <input
            type="text"
            id="titre"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="description" className="block text-gray-700">Description</label>
          <input
            type="text"
            id="description"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <label htmlFor="intervalle" className="block text-gray-700">
            Intervalle
            </label>
            <select
                id="intervalle"
                value={selectedIntervalleId}
                onChange={(e) => setSelectedIntervalleId(e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                {intervalles.map((intervalle) => (
                    <option key={intervalles.id} value={intervalles.id}>
                    {intervalles.nbJours}
                    </option>
                ))}
                </select>




        <div className="flex justify-center items-center mt-2">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            disabled={isLoading} // Disable submit button while loading
          >
            {isLoading ? 'Envoi...' : 'Créer'}
          </button>

          <button
            type="button"
            className="bg-red-500 text-gray-700 px-4 py-2 rounded-md"
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

export default PopupForm;
