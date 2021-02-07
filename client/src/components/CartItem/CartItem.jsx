import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import './cartitem.css';

const CartItem = ({img, name, quantity, price}) => {
    return (
        <Grid item xs={12} className="cart-item">
            <Paper elevation={3}>
              <Grid container item>
                <Grid item xs={6}>
                  <div className="vertical-center" style={{ padding: 10 }}>
                    <img src={img} alt="item description" style={{ marginRight: 15 }} />
                    <span>{name}</span>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div className="vertical-center" style={{height: 95,justifyContent: "center"}}>
                    <div>{quantity}</div>
                  </div>
                </Grid>
                <Grid item xs={3} align="center">
                  <div className="vertical-center" style={{height: 95,justifyContent: "center"}}>
                    <div>${price}</div>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
    );
};

export default CartItem;