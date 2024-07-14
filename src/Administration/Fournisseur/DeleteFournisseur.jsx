import React, { useState } from 'react';
import axios from 'axios';

const PopupForm = ({ onClose, selectedItemId, selectedNom }) => {
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const accessToken = localStorage.getItem('access_token');

    setIsLoading(true); 
    setError(null); 

    try {
      const response = await axios.delete(`http://localhost:8080/api/fournisseur/${selectedItemId}`, {
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
      <h2 className="text-gray-800 text-lg font-bold mb-4">Supprimer un Fabricant</h2>

      <form onSubmit={handleSubmit}>
      <div className="mb-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
      <p>Attention ! Vous êtes sur le point de supprimer le fabricant suivant :</p>
      <br />
      <p>ID : {selectedItemId} <br/>Libellé: {selectedNom}</p>
    </div>
        <div className="flex justify-center items-center mt-2">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            disabled={isLoading} // Disable submit button while loading
          >
            {isLoading ? 'Envoi...' : 'Supprimer'}
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
