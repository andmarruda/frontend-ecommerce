import React from "react";
import { useTranslation } from "react-i18next";

export const API_URL = "http://demo0957586.mockable.io/fastfashionshop/";

export const getLocale = () => {
    const { i18n } = useTranslation();
    return i18n.language;
}