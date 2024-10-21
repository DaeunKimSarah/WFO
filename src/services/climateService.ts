// src/services/climateService.ts
import axios from 'axios';

export const fetchClimateData = async (countryCode: string) => {
  try {
    const response = await axios.get(`https://api.hungermapdata.org/v2/climate/country/${countryCode}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching climate data', error);
    throw error;
  }
};

