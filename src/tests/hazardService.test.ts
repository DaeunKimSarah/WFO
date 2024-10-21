// src/tests/hazardService.test.ts
import { fetchHazards } from '../services/hazardService';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('fetchHazards returns data', async () => {
  const mockData = [
    { name: 'Flood', type: 'Natural', coordinates: [1, 2], severity: 'High' },
    { name: 'Drought', type: 'Natural', coordinates: [3, 4], severity: 'Severe' }
  ];
  
  mockedAxios.get.mockResolvedValue({ data: mockData });

  const result = await fetchHazards();

  expect(result).toEqual(mockData);
  expect(mockedAxios.get).toHaveBeenCalledWith('https://api.hungermapdata.org/v1/climate/hazards');
});

