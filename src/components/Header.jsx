import React from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import CartIcon from "../assets/icons/cart.svg?react";
import UserIcon from "../assets/icons/user.svg?react";
import { useTranslation } from "react-i18next";
import useForm from "../hooks/useForm";

const Header = () => {
    const { t } = useTranslation();
    const searchInput = useForm();

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
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">{t('shop')}</Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">{t('category')} 1</Link></li>
                                    <li><Link className="dropdown-item" href="#">{t('category')} 2</Link></li>
                                    <li><Link className="dropdown-item" href="#">{t('category')} 3</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/" role="button">{t('onSale')}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/" role="button">{t('newArrivals')}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/" role="button">{t('brands')}</Link>
                            </li>
                        </ul>
                        <form className="search" role="search">
                            <Input className="form-control" type="text" placeholder={t('searchPlaceholder')} id="search" name="search" {...searchInput} />
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