import React, { useState } from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";

// CSS styling
const useStyles = makeStyles({
  categoriesContainer: {
    maxWidth: 200,
    // margin: "2rem auto"
  },
})

// List of items that user can choose from to filter food options
const menuItems = [
  {
    listText: "All",
  },
  {
    listText: "Dairy & Eggs",
  },
  {
    listText: "Fruits",
  },
  {
    listText: "Meat",
    listPath: "",
  },
  {
    listText: "Poultry",
  },
  {
    listText: "Vegetables",
  },
];

const CategoriesCard = () => {
  const [dense, setDense] = useState(false);
  const classes = useStyles();
  return (
    <Box component="div">
      <Grid container >
        <Grid item xs>
          <Card className= {classes.categoriesContainer}>
            <CardContent>
              <Typography>Choose a Category</Typography>
            </CardContent>
            <Divider />
            <List dense={dense}>
              {menuItems.map((lsItem, key) => (
                <ListItem button key={key}>
                  <ListItemText primary={lsItem.listText} />
                </ListItem>
              ))}
            </List>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CategoriesCard;
