"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Packages() {
  const [packages, setPackages] = useState([]);
  const [sortOption, setSortOption] = useState('price');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    if (window.confirm("Are you sure you want to book now?")) {
      setShowPopup(true); 
    }
  };

  const closePopup = () => {
    setShowPopup(false); 
    if (window.history.length > 1) {
      window.history.back(); 
    } else {
      window.location.href = " "; 
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await axios.get(`https://travelling-backend-wg50.onrender.com/api/packages`);
      setPackages(response.data);
    } catch (err) {
      setError("Error fetching packages. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const sortedPackages = [...packages]
    .filter((pkg) =>
      pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.location.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) =>
      sortOption === 'price' ? a.price - b.price : a.location.localeCompare(b.location)
    );

  return (
    <div className="packages-list max-w-4xl mx-auto mt-10 p-4">
   
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="text"
          placeholder="Search by name or location"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border border-green-500 rounded w-full md:w-1/2 focus:outline-none focus:border-blue-500"
        />
        <select
          onChange={(e) => setSortOption(e.target.value)}
          className="p-2 border border-green-500 rounded focus:outline-none focus:border-blue-500"
        >
          <option value="price">Sort by Price</option>
          <option value="location">Sort by Location</option>
        </select>
      </div>

      {loading && <p className="text-center text-gray-500">Loading packages...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sortedPackages.length > 0 ? (
          sortedPackages.map((pkg) => (
            <div key={pkg._id} className="package-card border p-4 rounded shadow shadow-green-500 transition-transform hover:scale-105 duration-150">
              <h2 className="text-lg font-bold mb-1">{pkg.name}</h2>
              <p className="text-gray-600">{pkg.location}</p>
              <p className="text-blue-600 font-semibold">Rs.{pkg.price}</p>
              <p className="text-gray-700">{pkg.description}</p>
              <button
                onClick={handleClick}
                className="mt-4 bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600 hover:scale-110 duration-150"
              >
                Book Now
              </button>
            </div>
          ))
        ) : (
          !loading && <p className="text-center text-gray-500">No packages found.</p>
        )}
      </div>

      
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg text-center">
            <p>Booking confirmed!</p>
            <button
              onClick={closePopup}
              className="mt-4 bg-green-500 text-white py-1 px-3 rounded hover:bg-green-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

