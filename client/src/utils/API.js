import axios from "axios";

export default {
  // Get All Products
  getAllProducts: () => {
    return axios.get("/api/products");
  },

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
    return axios.get("/api/products/" + id);
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

  getProduct: (prodId) => {
    return axios.get("/api/product", {
      params: {
        id: prodId
      }
    })
  },

  addLineItems: (lineItems) => {
    return axios.post("/api/lineItems", lineItems)
  },

  placeOrder: (order) => {
     return axios.post("/api/orders", order)
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

  getFilteredProducts: (category) => {
    return axios.get("/api/products", {
      params: {
        category: category.category,
      },
    });
  },
};
