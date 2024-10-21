// src/services/hazardService.ts
import axios from 'axios';

export const fetchHazards = async () => {
  try {
    const response = await axios.get('https://api.hungermapdata.org/v1/climate/hazards');
    return response.data;
  } catch (error) {
    console.error('Error fetching hazards data', error);
    throw error;
  }
};

