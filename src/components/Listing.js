// src/Listings.js
import React, { useEffect, useState } from 'react';
import { getListings } from '../api/loftyService.js';

const Listings = () => {
    console.log('listing rendered')
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const data = await getListings();
        setListings(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Listings</h1>
      <ul>
        {listings.map((listing) => (
          <li key={listing.listingId}>
            {listing.buildingName || 'No Name'} - {listing.buildingAddress}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;
