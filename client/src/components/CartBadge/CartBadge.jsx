import { useState, useEffect} from "react";
import './cartbadge.css';

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