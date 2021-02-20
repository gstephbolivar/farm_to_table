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

  loginUser: (user) => {
    return axios.post("/api/users/login", {
      email: user.email,
      password: user.password,
    });
  },

  getFilteredProducts: (category) => {
    return axios.get(`/api/products/filtered/${category}`);
  },

  sendConfirmationEmail: (info) => {
    return axios.post("/api/sendconfirmation", info);
  },

  getEmail: (id) => {
    return axios.get("/api/users/email", {
      params: {
        id: id,
      },
    });
  },

  // call to get the orders based on id
  getOrders: (id) => {
    //console.log(id);
    return axios.get("/api/orders/" + id, {
      params: {
        customer: id,
      },
    });
  },
};

export default API;
