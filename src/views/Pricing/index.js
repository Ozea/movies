import { ArrowBack } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { GridContainer } from "components";
import { GridItem } from "components";
import CustomLink from "components/CustomLink";
import PricingPlan from "components/PricingPlan";
import React from "react";
import { Helmet } from "react-helmet";
import { plans } from "utils/pricingPlans";

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
    marginBottom: "1.25em",
    minHeight: "32px",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    "& small": {
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    },
    fontSize: "3em",
    color: 'white',
    letterSpacing: "1px",
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

export default function Pricing() {
  const classes = useStyles();

  const renderPlans = () => {
    return plans.map(plan => <PricingPlan plan={plan} />);
  }

  return (
    <>
      <Helmet><title>Pricing plans</title></Helmet>
      <div className={classes.contentCenter}>
        <GridContainer>
          <GridItem md={12}>
            <h1 className={classes.title}>Subscriptions</h1>
          </GridItem>
          <GridContainer>
            {renderPlans()}
          </GridContainer>
          <GridContainer>
            <CustomLink
              title="Go back!"
              icon={ArrowBack}
              color="info"
              buttonClassName={classes.link}
              to="/" />
          </GridContainer>
        </GridContainer>
      </div>
    </>
  );
}
