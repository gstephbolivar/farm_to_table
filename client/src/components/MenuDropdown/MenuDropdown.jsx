import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";

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

export default function DropDownMenu() {
  const classes = useStyles();
  const [menuStatus, setMenuStatus] = useState(null);

  const handleClick = (event) => {
    setMenuStatus(event.currentTarget);
  };

  const handleClose = () => {
    setMenuStatus(null);
  };

  return (
    <div>
      <IconButton
        edge="start"
        className={classes.menuButton}
        aria-controls="simple-menu"
        color="inherit"
        aria-haspopup="true"
        aria-label="menu"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={menuStatus}
        keepMounted
        open={Boolean(menuStatus)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <NavLink
            to="/home"
            style={{ textDecoration: "none", color: "black" }}
          >
            Home Page
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink
            to="/allproducts"
            style={{ textDecoration: "none", color: "black" }}
          >
            Products
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink
            to="/signup"
            style={{ textDecoration: "none", color: "black" }}
          >
            Sign Up
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink
            to="/login"
            style={{ textDecoration: "none", color: "black" }}
          >
            Login
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink
            to="/admin"
            style={{ textDecoration: "none", color: "black" }}
          >
            Admin-Products
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink
            to="/admin/add"
            style={{ textDecoration: "none", color: "black" }}
          >
            Admin-Add-Products
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink
            to="/admin/edit"
            style={{ textDecoration: "none", color: "black" }}
          >
            Admin-Edit-Products
          </NavLink>
        </MenuItem>

        {/* Uncomment and set path and menu name as needed */}
        {/* <MenuItem onClick={handleClose}><NavLink to="/allproducts" style={{ textDecoration: 'none', color: "black" }}>Products</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to="/allproducts" style={{ textDecoration: 'none', color: "black" }}>Products</NavLink></MenuItem> */}
      </Menu>
    </div>
  );
}
