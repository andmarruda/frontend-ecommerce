import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="top">
                Sign up and get 20% off to your first order. <Link to="/sign-up">Sign Up Now</Link>.
            </div>
            <nav className="navbar navbar-expand-lg ecommerce-navbar">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toogle="collapse" data-bs-target="#ecommerceMenu" aria-controls="ecommerceMenu" aria-expanded="false" aria-label="Toglle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <Link className="navbar-brand" to="/">SHOP.CO</Link>
                    <div className="collapse navbar-collapse" id="ecommerceMenu">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</Link>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/" role="button">On Sale</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/" role="button">New Arrivals</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/" role="button">Brands</Link>
                            </li>
                            <li className="nav-item">
                                <input class="form-control" type="text" placeholder="Search for products..." aria-label="readonly input example" />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;