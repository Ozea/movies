import React, { useEffect } from 'react';
import { Avatar, Button, Card, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, styled, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
// Redux
import { getTrendingMovies } from 'services/api';
import { GridContainer } from 'components';
import { GridItem } from 'components';
import CustomButton from 'components/CustomButton';
import MasterCard from 'assets/master-card.png';
import Visa from 'assets/visa.png';
import { Cancel, Edit, Receipt } from '@mui/icons-material';
import { plans } from 'utils/pricingPlans';
import { Helmet } from 'react-helmet';

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: '15px'
  },
  primaryList: {
    color: theme.palette.secondary.dark,
    textAlign: 'center'
  }
}));

export default function Dashboard() {
  const classes = useStyles();

  useEffect(() => {
    getTrendingMovies()
      .then(result => {
      })
      .catch(err => console.error(err));
  }, []);

  const StyledCard = styled(Card)(({ theme }) => ({
    ...theme.typography.body2,
    position: 'relative',
    boxShadow: '0px 2px 4px -1px rgba(255, 255, 255, 0.2),0px 4px 5px 0px rgba(255, 255, 255, 0.3),0px 1px 10px 0px rgba(255, 255, 255, 0.1)'
  }));

  const renderPlans = () => {
    return plans.map(plan => (
      <GridItem xs={4}>
        <Card sx={{ paddingX: 3, paddingY: 2.25, borderRadius: '20px' }}>
          <GridContainer flexDirection="column" alignItems="center">
            <Typography variant="h1" color="textSecondary">{plan.name}</Typography>
            <Typography
              variant="caption"
              color="primary"
              fontSize={15}
              fontWeight="bolder"
              marginTop={1.5}>
              <i>{plan.description}</i>
            </Typography>
          </GridContainer>
          <Divider style={{ margin: '1.25rem 0' }} />
          <GridContainer flexDirection="column" alignItems="center">
            <Typography
              variant="h1"
              color="primary"
              fontSize={40}
              fontWeight="bolder"
              marginTop={.75}>
              {plan.price}
            </Typography>
          </GridContainer>
          <List>
            {plan.options.map(option => (<ListItem>
              <ListItemText classes={{ primary: classes.primaryList }} primary={option} />
            </ListItem>))}
          </List>

          <Divider />

          <GridContainer justifyContent="center" marginTop={3}>
            <Button variant="contained">SELECT</Button>
          </GridContainer>
        </Card>
      </GridItem>
    ));
  }

  return (
    <>
      <Helmet><title>Dashboard</title></Helmet>
      <GridContainer paddingLeft={3}>
        <GridItem xs={12} sx={{ mt: 4 }}>
          <Typography variant="h2" color="textSecondary">Dashboard</Typography>
        </GridItem>

        <GridItem xs={4} sx={{ mt: 2, ml: 0 }}>
          <StyledCard sx={{ p: 2 }} elevation={4} className={classes.shadow}>
            <Avatar
              alt="AO"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 56, height: 56, mb: 1.75 }} />
            <Typography variant="h4" color="primary">Alexander Osinskii</Typography>
            <Typography variant="h5" color="primary" marginTop={1}>273 Redwood Ave. Woodstock, GA 30188</Typography>
          </StyledCard>
        </GridItem>

        <GridItem xs={4} sx={{ mt: 2, ml: 0 }}>
          <StyledCard sx={{ p: 2 }} elevation={4} className={classes.shadow}>
            <GridContainer justifyContent="space-between" alignItems="center">
              <GridItem padding={0}><Typography variant="h3" color="primary">Payment method</Typography></GridItem>
              <GridItem padding={0}>
                <IconButton aria-label="edit">
                  <Edit />
                </IconButton>
              </GridItem>
            </GridContainer>
            <Typography variant="h5" color="primary" marginTop={1}>**** **** **** 4920</Typography>
            <GridContainer alignItems="center" marginTop={2}>
              <GridItem padding={0} marginRight={2}><img src={Visa} alt='Visa' width={50} /></GridItem>
              <GridItem padding={0}><img src={MasterCard} alt='Master Card' width={50} /></GridItem>
            </GridContainer>
          </StyledCard>
        </GridItem>

        <GridItem xs={12} sx={{ mt: 4 }}>
          <Typography variant="h2" color="textSecondary">Manage subscription</Typography>
          <Typography variant="h5" color="error" marginTop={1} marginBottom={2}>Subscription expired.</Typography>

          <CustomButton title="Activate" icon={Receipt} buttonClassName={classes.button} />
          <CustomButton title="Cancel" icon={Cancel} />
        </GridItem>

        <GridItem xs={12} sx={{ mt: 4 }}>
          <Typography variant="h2" color="textSecondary">Subscription plans</Typography>

          <GridContainer paddingTop={3}>
            {renderPlans()}
          </GridContainer>
        </GridItem>
      </GridContainer>
    </>
  );
}
