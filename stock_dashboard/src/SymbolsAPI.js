// symbolsAPI.js

import React, { useEffect, useState } from 'react';
import { symbolsApiUrlConstant } from './constants';
import './SymbolsAPI.css';

const Symbols = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState({}); 
  useEffect(() => {
    // Add your symbols API logic here
    fetch(symbolsApiUrlConstant)
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData);
        setData(jsonData);
        if (jsonData.length > 0) {
          setSelectedItem(jsonData[0]);
        }
      })
      .catch((error) => {
        return error
        // console.error('Error fetching data:', error);
      });
  }, []);

  // Check if data is an array before using map
  if (!Array.isArray(data)) {
    return <p>Loading data...</p>;
  }

  // Extracting symbols and names for the dropdown
  const dropdownOptions = data.map((item) => (
    <option key={item.symbol} value={JSON.stringify(item)}>
      {item.name}
    </option>
  ));

  const handleDropdownChange = (event) => {
    const selectedItemValue = event.target.value;
    setSelectedItem(JSON.parse(selectedItemValue));
  };

  // Render symbols data JSX here
  return (
    <div className="symbols-container">
      <h2>Select Stock to See Details</h2>
      <select onChange={handleDropdownChange} className="symbols-dropdown">
        {dropdownOptions}
      </select>
      {selectedItem && (
        <div>
          <h2>Stock Details</h2>
          <table className="details-table">
            <tbody>
              {Object.entries(selectedItem).map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Symbols;
