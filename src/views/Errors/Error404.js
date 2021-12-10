import { ArrowBack } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { GridContainer } from "components";
import { GridItem } from "components";
import CustomLink from "components/CustomLink";
import React from "react";

const useStyles = makeStyles(theme => ({
  contentCenter: {
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: "3",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
    color: 'white',
    padding: "0 15px",
    width: "100%",
    maxWidth: "880px"
  },
  title: {
    textDecoration: "none",
    marginTop: "30px",
    marginBottom: "25px",
    minHeight: "32px",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    "& small": {
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    },
    fontSize: "13.7em",
    color: 'white',
    letterSpacing: "14px",
    fontWeight: "700"
  },
  subTitle: {
    fontSize: "2.25rem",
    marginTop: "0",
    marginBottom: "8px"
  },
  description: {
    fontSize: "1.125rem",
    marginTop: "0",
    marginBottom: "8px"
  },
  link: {
    width: 'fit-content',
    margin: '20px auto'
  }
}));

export default function Error404() {
  const classes = useStyles();

  return (
    <div className={classes.contentCenter}>
      <GridContainer>
        <GridItem md={12}>
          <h1 className={classes.title}>404</h1>
          <h2 className={classes.subTitle}>Page not found</h2>
          <h4 className={classes.description}>Ooooups! Looks like you got lost.</h4>
          <CustomLink
            title="Go back!"
            icon={ArrowBack}
            color="info"
            buttonClassName={classes.link}
            to="/" />
        </GridItem>
      </GridContainer>
    </div>
  );
}
