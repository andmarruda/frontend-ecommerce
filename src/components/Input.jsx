import React from "react";

const Input = ({name, value, ...attributes}) => {
    const [inputValue, setInputValue] = React.useState(value ?? '');
    return (
        <input name={name} {...attributes} value={inputValue} onChange={({target}) => setInputValue(target.value)} />
    )
}

export default Input;