import { useState, useEffect} from "react";
import {Link} from "react-router-dom";
import './cartbadge.css';

const CartBadge = (props) => {
    const [cartCount, setCartCount] = useState(0);
  
    useEffect(() => {
        setCartCount(props.count)
    }, [props.count])
   
    return (
      
      <Link className="navbar-item cartLink is-hoverable" to="/cart">
        <span className="icon">
       <div id="cartBadge">
        {props.count > 0 ?
          <div className="circle">
            <span id="cartCount">{cartCount}</span>
          </div> : null
        }        
        <i className="fas fa-shopping-cart"></i>
      </div> 
      </span>
      <span id="nav-products"> <strong style={{marginLeft: 5}}>Cart</strong></span>
        </Link>
    )
}

export default CartBadge;

