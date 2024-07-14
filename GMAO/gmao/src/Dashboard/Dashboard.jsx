import React from 'react'
import Navbar from '../Components/Navbar'


const Dashboard = () => {
  return (
    <div>
      <Navbar />

      <div className="bg-gray-100 p-4 mx-10 mt-10">
        <h1 className="text-black text-2xl font-bold">Interventions préventives</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, similique in, eos illum, a impedit reprehenderit inventore incidunt eveniet quibusdam earum rem ratione aperiam animi et? Facere voluptate atque aliquam.</p>
      </div>


      <div className="bg-gray-100 p-4 mx-10 mt-10">
        <h1 className="text-black text-2xl font-bold">Mes incidents en cours</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, similique in, eos illum, a impedit reprehenderit inventore incidunt eveniet quibusdam earum rem ratione aperiam animi et? Facere voluptate atque aliquam.</p>
      </div>


    </div>


    
  )
}

export default Dashboard