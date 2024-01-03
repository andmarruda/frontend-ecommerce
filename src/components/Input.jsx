import React from "react";

const Input = ({name, id, value, ...attributes}) => {
    return (
        <input name={name} id={id} {...attributes} />
    )
}

export default Input;