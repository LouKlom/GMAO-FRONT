import React, { useState } from 'react';
import axios from 'axios';

const PopupForm = ({ onClose }) => {
  const [nom, setNom] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const accessToken = localStorage.getItem('access_token');

    setIsLoading(true); 
    setError(null); 

    try {
      const response = await axios.post('http://localhost:8080/api/fabricant', {
        nom: nom, 
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

  const handleChange = (event) => {
    setNom(event.target.value);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-gray-800 text-lg font-bold mb-4">Créer un nouveau Fabricant</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="nom" className="block text-gray-700">Libellé</label>
          <input
            type="text"
            id="nom"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={nom}
            onChange={handleChange}
          />
        </div>

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
