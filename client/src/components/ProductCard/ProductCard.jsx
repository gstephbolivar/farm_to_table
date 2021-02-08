import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
  media: {
    height: 250,
  },
});

const ProductCard = ({ name, quantity, price }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://placedog.net/300/300"
          title="Placeholder"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Product: {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Quantity: {quantity}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Price: {price} /unit
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* only displays the buttons if the path is /admin */}
        {window.location.pathname === "/admin" && (
          <>
            <Button size="small" color="primary">
              Edit
            </Button>
            <Button size="small" color="primary">
              Delete
            </Button>
          </>
        )}
        {window.location.pathname === "/allproducts" && (
          <>
            <Button size="small" color="primary">
              Add
            </Button>
          </>
        )}
      </CardActions>
    </Card>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
};

export default ProductCard;
