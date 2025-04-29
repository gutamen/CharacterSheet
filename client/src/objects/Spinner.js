import { useState } from 'react';

function Spinner({valueList}) {

    const [value, setValue] = useState(10);

    const inc = () => {
        let next = Math.min(value + 1, 20);
        setValue(next); // máximo 20
        valueList[0] = next;
    };

    const dec = () => {
        let next = Math.max(value - 1, 1);
        setValue(next); // mínimo 1
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
