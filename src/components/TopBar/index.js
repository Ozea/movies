import React from 'react';
// Core
import { makeStyles, AppBar, Toolbar, IconButton, InputBase, alpha } from "@material-ui/core";
// Icons
import { Search, AccountCircle } from "@material-ui/icons";
import { ReactComponent as Crown } from 'assets/crown.svg';
// Utils
import { drawerWidth } from "components/Sidebar/config";
import CustomButton from 'components/CustomButton';

const useStyles = makeStyles(theme => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  buttonLeaf: {
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%'
  },
  toolbar: {
    background: theme.palette.primary.dark
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '50ch',
  },
  searchIcon: {
    padding: theme.spacing(),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg': {
      color: theme.palette.icon
    }
  },
  inputRoot: {
    width: '100%'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    color: "white",
    width: '100%',
    "&::placeholder": {
      opacity: '1',
      color: "white"
    },
  },
  sectionDesktop: {
    display: 'flex',
    alignItems: 'center'
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function TopBar(props) {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar} elevation={3}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <Search />
          </div>
          <InputBase
            placeholder="Search by movie, tv show or actor ..."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          <CustomButton title="Premium" icon={Crown} style={{ marginRight: '15px' }} />
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit" >
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
