import React, { useState } from "react";
// Material core
import { ListItem, ListItemIcon, Collapse, List, MenuItem } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
// Router
import { Link } from "react-router-dom";

export default function MultiLevelListItem({ item, ...props }) {
  const { items: children } = item;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <Link to={item.to} />
        {item.title}
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children.map((child, key) => (
            <MenuItem key={key} item={child} />
          ))}
        </List>
      </Collapse>
    </>
  );
}
