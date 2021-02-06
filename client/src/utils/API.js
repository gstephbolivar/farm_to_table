import axios from "axios";

export default {
    
    // product routes
addProduct: (product) => {
    return axios.post("/api/products", product)
},
getProduct: () => {
    return axios.get("/api/products")
},
getOneProduct: (id) => {
    return axios.get("/api/products/"+id)
},
updateProduct: (product) => {
    return axios.put("/api/products", product)
},


// User routes
addUser: (user) => {
    return axios.post("/api/users", user)
},
}
