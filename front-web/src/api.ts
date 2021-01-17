import axios from "axios";
import { OrderPayLoad } from "./Orders/types";

const API_URL = process.env.REACT_APP_API_URL;
const mapboxToken = process.env.REACT_APP_ACESS_TOKEN_MAP_BOX;


  // Apis do Backend


  // API GET, pega os produtos
export function fetchProducts() {
    return axios(`https://vinicius-vivian.herokuapp.com/products`);
}

// API Mapas pega o local do usuario
export function fetchLocalMapBox(local: string) {
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`);
}

// API POST, Salva os produtos

export function saveOrder(payload: OrderPayLoad) {
    return axios.post(`https://vinicius-vivian.herokuapp.com/orders`, payload);
}
