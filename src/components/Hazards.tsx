// src/components/Hazards.tsx
import React, { useEffect, useState } from 'react';
import { fetchHazards } from '../services/hazardService'; // Make sure the service exists

interface Hazard {
  name: string;
  type: string;
  coordinates: [number, number];
  severity: string;
}

const Hazards: React.FC = () => {
  const [hazards, setHazards] = useState<Hazard[]>([]);

  useEffect(() => {
    const loadHazards = async () => {
      try {
        const data = await fetchHazards(); // Fetch hazards data from the API
        setHazards(data);
      } catch (error) {
        console.error('Error loading hazards data', error);
      }
    };

    loadHazards();
  }, []);

  return (
    <div>
      <h3>Recent Hazardous Events</h3>
      {hazards.length > 0 ? (
        <ul>
          {hazards.map((hazard, index) => (
            <li key={index}>
              <strong>{hazard.name}</strong> - {hazard.type} (Severity: {hazard.severity})
            </li>
          ))}
        </ul>
      ) : (
        <p>No hazard data available.</p>
      )}
    </div>
  );
};

export default Hazards;

