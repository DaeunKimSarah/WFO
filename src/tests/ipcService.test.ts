// src/tests/ipcService.test.ts
import { fetchIPCPhases } from '../services/ipcService';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('fetchIPCPhases returns data', async () => {
  const mockData = { phase1: 50, phase2: 30, phase3: 15, phase4: 5, phase5: 0 };
  
  mockedAxios.get.mockResolvedValue({ data: mockData });
  
  const result = await fetchIPCPhases('AFG');
  
  expect(result).toEqual(mockData);
  expect(mockedAxios.get).toHaveBeenCalledWith('https://api.hungermapdata.org/v1/ipc/peaks/AFG');
});

