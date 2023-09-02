import { api } from "./axios";

export const fetchProducts = async () => {
    try {
        const data = await api({
            method: "GET"
        })
        return data.products;
    } catch (error) {
        console.log(error);
    }
}