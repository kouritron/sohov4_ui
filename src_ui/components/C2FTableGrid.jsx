import React from 'react';
import '../styles/S4Grid.css';


const C2FTableGrid = () => {
    const celsius_values = [60, 80, 100, 120, 140, 160, 180, 200, 220, 240];

    const celsius2fahrenheit = (celsius) => (celsius * 9) / 5 + 32;

    return (
        <div className="s4_grid_small s4_border_dark s4_mono_text s4_centered_text">
            <div className="separator_line s4_row" />
            <div className="s4_row"> <h1 className="col_5_5  s4_bold">Celsius 2 Fahrenheit</h1> </div>
            <div className="separator_line s4_row" />
            <div className="s4_row s4_centered_content">
                <h3 className="col_9_20  ">Celsius</h3>
                <h3 className="col_1_20  ">|</h3>
                <h3 className="col_9_20  ">Fahrenheit</h3>
             </div>
            <div className="separator_line s4_row" />

            {celsius_values.map((c, i) => (
                <React.Fragment key={c}>
                    <div className="s4_row">
                        <div className="col_10_20 s4_padded_10  ">{c}</div>
                        <div className="col_10_20 s4_padded_10  ">{celsius2fahrenheit(c)}</div>
                    </div>
                    {i !== (celsius_values.length - 1) && (
                        <div className="separator_line_thin s4_row" />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default C2FTableGrid;

