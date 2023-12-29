import React, { useState } from 'react';
import HistoricalPrices from './HistoricalPricesAPI';
import Symbols from './SymbolsAPI';
import NavigationBar from './NavigationBar';

const DashboardPage = () => {
  const [selectedItem, setSelectedItem] = useState({});

  return (
    <div>
    <NavigationBar />
      <div className="dashboard-container">
      {/* Render Symbols component */}
      <Symbols setSelectedItem={setSelectedItem} />
      </div>
      {/* <p>{JSON.stringify(selectedItem)}</p> */}

      {/* Render HistoricalPrices component conditionally */}
      {selectedItem && <HistoricalPrices />}
    </div>
  );
};

export default DashboardPage;
