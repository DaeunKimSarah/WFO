// src/tests/CountryInfo.test.tsx
import React from 'react'; // React 명시적 import 추가
import { render, screen } from '@testing-library/react';
import CountryInfo from '../components/CountryInfo';
import '@testing-library/jest-dom';
import * as countryService from '../services/countryService';

// Mock the countryService to prevent real API calls
jest.mock('../services/countryService');

test('renders CountryInfo component with loading state', () => {
  render(<CountryInfo countryCode="AFG" />);
  const loadingElement = screen.getByText(/loading/i);
  expect(loadingElement).toBeInTheDocument();
});

test('renders CountryInfo component with country data', async () => {
  const mockCountryData = {
    name: 'Afghanistan',
    population: 38928341,
    incomeGroup: 'Low income',
  };

  (countryService.fetchCountryInfo as jest.Mock).mockResolvedValue(mockCountryData);

  render(<CountryInfo countryCode="AFG" />);

  const countryNameElement = await screen.findByText(/Afghanistan/i);
  expect(countryNameElement).toBeInTheDocument();

  const populationElement = await screen.findByText(/Population: 38928341/i);
  expect(populationElement).toBeInTheDocument();
});

