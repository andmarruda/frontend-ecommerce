import { API_URL, getLocale } from "./Url";

export const getBanners = () => {
    const fullUrl = `${API_URL}${getLocale()}/banners`;

    return {
        url: fullUrl,
        options: {
            method: 'GET'
        },
        pattern: {
            "title": "FIND CLOTHES THAT MATCHES YOUR STYLE",
            "subtitle": "Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.",
            "image": "",
            "path": "/",
            "tips": [
                {
                    "count": 200,
                    "label": "International Brands"
                },
                {
                    "count": 2000,
                    "label": "High Quality Products"
                },
                {
                    "count": 30000,
                    "label": "Happy Customers"
                }
            ]
        }
    };
}