import {useState, useEffect} from 'react';
import ProductCard from "../../../components/ProductCard/ProductCard";
import API from "../../../utils/API";

const Products = () => {
    
    const [products, setProducts] = useState([]);

    const loadProducts = () => {
        API.getProduct()
          .then((response) => {
            setProducts(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
    }

  const handleDeleteButton = (id) => {
    API.deleteProduct(id)
    .then(res => loadProducts())
    .catch(err => console.log(err))
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
          <div className="container has-text-centered">
            <h1>This will be where you can view all products. Admin side.</h1>
            <div className="columns is-centered is-multiline">
            {products.map((product) => (
                <div className="column">
                    <ProductCard {...product} deleteProduct={handleDeleteButton} key={product._id}/>
                </div>
            ))}
            </div>
          </div>
        </section>
      </div>
    );
};

export default Products;
