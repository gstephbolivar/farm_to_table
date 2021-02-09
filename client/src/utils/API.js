import axios from "axios";

export default {

// Get All Products
getAllProducts: () => {
    return axios.get("/api/products")
},
    
    // product routes
addProduct: (product) => {
    return axios.post("/api/products", product)
},

  // User routes
  addUser: (user) => {
    return axios.post("/api/users", user);
  },

  getProduct: (prodId) => {
    return axios.get("/api/product", {
      params: {
        id: prodId
      }
    })
  },
  // used for checking users in database
  checkUser: (user) => {
    //console.log(user);
    return axios.get("/api/users", {
      params: {
        username: user.username,
        password: user.password,
      },
    });
  },
};
