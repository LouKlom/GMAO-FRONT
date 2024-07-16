import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';


const IncidentPopup = ({ onClose }) => {
  const [selectedMachineId, setSelectedMachineId] = useState('');
  const [selectedStatutId, setSelectedStatutId] = useState('');
  const [selectedPanneId, setSelectedPanneId] = useState('');

  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('')
  const [machines, setMachines] = useState([]);
  const [pannes, setPannes] = useState([]);
  const [statuts, setStatuts] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const accessToken = localStorage.getItem('access_token');
  const decodedToken = jwtDecode(accessToken);

  const currentDate = new Date(); // Get the current date and time
  const formattedDate = currentDate.toISOString(); 

  // Construction liste de  MAchines
  useEffect(() => {
    const fetchMachines = async () => {
      try {
        const accessToken = localStorage.getItem('access_token');
          const response = await axios.get('http://localhost:8080/api/machine', {
            headers: {
              'Accept': '*/*',
              'Authorization': `Bearer ${accessToken}`,
            },
          });
        const machines = response.data;
        setMachines(machines); // Update fournisseurs state with fetched data
      } catch (error) {
        console.error('Erreur lors de la récupération des machines:', error);
      }
    };
  
    fetchMachines();
  }, []);


  // Construction liste de Statut
  useEffect(() => {
    const fetchStatuts = async () => {
      try {
        const accessToken = localStorage.getItem('access_token');
          const response = await axios.get('http://localhost:8080/api/statut', {
            headers: {
              'Accept': '*/*',
              'Authorization': `Bearer ${accessToken}`,
            },
          });
        const statuts = response.data;
        setStatuts(statuts); // Update fournisseurs state with fetched data
      } catch (error) {
        console.error('Erreur lors de la récupération des machines:', error);
      }
    };
  
    fetchStatuts();
  }, []);



    // construction liste Panne
    useEffect(() => {
      const fetchPannes = async () => {
        try {
          const accessToken = localStorage.getItem('access_token');
            const response = await axios.get('http://localhost:8080/api/type-panne', {
              headers: {
                'Accept': '*/*',
                'Authorization': `Bearer ${accessToken}`,
              },
            });
          const pannes = response.data;
          setPannes(pannes); // Update fournisseurs state with fetched data
        } catch (error) {
          console.error('Erreur lors de la récupération des pannes:', error);
        }
      };
    
      fetchPannes();
    }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    

    const formData = {
      "titre": titre,
        "description": description,
        "debut": formattedDate,
        "fin": "2024-07-16T13:26:11.305Z",
        "machineId": selectedMachineId,
        "statutId": selectedStatutId,
        "typePanneId": selectedPanneId,
        "utilisateurId": decodedToken.jti,
      };

      console.log(formData)

    setIsLoading(true); 
    setError(null); 

    try {
      const accessToken = localStorage.getItem('access_token');
      const response = await axios.post('http://localhost:8080/api/panne', {
        "titre": titre,
        "description": description,
        "debut": formattedDate,
        "fin": "2024-07-16T13:26:11.305Z",
        "machineId": selectedMachineId,
        "statutId": selectedStatutId,
        "typePanneId": selectedPanneId,
        "utilisateurId": decodedToken.jti,
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
          <label htmlFor="titre" className="block text-gray-700">
            Titre
          </label>
          <input
            type="text"
            id="titre"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
          />

          <label htmlFor="description" className="block text-gray-700">
            Description de la panne
          </label>
          <input
            type="text"
            id="description"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label htmlFor="machine" className="block text-gray-700">
            Machine
          </label>
            <select
                id="machine"
                value={selectedMachineId}
                onChange={(e) => setSelectedMachineId(e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                {machines.map((machine) => (
                    <option key={machine.id} value={machine.id}>
                    {machine.modele}
                    </option>
                ))}
                </select>
          
          <label htmlFor="statut" className="block text-gray-700">
            Statut
          </label>
            <select
                id="statut"
                value={selectedStatutId}
                onChange={(e) => setSelectedStatutId(e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                {statuts.map((statut) => (
                    <option key={statut.id} value={statut.id}>
                    {statut.statut}
                    </option>
                ))}
                </select>
          
          <label htmlFor="panne" className="block text-gray-700">
            Type de panne
          </label>
            <select
                id="panne"
                value={selectedPanneId}
                onChange={(e) => setSelectedPanneId(e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                {pannes.map((panne) => (
                    <option key={panne.id} value={panne.id}>
                    {panne.nom}
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
            className="bg-red-500 text-white px-4 py-2 rounded-md ml-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
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

export default IncidentPopup;