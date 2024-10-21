// src/services/countryService.ts
import axios from 'axios';

export const fetchCountryInfo = async (countryCode: string) => {
  try {
    const response = await axios.get(`https://api.hungermapdata.org/v2/info/country/${countryCode}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching country information', error);
    throw error;
  }
};

