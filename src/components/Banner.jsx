import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/banner.css';
import BannerImage from '../assets/banners/banner-1.webp';
import useFetch from "../hooks/useFetch";
import { getBanners } from "../apis/BannerApi";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const Banner = () => {
    const { url, options, pattern } = getBanners();
    const { data, loading, Request } = useFetch(url, options, pattern);
    const isLoading = loading || data === null;

    React.useEffect(() => {
        Request();
    }, []);

    return (
        <div className="container-fluid banner container-padding">
            <div className="row">
                <div className="col-6">
                    <h1>{isLoading ? <Skeleton /> : data.title}</h1>

                    <p>{ isLoading ? <Skeleton /> : data.subtitle }</p>

                    { isLoading ? <Skeleton /> : <Link to="/" className="btn btn-dark" role="button">Shop Now</Link> }

                    <div className="d-flex justify-content-between tips">
                        { isLoading ? <Skeleton /> : data.tips.map((tip, index) => (
                            <div key={index}>
                                <h3>{tip.count}+</h3>
                                <p>{tip.label}</p>
                            </div>
                        )) }
                    </div>
                </div>

                <div className="col-6 align-self-end">
                    { isLoading ? <Skeleton /> : <img src={data.image=='' ? BannerImage : data.image} alt="Banner" className="img-fluid" /> }
                </div>
            </div>
        </div>
    )
}

export default Banner;