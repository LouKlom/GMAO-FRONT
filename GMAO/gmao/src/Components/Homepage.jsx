import React from 'react';
import Navbar from './Navbar';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col items-center pt-20">
        <div className="bg-white p-8 mt-10 mx-4 md:mx-10 lg:mx-20 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 w-full md:w-3/4 lg:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Bienvenue sur GMAO</h1>
          <img src='./GMAO_LOGO.png' alt='Logo' className="mx-auto w-70 h-70 rounded-full shadow-md" /> <br/>
          <p className="text-gray-700">
          GMAO est un système informatique utilisé pour gérer et optimiser les activités de maintenance dans une organisation. Elle vise à améliorer la fiabilité des équipements, à réduire les coûts de maintenance et à prolonger la durée de vie des actifs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
