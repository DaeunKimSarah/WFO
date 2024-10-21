// src/services/ipcService.ts
import axios from 'axios';

export const fetchIPCPhases = async (countryCode: string) => {
  try {
    const response = await axios.get(`https://api.hungermapdata.org/v1/ipc/peaks/${countryCode}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching IPC phases data', error);
    throw error;
  }
};

