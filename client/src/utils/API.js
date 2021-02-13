import axios from "axios";

const API = {
  // Get All Products
  getAllProducts: () => {
    return axios.get("/api/products");
  },

  // product routes
  addProduct: (product) => {
    return axios.post("/api/products", product);
  },
  getProduct: () => {
    return axios.get("/api/products");
  },
  getOneProduct: (id) => {
    return axios.get(`/api/products/${id}`);
  },
  updateProduct: (id, product) => {
    return axios.put("/api/products/" + id, product);
  },
  deleteProduct: (id) => {
    return axios.delete("/api/products/" + id);
  },

  // User routes
  addUser: (user) => {
    return axios.post("/api/users", user);
  },

  addLineItems: (lineItems) => {
    return axios.post("/api/lineItems", lineItems);
  },

  placeOrder: (order) => {
    return axios.post("/api/orders", order);
  },
  // used for checking users in database
  checkUser: (user) => {
    //console.log(user);
    return axios.get("/api/users", {
      params: {
        email: user.email,
        password: user.password,
      },
    });
  },

  getFilteredProducts: (category) => {
    return axios.get(`/api/products/filtered/${category}`);
  },
};

export default API;
