import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
  ListItem,
  List,
  ListItemText,
  Drawer,
  useMediaQuery,
  InputBase,
} from "@material-ui/core";
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Autocomplete from "@material-ui/lab/Autocomplete";
import useStyles from "./styles";
import { useNavigate, useLocation } from "react-router-dom";

function ListItemLink(props) {
  return <ListItem button {...props} />;
}

const Header = () => {
  const top100Films = [
    {
      title: "a",
    },
    {
      title: "b",
    },
    {
      title: "c",
    },
  ];
  const pages = ["Home", "Items", "Reports", "payment"];

  const [isOpenNav, setOpenNav] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false)

  const isDesktop = useMediaQuery("(min-width:550px)");
  const classes = useStyles();
  const navigate = useNavigate();
  const currentLocation = useLocation();

  React.useEffect(() => {
   const path = currentLocation.pathname;
   console.log(path)
   if(path.includes("items")){
       setShowSearch(true)
   }else{
     setShowSearch(false)
   }
   
  }, [setShowSearch, currentLocation])
  
  const toggleDrawer = (e) => {
    setOpenNav(false);
  };

  const getPath = (page) => {
    if(page.toLowerCase() === "home"){
      return "/"
    }
    return "/" + page.toLowerCase();
  };

  const navDrawer = (
    <div className={classes.nav} role="presentation">
      <List>
        {pages.map((page, i) => (
          <ListItem
            button
            key={page}
          >
            <ListItemLink
              onClick={() => navigate(getPath(page))}
            >
              <ListItemText primary={page}></ListItemText>
            </ListItemLink>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => {
              setOpenNav(true);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box className={classes.boxMenu}>
            {isDesktop && (
              <div
                className={classes.boxMenuList}
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                {pages.map((page, i) => (
                  <Button
                    color="inherit"
                    key={i}
                    onClick={() => navigate(getPath(page))}
                  >
                    {page}
                  </Button>
                ))}
              </div>
            )}
          </Box>
          {showSearch && <Autocomplete
            id="combo-box-demo"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => {
              const { InputLabelProps, InputProps, ...rest } = params;
              return (
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    {...params.InputProps}
                    {...rest}
                    placeholder="Search items..."
                  />
                </div>
              );
            }}
          />}
          {/* </div> */}
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      {/* <Box component="nav"  onKeyDown={toggleDrawer()} onClose={toggleDrawer()}> */}
      <Drawer open={isOpenNav} onClick={toggleDrawer}>
        {navDrawer}
      </Drawer>
      {/* </Box> */}
    </div>
  );
};

export default Header;
