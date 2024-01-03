import React from "react";
import { getBrands } from "../apis/BrandsApi";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import '../assets/css/brand.css';
import useFetch from "../hooks/useFetch";

const BrandsBar = () => {
    const { url, options, pattern } = getBrands();
    const { data, loading, Request } = useFetch(url, options, pattern);
    const isLoading = loading || data === null;

    React.useEffect(() => {
        Request();
    }, []);

    return (
        <div className="container-fluid container-padding brands">
            <div className="d-flex justify-content-between">
                { isLoading ? <Skeleton /> : data.map((brand, index) => (
                    <h1 key={index}>{brand}</h1>
                )) }
            </div>
        </div>
    );
}

export default BrandsBar;