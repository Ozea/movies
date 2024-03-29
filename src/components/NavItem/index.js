import React, { useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { Button, Collapse, ListItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const useStyles = makeStyles((theme) => ({
  item: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0
  },
  itemLeaf: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
    margin: theme.spacing(.3, 0)
  },
  button: {
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    borderRadius: 0,
  },
  buttonLeaf: {
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightRegular,
    '&.depth-0': {
      fontWeight: theme.typography.fontWeightMedium
    },
    '&:hover': {
      background: theme.palette.secondary.dark
    }
  },
  icon: {
    color: theme.palette.icon,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(2),
    fontSize: '27px',
    width: '27px'
  },
  expandIcon: {
    marginLeft: 'auto',
    height: 16,
    width: 16
  },
  title: {
    color: 'white',
    fontSize: '15px',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto'
  },
  active: {
    background: theme.palette.secondary.dark,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: 'white'
    }
  }
}));

const NavItem = ({
  title,
  href,
  depth,
  children,
  icon: Icon,
  className,
  open: openProp,
  label: Label,
  ...rest
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(openProp);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  let paddingLeft = 10;

  if (depth > 0) {
    paddingLeft = 32 + 8 * depth;
  }

  const style = {
    paddingLeft
  };

  if (children) {
    return (
      <ListItem
        {...rest}
        className={classNames(classes.item, className)}
        disableGutters
        key={title}
      >
        <Button
          className={classes.button}
          onClick={handleToggle}
          style={style}
        >
          {Icon && <Icon className={classes.icon} />}
          {title}
          {open ? (
            <ExpandLessIcon
              className={classes.expandIcon}
              color="inherit"
            />
          ) : (
            <ExpandMoreIcon
              className={classes.expandIcon}
              color="inherit"
            />
          )}
        </Button>
        <Collapse in={open}>{children}</Collapse>
      </ListItem>
    );
  }

  return (
    <ListItem
      {...rest}
      className={classNames(classes.itemLeaf, className)}
      disableGutters
      key={title}
    >
      <Button
        activeClassName={classes.active}
        className={classNames(classes.buttonLeaf, `depth-${depth}`)}
        component={RouterLink}
        exact
        style={style}
        to={href}
      >
        {Icon && <Icon className={classes.icon} />}
        <span className={classes.title}>{title}</span>
        {Label && (
          <span className={classes.label}>
            <Label />
          </span>
        )}
      </Button>
    </ListItem>
  );
};

NavItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  depth: PropTypes.number.isRequired,
  href: PropTypes.string,
  icon: PropTypes.any,
  label: PropTypes.any,
  open: PropTypes.bool,
  title: PropTypes.string.isRequired
};

NavItem.defaultProps = {
  open: false
};

export default NavItem;