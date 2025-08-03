import { useState } from 'react';

function Spinner({valueList, min = 1, max = 20}) {

    const [value, setValue] = useState(valueList[0]);

    const inc = () => {
        let next = Math.min(value + 1, max);
        setValue(next); 
        valueList[0] = next;
    };

    const dec = () => {
        let next = Math.max(value - 1, min);
        setValue(next); 
        valueList[0] = next;
    };
    
    const buttonStyle = {
        height: '35px',
        width: '35px',
        fontWeight: 'bold',
        textAlign: 'center'
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <button style={buttonStyle} onClick={dec}>-</button>

            <textarea
                style={{
                    border: 'none',
                    width: '30px',
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

export default Spinner;
