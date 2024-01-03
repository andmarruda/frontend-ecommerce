import { API_URL } from "./Url";

export const getBanners = () => {
    const fullUrl = API_URL + 'banners';

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
            "brands": {
                "count": 200,
                "label": "International Brands"
            },
            "products": {
                "count": 2000,
                "label": "High Quality Products"
            },
            "customers": {
                "count": 30000,
                "label": "Happy Customers"
            }
        }
    };
}