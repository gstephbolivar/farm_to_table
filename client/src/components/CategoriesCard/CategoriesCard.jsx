import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  //   ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";

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

// function generate(element) {
//   return [0, 1, 2].map((value) => {
//     React.cloneElement(element, {
//       key: value,
//     });
//   });
// }

const CategoriesCard = () => {
  const [dense, setDense] = useState(false);
  return (
    <Box component="div">
      <Grid container justify="left">
        <Grid item xs={12} sm={8} md={6}>
          <Card>
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
