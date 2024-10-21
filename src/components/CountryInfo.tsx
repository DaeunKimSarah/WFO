import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface CountryInfoProps {
  countryCode: string;
}

const CountryInfo: React.FC<CountryInfoProps> = ({ countryCode }) => {
  const [countryData, setCountryData] = useState<any>(null);

  useEffect(() => {
    const fetchCountryInfo = async () => {
      try {
        const response = await axios.get(`https://api.hungermapdata.org/v2/info/country/${countryCode}`);
        setCountryData(response.data);
      } catch (error) {
        console.error("Error fetching country info", error);
      }
    };

    if (countryCode) fetchCountryInfo();
  }, [countryCode]);

  return (
    <div>
      {countryData ? (
        <div>
          <h2>{countryData.name}</h2>
          <p>Population: {countryData.population}</p>
          <p>Income Group: {countryData.incomeGroup}</p>
          {/* Display more information as needed */}
        </div>
      ) : (
        <p>Loading country information...</p>
      )}
    </div>
  );
};

export default CountryInfo;

