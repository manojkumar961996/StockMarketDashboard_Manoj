// historicalPricesAPI.js

import React, { useEffect, useState } from 'react';
import { historicalPricesAPI } from './constants';
import './HistoricalPricesAPI.css'

const HistoricalPricesAPI = (Toggle) => {
  const [historicData, setHistoricData] = useState([]);

  useEffect(() => {
    fetch(historicalPricesAPI)
      .then((response) => response.json())
      .then((historicDataApiResponse) => {
        console.log("historicDataApiResponse --> ", historicDataApiResponse);
        setHistoricData(historicDataApiResponse?.data > 0);
      })
      .catch((err) => console.log("err --> ", err));
  }, []);

  const { open, close } = historicData;
  const change = Math.abs(close - open);
  const percentChange = (Math.abs(change) / open) * 100;

  // Render JSX based on the condition
  return (
    <div className="px-3">
      <div className="container-fluid">
        <div className="row g-3 my-2">
          <div className="col-md-3 p-1">
            <div className="card">
              <div>
                <h3 className="fs-2">{open}</h3>
                <p className="fs-5">Open Price</p>
              </div>
              <i className="bi bi-currency-dollar p-3 fs-1"></i>
            </div>
          </div>
          <div className="col-md-3 p-1">
            <div className="card">
              <div>
                <h3 className="fs-2">{close}</h3>{" "}
                <p className="fs-5">Close Price</p>
              </div>
              <i className="bi bi-currency-dollar p-3 fs-1"></i>
            </div>
          </div>
          <div className="col-md-3 p-1">
            <div className="card">
              <div>
                <h3 className="fs-2">{change.toFixed(2)}</h3>{" "}
                <p className="fs-5">Change in Price</p>
              </div>
              <i
                className={`bi ${
                  close > open ? "bi-graph-up-arrow" : "bi-graph-down-arrow"
                } fs-1 ${
                  close > open ? "text-green-600" : "text-red-600"
                }`}
              ></i>
            </div>
          </div>
          <div className="col-md-3 p-1">
            <div className="card">
              <div>
                <h3 className="fs-2">{percentChange.toFixed(2)}</h3>{" "}
                <p className="fs-5">Percentage</p>
              </div>
              <i class="bi bi-percent p-3 fs-1"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-white fs-4">Stocks</h3>
          <form className="search-form" role="search">
            <input
              className="input"
              type="search"
              placeholder="Search stock"
              aria-label="Search"
            />
            <button
              className="button search-button"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>

        <table className="table stock-table">
          <thead>
            <tr>
              <th scope="col"></th> <th scope="col">Stock</th>
              <th scope="col">Stock Symbol</th> <th scope="col">value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th> <td>Jacob</td> <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th> <td>Larry</td> <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">4</th> <td>Larry</td> <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">5</th> <td>Larry</td> <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">6</th> <td>Larry</td> <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoricalPricesAPI;
