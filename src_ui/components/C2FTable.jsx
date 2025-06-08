import React from 'react';
import '../styles/C2FTable.css';

const C2FTable = () => {
    const celsiusValues = [50, 100, 150, 200, 250, 300];

    const convertToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

    return (
        <div className="table-container">
            <h1>Celsius to Fahrenheit Conversion</h1>
            <table>
                <thead>
                    <tr>
                        <th>Celsius (°C)</th>
                        <th>Fahrenheit (°F)</th>
                    </tr>
                </thead>
                <tbody>
                    {celsiusValues.map((c) => (
                        <tr key={c}>
                            <td>{c}</td>
                            <td>{convertToFahrenheit(c).toFixed(1)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default C2FTable;
