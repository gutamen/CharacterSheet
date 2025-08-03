import { useState } from 'react';

function SpinnerFloat({minLimit = 0, maxLimit = 100, precision = 2}) {
    let valueSpin = parseInt((minLimit + maxLimit) / 2);

    const [value, setValue] = useState(formatNumber(valueSpin));
    const [trueValue, setTrueValue] = useState(valueSpin);


    const inc = () => {
        let next = Math.min(trueValue + 1, maxLimit);
        setValue(formatNumber(next)); 
        setTrueValue(next);
    };

    const dec = () => {
        let next = Math.max(trueValue - 1, minLimit);
        setValue(formatNumber(next)); 
        setTrueValue(next);
    };
    
    const buttonStyle = {
        height: '35px',
        width: '35px',
        fontWeight: 'bold',
        textAlign: 'center'
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button style={buttonStyle} onClick={dec}>-</button>

            <textarea
                style={{
                    border: 'none',
                    width: '45px',
                    fontFamily: 'cursive', 
                    fontWeight: 'bold',
                    resize: 'none',
                    textAlign: 'center'
                }}
                value={value}
                readOnly rows={1}
            />

            <button style={buttonStyle} onClick={inc}>+</button>
        </div>
    );

}

function formatNumber(value, decimal = 2) {
    const str = value.toString().padStart(decimal + 1, '0'); 
    const part1 = str.slice(0, -decimal); 
    const part2 = str.slice(-decimal);    

    return `${part1},${part2}`;
}

export default SpinnerFloat;
