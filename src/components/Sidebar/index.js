import React from "react";
// Material core
import { Divider, Drawer, List, Toolbar } from "@material-ui/core";
// Icons
import { Info } from "@material-ui/icons";
// Styles
import { makeStyles } from "@material-ui/core/styles";
// Sidebar config
import { sidebarConfig, drawerWidth } from "./config";
// Components
import { NavItem, GridItem, GridContainer } from "components";
// Router
import { matchPath } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)'
  },
  drawerPaper: {
    border: 'unset',
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
    height: '100%',
    background: theme.palette.primary.dark,
    paddingTop: theme.spacing(2)
  },
  drawerContent: {
    height: '100%'
  },
  listItem: {
    padding: theme.spacing(.5, 1),
  },
  toolbar: {
    background: theme.palette.secondary.dark,
    justifyContent: 'center'
  },
  divider: {
    width: '90%',
    margin: theme.spacing(.5, 0),
    background: theme.palette.secondary.dark
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.orange,
    textTransform: 'uppercase',
    fontWeight: 'bolder',
    fontSize: '22px'
  }
}));

export default function Sidebar() {
  const classes = useStyles();

  const renderNavItems = ({ items, key, ...rest }) => (
    (<div key={key}>
      <List className={classes.listItem}>
        {items.reduce((acc, item) => reduceChildRoutes({ acc, item, ...rest }), [])}
      </List>

      <Divider className={classes.divider} />
    </div>)
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
      <Toolbar className={classes.toolbar}>
        <div className={classes.logo}>METAFLEX</div>
      </Toolbar>

      <div className={classes.drawerContainer}>
        <GridContainer className={classes.drawerContent} direction="column" justifyContent="space-between" align="center">
          <GridItem padding={0}>
            {sidebarConfig.map((list, index) => renderNavItems({
              items: list.items,
              pathname: window.location.pathname,
              key: index
            }))}
          </GridItem>

          <GridItem padding={0}>
            <List className={classes.listItem}>
              <NavItem
                depth={0}
                href="/support"
                icon={Info}
                title="FAQ"
              />
            </List>
          </GridItem>
        </GridContainer>
      </div>
    </Drawer>
  );
}
