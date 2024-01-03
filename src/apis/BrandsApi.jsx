import { API_URL, getLocale } from "./Url";

export const getBrands = () => {
    const fullUrl = `${API_URL}${getLocale()}/brands`;

    return {
        url: fullUrl,
        options: {
            method: 'GET'
        },
        pattern: ["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein"]
    };
}