import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
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
});

// List of items that user can choose from to filter food options
const menuItems = [
  {
    listText: "All",
  },
  {
    listText: "Fruit",
  },
  {
    listText: "Vegetable",
  },
  {
    listText: "Meat",
  },
  {
    listText: "Dairy",
  },
];

const CategoriesCard = () => {
  const [dense, setDense] = useState(false);
  const classes = useStyles();
  return (
    // <Box component="div">
    //   <Grid container >
    //     <Grid item xs>
    //       <Card className= {classes.categoriesContainer}>
    //         <CardContent>
    //           <Typography>Choose a Category</Typography>
    //         </CardContent>
    //         <Divider />
    //         <List dense={dense}>
    //           {menuItems.map((lsItem, key) => (
    //             <ListItem button key={key}>
    //               <ListItemText primary={lsItem.listText} />
    //             </ListItem>
    //           ))}
    //         </List>
    //       </Card>
    //     </Grid>
    //   </Grid>
    // </Box>

    // Bulma categories card

    <>
      <div className="select">
        <select>
          <option>Choose Categories</option>
          {menuItems.map((item, key) => (
            <option key={key}>{item.listText}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default CategoriesCard;
