import React, {useState, useEffect} from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';



export default function Piece() {
  const [data, setData] = useState([]);


     // Récupération Piece
    useEffect(() => {
      const fetchData = async () => {
        const accessToken = localStorage.getItem('access_token');
        const response = await axios.get('http://localhost:8080/api/piece', {
          headers: {
            'Accept': '*/*',
            'Authorization': `Bearer ${accessToken}`,
            
          },
        });
        const responseData = await response.data;
        setData(responseData);
      };
  
      fetchData();
    }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-gray-200 flex flex-col items-center pt-20">
        <div className="bg-white p-8 mt-10 mx-4 md:mx-10 lg:mx-20 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 w-full md:w-3/4 lg:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Stock de pièces</h1>
          <div className="container mx-auto">
            <table className="w-full bg-white shadow-md rounded-lg mt-8">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left p-2">ID</th>
                  <th className="text-left p-2">Modèle</th>
                  <th className="text-left p-2">Description</th>
                  <th className="text-left p-2">Fabricant</th>
                  <th className="text-left p-2">Fournisseur</th>
                  <th className="text-left p-2">Stock</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="p-2">{item.id}</td>
                    <td className="p-2">{item.nom}</td>
                    <td className="p-2">{item.description}</td>
                    <td className="p-2">{item.fabricant?.nom}</td> 
                    <td className="p-2">{item.fournisseur?.nom}</td>
                    <td className="p-2">{item.stock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
