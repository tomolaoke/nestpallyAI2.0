import React, { useState } from 'react';
import axios from '../services/api';

const Matching = () => {
  const [userId, setUserId] = useState('');
  const [matches, setMatches] = useState([]);

  const findMatches = async () => {
    try {
      const response = await axios.post('/api/match', { userId });
      setMatches(response.data);
    } catch (error) {
      console.error('Error fetching matches:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Find Your Housemates</h1>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Enter your user ID"
          className="border p-2"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button onClick={findMatches} className="ml-2 bg-blue-600 text-white p-2">
          Find Matches
        </button>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-bold">Top Matches:</h2>
        <ul>
          {matches.map((match) => (
            <li key={match.user._id} className="mt-2">
              {match.user.name} - Compatibility: {(match.compatibility * 100).toFixed(2)}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Matching;
