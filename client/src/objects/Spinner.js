import { useState } from 'react';

function Spinner() {

    const [value, setValue] = useState(1);

    const inc = () => {
        setValue(prev => Math.min(prev + 1, 20)); // máximo 20
    };

    const dec = () => {
        setValue(prev => Math.max(prev - 1, 1)); // mínimo 1
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
