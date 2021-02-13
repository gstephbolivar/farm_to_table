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
      
       <div id="cartBadge">
        {props.count > 0 ?
          <div className="circle">
            <span id="cartCount">{cartCount}</span>
          </div> : null
        }        
        <i className="fas fa-shopping-cart"></i>
      </div> 
        
    )
}

export default CartBadge;