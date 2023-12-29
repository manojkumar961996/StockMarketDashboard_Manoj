import React, { useEffect, useState } from 'react';
import apiKey from './constants';
import { Bar } from 'react-chartjs-2';

const DashboardPage = () => {
    const [data, setData] = useState({});
    const [selectedItem, setSelectedItem] = useState(null);

    const apiKeyConstant = apiKey;
    const symbolsApiUrl = `https://api.iex.cloud/v1/data/core/REF_DATA?token=${apiKeyConstant}`;

    useEffect(() => {
        fetch(symbolsApiUrl)
            .then((response) => response.json())
            .then((jsonData) => {
                console.log(jsonData);
                setData(jsonData);
                if (jsonData.length > 0) {
                    setSelectedItem(jsonData[0]);
                  }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [symbolsApiUrl]);

    // Check if data is an array before using map
    if (!Array.isArray(data)) {
        return (
            <div>
                <p>Loading data...</p>
            </div>
        );
    }

    // Extracting symbols and names for the dropdown
    const dropdownOptions = data.map((item) => (
        <option key={item.symbol} value={JSON.stringify(item)}>
            {item.name}
        </option>
    ));
    const chartData = {
        labels: [selectedItem?.symbol || ''],
        datasets: [
            {
                label: 'Stock Names',
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.8)',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: [selectedItem?.name?.length || 0], // You can use any property of the data for the chart
            },
        ],
    };
    const handleDropdownChange = (event) => {
        const selectedItemValue = event.target.value;
        setSelectedItem(JSON.parse(selectedItemValue));
    };

    console.log("data.length --> ", data.length)

    return (
        <div>
            <p>Inside DashboardPage</p>
            <select value={JSON.stringify(selectedItem)} onChange={handleDropdownChange}>
                {dropdownOptions}
            </select>
            <p>{JSON.stringify(selectedItem)}</p>
        </div>
    );
};

export default DashboardPage;
