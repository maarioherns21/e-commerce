import {AppBar, Toolbar, Badge, MenuItem, Menu, IconButton, Typography } from "@mui/material"
import { ShoppingCart } from "@material-ui/icons"
import { Link } from "react-router-dom"
import Logo from "../../assets/logos.png"
import Styles from "./Styles"



////took off the commer.js text  and added the link hook to it
export default function NavBar ({totalItems}) {
const classes = Styles()


return (
  <>
    <AppBar position="fixed" className={classes.appBar} color="inherit">
      <Toolbar>
        <Link to={"/"}>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img  src={Logo} alt="Commerce.js"  height="30px" className={classes.image} />
          </Typography>
        </Link>
        <div className={classes.grow} />
        <div className={classes.button} />
        <IconButton>
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  </>
);
}