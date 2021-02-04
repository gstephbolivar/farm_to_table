import axios from "axios";

export default {
addProduct: (product) => {
    return axios.post("/api/products", product)
}
}
