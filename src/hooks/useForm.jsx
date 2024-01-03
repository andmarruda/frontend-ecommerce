import React from "react";

const validations = {

}

const useForm = (validationType) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState('');

    const validate = (type) => {
        if(type === false) return true;
        if(value.length === 0) {
            setError('Preencha um valor');
            return false;
        }

        if(validations[validationType] && !validations[validationType].regex.test(value)) {
            setError(validations[validationType].message);
            return false;
        }

        setError(null);
        return true;
    }

    const onChange = ({target}) => {
        if(error) validate(target.value);
        setValue(target.value);
    }

    return {
        value,
        setValue,
        error,
        onChange,
        validate: () => validate(value),
        onBlur: () => validate(value)
    }
};

export default useForm;