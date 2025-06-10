import React from 'react';
import '../styles/S4Grid.css';


const C2FTableGrid = () => {
    const celsius_values = [60, 80, 100, 120, 140, 160, 180, 200, 220, 240];

    const celsius2fahrenheit = (celsius) => (celsius * 9) / 5 + 32;

    return (
        <div className="s4_grid_small s4_border7_dark s4_mono_text s4_centered_text">
            <div className="s4_sep_line14 s4_row" />
            <div className="s4_row s4_center_justified">
                <div className="col_50  s4_text_large s4_text_bold ">Celsius</div>
                <div className="col_50  s4_text_large s4_text_bold ">Fahrenheit</div>
             </div>
            <div className="s4_sep_line14 s4_row" />

            {celsius_values.map((c, i) => (
                <React.Fragment key={c}>
                    <div className="s4_row">
                        <div className="col_50 s4_padded_10 s4_text_medium ">{c}</div>
                        <div className="col_50 s4_padded_10 s4_text_medium ">{celsius2fahrenheit(c)}</div>
                    </div>
                    {i !== (celsius_values.length - 1) && (
                        <div className="s4_sep_line7 s4_row" />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default C2FTableGrid;

