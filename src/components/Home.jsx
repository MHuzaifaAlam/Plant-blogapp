import { useState,useEffect } from "react";
import plants from "../data/plants.jsx";

export default function Homepage() {
    const[plantsData, setPlantsData] = useState([]);

    useEffect(() => {
        setPlantsData(plants);  }, []);

    return (
        <>
    <div className="min-h-screen bg-green-700 p-6 mb-0 pb-0">
      <h1 className="text-3xl font-bold mb-6 text-center text-yellow-400">
        Blogs
      </h1>

      <div className="flex flex-wrap gap-6 justify-center">
        {plantsData.map((plant) => (
          <div
            key={plant.id}
            className="bg-green-600 text-white rounded-lg shadow-md p-4 w-72 hover:scale-105 transition-transform duration-300">
            <img
              src={plant.image}
              alt={plant.name}
              className="w-full  h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2 text-yellow-300">
              {plant.name}
            </h2>
            <p className="text-white-400 mt-1">{plant.description}</p>
          </div>
        ))}
      </div>
    </div>

        </>
        );
}   