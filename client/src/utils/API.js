import axios from "axios";

export default {

        // product routes
getAllProducts: () => {
    return axios.get("/api/products")
},
    
    // product routes
addProduct: (product) => {
    return axios.post("/api/products", product)
},

// User routes
addUser: (user) => {
    return axios.post("/api/users", user)
},
}
