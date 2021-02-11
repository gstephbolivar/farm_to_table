import {useContext} from "react";
import CartContext from '../../utils/CartContext';
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, Typography, Button, AppBar } from "@material-ui/core";
import CartBadge from '../CartBadge/CartBadge';
import MenuDropdown from "../../components/MenuDropdown/MenuDropdown";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const {lineItems} = useContext(CartContext);
  const count = lineItems.reduce((total, current) => total + current.quantity, 0, lineItems, 0);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <MenuDropdown />
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
          <CartBadge count={count}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
