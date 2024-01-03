import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/banner.css';

const Banner = () => {
    return (
        <div className="container-fluid banner">
            <div className="row">
                <div className="col-6">
                    <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>

                    <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>

                    <Link to="/" className="btn btn-dark" role="button">Shop Now</Link>

                    <div className="d-flex justify-content-between tips">
                        <div>
                            <h3>200+</h3>
                            <p>International Brands</p>
                        </div>

                        <div>
                            <h3>2,000+</h3>
                            <p>High Quality Products</p>
                        </div>

                        <div>
                            <h3>30,000+</h3>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                </div>

                <div className="col-6">
                    
                </div>
            </div>
        </div>
    )
}

export default Banner;