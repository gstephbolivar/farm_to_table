import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 250
  },
  media: {
    height: 250
  }
});

const ProductCard = () => {
    const classes = useStyles();
    const history = useHistory();

  const routeChange = () =>{ 
    let path = `/admin/edit/601ed96979e8ee15033e2fbc`; 
    history.push(path);
  }


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
              Product
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Quantity
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Price
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* only displays the buttons if the path is /admin */}
          {window.location.pathname === "/admin" &&
          <>
          <Button size="small" color="primary" onClick={routeChange}>
            Edit
          </Button>
          <Button size="small" color="primary">
            Delete
          </Button>
          </>}
        </CardActions>
      </Card>
    );
}

export default ProductCard;