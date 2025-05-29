import React, { useEffect, useRef } from 'react';

function ClassText({ text, id, setText }) {
    const textareaRef = useRef(null);

    useEffect(() => {
        const textarea = textareaRef.current;
            if (textarea) {
                const maxHeight = window.innerHeight * 0.65;
                const newHeight = Math.min(textarea.scrollHeight, maxHeight);
                textarea.style.height = 'auto';
                textarea.style.height = `${newHeight}px`; 
            }
    }, [text]); // roda sempre que o texto mudar

    return (
        <textarea
            ref={textareaRef}
            value={text}
            readOnly 
            onChange={(e) => setText(e.target.value)}
            id={id}
            style={{
                overflowY: 'auto',
                resize: 'none',
                width: '100%',
                fontSize: '13px',
                padding: '0px',
                border: 'none',
                outline: 'none',
                background: 'transparent',
            }}
        />
    );
}

export default ClassText;
