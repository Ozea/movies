import React, { useState } from 'react';
// Core
import { AppBar, Toolbar, IconButton, InputBase, alpha, Popper, Fade, Paper, Typography, Button, Divider } from "@mui/material";
import { makeStyles } from '@mui/styles';
// Icons
import { Search, AccountCircle, Logout } from "@mui/icons-material";
import { ReactComponent as Crown } from 'assets/crown.svg';
// Utils
import { drawerWidth } from "components/Sidebar/config";
import CustomButton from 'components/CustomButton';
import { useHistory } from 'react-router';

const useStyles = makeStyles(theme => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
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
    background: theme.palette.primary.dark,
    padding: theme.spacing(0, 5)
  },
  search: {
    display: 'flex',
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
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState(null);
  const history = useHistory();
  const classes = useStyles();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    setOpen(prev => !prev);
  };

  const navigateToDashboard = () => {
    setOpen(false);
    history.push('/dashboard');
  }

  const logout = () => {
    setOpen(false);
    history.push('/auth/login');
  }

  const onSearch = event => {
    event.preventDefault();

    if (search) {
      history.push(`/search?list=movie&query=${search}`);
    }
  }

  const onSearchChangeHandler = ({ target: { value } }) => {
    setSearch(value);
  }

  return (
    <AppBar position="fixed" className={classes.appBar} elevation={2}>
      <Toolbar className={classes.toolbar}>
        <form onSubmit={onSearch}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search by movie or tv show ..."
              onChange={onSearchChangeHandler}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </form>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          <CustomButton title="Premium" icon={Crown} style={{ marginRight: '15px' }} />
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            onClick={handleClick}
            color="inherit" >
            <AccountCircle />
          </IconButton>

          <Popper open={open} anchorEl={anchorEl} placement="bottom-start" transition style={{ zIndex: 1100 }}>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper sx={{ p: .75 }}>
                  <Button
                    onClick={navigateToDashboard}
                    variant="contained"
                    startIcon={<AccountCircle />}
                    sx={{ textTransform: 'capitalize' }}
                    style={{ width: '100%', marginBottom: '.5rem' }}>Profile</Button>
                  <Divider />
                  <Button
                    variant="outlined"
                    startIcon={<Logout />}
                    onClick={logout}
                    sx={{ textTransform: 'initial' }}>Log out</Button>
                </Paper>
              </Fade>
            )}
          </Popper>
        </div>
      </Toolbar>
    </AppBar>
  );
}
