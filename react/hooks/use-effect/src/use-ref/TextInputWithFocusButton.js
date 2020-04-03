import React, {useRef} from 'react';

function TextInputWithFocusButton() {

    const inputEl = useRef(null);

    const setFocus = e => {
        inputEl.current.focus();
    }

    return (
        <div>
            <input ref={inputEl} type="text" />
            <button onClick={setFocus}>Set Focus</button>
        </div>
    );
};

export default TextInputWithFocusButton;