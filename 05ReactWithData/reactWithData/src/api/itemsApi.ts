import axios from "axios";
// Axios on populaarne HTTP-kliendi teek Axios, mida 
// kasutatakse peamiselt JavaScript ja Node.js keskkonnas
// API päringute tegemiseks.

const API = "http://localhost:4000/api/items"

export const fetchItems = () => axios.get(API);
export const createItem = (name: string) => axios.post(API, { name });
export const deleteItem = (id: number) => axios.delete(`${API}/${id}`);