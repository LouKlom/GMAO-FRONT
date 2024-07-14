import React from 'react';
import Navbar from '../Components/Navbar';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col items-center pt-6">
        <div className="bg-white p-8 mt-10 mx-4 md:mx-10 lg:mx-20 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Interventions préventives</h1>
          <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, similique in, eos illum, a impedit reprehenderit inventore incidunt eveniet quibusdam earum rem ratione aperiam animi et? Facere voluptate atque aliquam.</p>
        </div>

        <div className="bg-white p-8 mt-10 mx-4 md:mx-10 lg:mx-20 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Mes incidents en cours</h1>
          <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, similique in, eos illum, a impedit reprehenderit inventore incidunt eveniet quibusdam earum rem ratione aperiam animi et? Facere voluptate atque aliquam.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
