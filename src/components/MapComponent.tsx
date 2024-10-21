// src/components/MapComponent.tsx
import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import africaShape from '../data/africa_shape.json'; // GeoJSON 데이터 import

// GeoData의 타입 정의
interface MapProps {
  geoData: any; // 여기서 'any' 대신 구체적인 타입을 정의하는 것이 좋습니다.
}

const MapComponent: React.FC<MapProps> = ({ geoData }) => {
  return (
    <MapContainer style={{ height: '100vh', width: '100%' }} center={[0, 0]} zoom={2}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* GeoJSON 데이터 사용 */}
      <GeoJSON data={africaShape} />
    </MapContainer>
  );
};

export default MapComponent;

