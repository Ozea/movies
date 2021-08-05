import React from "react";
// Material core
import { Divider, Drawer, List, Toolbar } from "@material-ui/core";
// Styles
import { makeStyles } from "@material-ui/core";
// Sidebar config
import { sidebarConfig } from "./config";
// Components
import NavItem from "components/NavItem";
// Router
import { matchPath } from "react-router-dom";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  listItem: {
    padding: theme.spacing(1)
  },
  logo: {
    textTransform: 'uppercase',
    fontWeight: 'bolder',
    fontSize: '22px'
  }
}));

export default function Sidebar() {
  const classes = useStyles();

  const renderNavItems = ({ items, key, ...rest }) => (
    <List key={key} className={classes.listItem}>
      {items.reduce((acc, item) => reduceChildRoutes({ acc, item, ...rest }), [])}
    </List>
  );

  function reduceChildRoutes({ acc, pathname, item, depth = 0 }) {
    if (item.items) {
      const open = matchPath(pathname, {
        path: item.href,
        exact: false
      });

      acc.push(
        <NavItem
          depth={depth}
          icon={item.icon}
          key={item.href}
          label={item.label}
          open={Boolean(open)}
          title={item.title}>
          {renderNavItems({
            depth: depth + 1,
            pathname,
            items: item.items,
            roles: item.roles,
          })}
        </NavItem>
      );
    } else {
      acc.push(
        <NavItem
          depth={depth}
          href={item.href}
          icon={item.icon}
          key={item.href}
          label={item.label}
          title={item.title}
        />
      );
    }

    return acc;
  }

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{ paper: classes.drawerPaper }}
    >
      <Toolbar><div className={classes.logo}>Logo</div></Toolbar>

      <Divider />

      <div className={classes.drawerContainer}>
        {sidebarConfig.map((list, index) => renderNavItems({
          items: list.items,
          pathname: window.location.pathname,
          key: index
        }))}
      </div>
    </Drawer>
  );
}
