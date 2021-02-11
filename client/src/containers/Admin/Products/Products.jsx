import { useState, useEffect } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import CategoriesCard from "../../../components/CategoriesCard/CategoriesCard";
import API from "../../../utils/API";
// import {useHistory} from "react-router-dom";
import EditProductModal from "../../../components/EditProductModal/EditProductModal";


const Products = () => {
    
    const [productID, setProductID] = useState("");
    const [modal, setModal] = useState("modal");
    const [products, setProducts] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState("");
    const [productToEdit, setProductToEdit] = useState({});
    // const history = useHistory();

//   const handleEditButton = (id) => {
//     let path = `/admin/edit/${id}`;
//     history.push(path);
//   };

  const handleModalState = (id) => {
    if(modal === "modal") { 
        setModal("modal is-active");
        setProductID(id);
        // API.getOneProduct(id).then((res) => {
        //     console.log(res);
        //     setProductToEdit(res.data);
        //   });
  } else {
    setModal("modal")
  }
};

// const getEditProduct = (id) => {
//     API.getOneProduct(id).then((res) => {
//         console.log(res);
//         setProductToEdit(res.data);
//       });
// }


      // load all cards and store them with setCard
  useEffect(() => {
    loadProducts();
  }, []);

  // FIXME: Remove duplicate routes
  const loadProducts = () => {
    API.getProduct()
      .then((response) => {
          console.log(response.data);
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // sets the category filter to state
  const filterProducts = (e) => {
    const category = e.target.name;
    if (category !== "All") {
      // filters the products displayed based on the category
      displayFilteredProducts(category);
      console.log(category);
      setCategoryFilter(category);
    }
    // if All category is chosen, resets the filter
    else loadProducts();
  };
  // FIXME: Remove dupicate routes
  const displayFilteredProducts = (category) => {
    // FIXME: Pass the category to a route on the back end
    API.getAllProducts()
      .then((response) => {
        const filteredProducts = response.data.filter(
          (p) => p.category.toLowerCase() === category.toLowerCase()
        );
        console.log(categoryFilter);
        console.log(response.data);
        console.log(filteredProducts);
        setProducts(filteredProducts);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    API.getProduct()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <section className="section">
        <h3 className="title has-text-centered">
          This will be where you can view all products. Admin side.
        </h3>

        <div className="container">
          <div className="columns">
            <div className="column">
              <CategoriesCard onClick={filterProducts} />
            </div>
            <div className="column is-9">
              <div className="columns is-centered is-multiline">
                {products.map((product) => (
                  <ProductCard {...product} editProduct={handleModalState} loadProducts={loadProducts} key={product._id}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
          <div className={modal}>
    <EditProductModal handleModalState={handleModalState} loadProducts={loadProducts} id={productID}/>
          </div>
      </div>
</div>

    );
};


export default Products;
