import {useContext, useState, useEffect} from "react";
import CartContext from '../../utils/CartContext';
import './cartbadge.css';
import {Link} from 'react-router-dom';

const CartBadge = (props) => {
    const [cartCount, setCartCount] = useState(0);
  
    useEffect(() => {
        setCartCount(props.count)
    }, [props.count])
   
    return (
      
      <Link to="/cart" className="cartLink">
       <div id="cartBadge">
        {props.count > 0 ?
          <div class="circle">
            <span id="cartCount">{cartCount}</span>
          </div> : null
        }        
        <i class="fas fa-shopping-cart"></i>
      </div> 
      </Link>
        
    )
}

export default CartBadge;