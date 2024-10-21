import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface IPCProps {
  countryCode: string;
}

const IPCPhases: React.FC<IPCProps> = ({ countryCode }) => {
  const [ipcData, setIpcData] = useState<any>(null);

  useEffect(() => {
    const fetchIPCData = async () => {
      try {
        const response = await axios.get(`https://api.hungermapdata.org/v1/ipc/peaks/${countryCode}`);
        setIpcData(response.data);
      } catch (error) {
        console.error("Error fetching IPC phases", error);
      }
    };

    if (countryCode) fetchIPCData();
  }, [countryCode]);

  return (
    <div>
      {ipcData ? (
        <div>
          <h3>IPC Phases</h3>
          <p>Phase 1 (Minimal): {ipcData.phase1}</p>
          <p>Phase 2 (Stressed): {ipcData.phase2}</p>
          <p>Phase 3 (Crisis): {ipcData.phase3}</p>
          <p>Phase 4 (Emergency): {ipcData.phase4}</p>
          <p>Phase 5 (Famine): {ipcData.phase5}</p>
        </div>
      ) : (
        <p>Loading IPC phases...</p>
      )}
    </div>
  );
};

export default IPCPhases;

