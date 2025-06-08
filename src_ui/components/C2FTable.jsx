import React from 'react';
import '../styles/C2FTable.css';

const C2FTable = () => {
    const celsiusValues = [50, 100, 150, 200, 250, 300];

    const convertToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

    return (
        <div className="c2f-table-container">
            <h1 className="c2f-table-title">Celsius to Fahrenheit</h1>
            <table>
                <thead>
                    <tr>
                        <th>Celsius</th>
                        <th>Fahrenheit</th>
                    </tr>
                </thead>
                <tbody>
                    {celsiusValues.map((c) => (
                        <tr key={c}>
                            <td>{c}</td>
                            <td>{Math.round(convertToFahrenheit(c))}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default C2FTable;
