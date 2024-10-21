// src/App.tsx
import React, { useState, useEffect } from 'react';
import MapComponent from './components/MapComponent';
import CountryInfo from './components/CountryInfo';
import IPCPhases from './components/Insights';
import Hazards from './components/Hazards';  

const App: React.FC = () => {
  const [geoData, setGeoData] = useState<any>(null);
  const selectedCountry = 'AFG'; // Keep only the selectedCountry variable

  useEffect(() => {
    const fetchGeoData = async () => {
      try {
        const response = await fetch('../public/africa_shape.json');
        const data = await response.json();
        setGeoData(data);
      } catch (error) {
        console.error('Error fetching geo data', error);
      }
    };
    
    fetchGeoData();
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <MapComponent geoData={geoData} />
      <div style={{ width: '400px', padding: '20px' }}>
        <CountryInfo countryCode={selectedCountry} />
        <IPCPhases countryCode={selectedCountry} />
        <Hazards />
      </div>
    </div>
  );
};

export default App;

