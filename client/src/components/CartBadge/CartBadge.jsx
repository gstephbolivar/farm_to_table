import {useState, useEffect} from "react";
// import CartContext from '../../utils/CartContext';
import './cartbadge.css';
// import {Link} from 'react-router-dom';

const CartBadge = (props) => {
    const [cartCount, setCartCount] = useState(0);
  
    useEffect(() => {
        setCartCount(props.count)
    }, [props.count])
   
    return (
      
       <span id="cartBadge">
        {props.count > 0 ?
            <span id="cartCount">{cartCount}</span>
           : null
        }        
      </span> 
        
    )
}

export default CartBadge;