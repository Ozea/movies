import React from "react";
// Material core
import { ListItem, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";

export default function SingleLevelListItem({ item, ...props }) {
  return (
    <ListItem button>
      <ListItemIcon>{item.icon}</ListItemIcon>
      <Link to={item.to}>{item.title}</Link>
    </ListItem>
  );
}
