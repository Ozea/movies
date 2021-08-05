import React from "react";
// Material core
import { Divider, Drawer, IconButton, List, Toolbar } from "@material-ui/core";
// Icons
import { ContactSupport } from "@material-ui/icons";
// Styles
import { makeStyles } from "@material-ui/core/styles";
// Sidebar config
import { sidebarConfig, drawerWidth } from "./config";
// Components
import { NavItem, GridItem, GridContainer } from "components";
// Router
import { matchPath } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
    height: '100%',
    paddingTop: theme.spacing(2)
  },
  drawerContent: {
    height: '100%'
  },
  listItem: {
    padding: theme.spacing(.5, 1)
  },
  logo: {
    textTransform: 'uppercase',
    fontWeight: 'bolder',
    fontSize: '22px'
  }
}));

export default function Sidebar() {
  const { t } = useTranslation();
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
      <Toolbar><div className={classes.logo}>{t('Logo')}</div></Toolbar>

      <Divider />

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
                icon={ContactSupport}
                title={t('Contact support')}
              />
            </List>
          </GridItem>
        </GridContainer>
      </div>
    </Drawer>
  );
}
