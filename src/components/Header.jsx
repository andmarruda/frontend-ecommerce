import React from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import CartIcon from "../assets/icons/cart.svg?react";
import UserIcon from "../assets/icons/user.svg?react";

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
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Category 1</a></li>
                                    <li><a className="dropdown-item" href="#">Category 2</a></li>
                                    <li><a className="dropdown-item" href="#">Category 3</a></li>
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
                        </ul>
                        <form className="search" role="search">
                            <Input className="form-control" value="123" type="text" placeholder="Search for products..." aria-label="readonly input example" />
                        </form>
                        <ul className="navbar-nav icons">
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart" role="button"><CartIcon /></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login" role="button"><UserIcon /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;