
import React, { useState } from 'react';
// Core
import { ClickAwayListener, MenuList, Paper, Grow, Popper, makeStyles, MenuItem, Button } from '@material-ui/core';
// i18n
import { useTranslation } from 'react-i18next';
// Utils
import { setLanguage } from 'utils/language';

const useStyles = makeStyles(theme => ({
  root: {
    width: 500,
  },
  typography: {
    padding: theme.spacing(1),
  },
  buttonLink: {
    fontSize: '15px',
    marginLeft: theme.spacing(1)
  }
}));

const LanguageSwitcher = (props) => {
  const classes = useStyles();
  const { i18n } = useTranslation();
  const languages = Object.keys(i18n.options.resources);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isOpened, setOpened] = useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(languages.indexOf(i18n.language));

  const handleLangSelect = (lang, index) => {
    i18n.changeLanguage(lang);
    setSelectedIndex(index);
    setLanguage(lang);
    handleClose();
  };

  const handleClose = () => setAnchorEl(null);

  const menuItems = languages.map((lang, i) =>
    (<MenuItem key={i} onClick={() => handleLangSelect(lang, i)} selected={i === selectedIndex}>{lang.toUpperCase()}</MenuItem>)
  );

  const handleClick = event => {
    setOpened((prev) => !prev);
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Button
        color="default"
        aria-label="lang-menu"
        aria-owns={isOpened ? "lang-menu" : null}
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.buttonLink}
      >
        {i18n.language}
      </Button>

      <Popper open={isOpened} anchorEl={anchorEl} placement="bottom" transition style={{ zIndex: 9999 }}>
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            id="lang-menu"
            style={{ transformOrigin: "0 0 0" }}
          >
            <Paper className={classes.dropdown} style={{ paddingBottom: '0px', minWidth: '75px' }}>
              <ClickAwayListener onClickAway={() => setOpened(false)}>
                <MenuList role="menu">
                  {menuItems}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default LanguageSwitcher;