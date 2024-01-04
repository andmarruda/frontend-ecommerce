import React from "react";

const useFetch = (url, options, pattern) => {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const Request = React.useCallback(async () => {
        setLoading(true);
        const response = await fetch(url, options);
        if(!response.ok)
        {
            setData(pattern);
            setLoading(false);
            return;
        }

        const json = await response.json();
        setData(json);
        setLoading(false);
    });

    return {
        data,
        loading,
        Request
    };
};

export default useFetch;