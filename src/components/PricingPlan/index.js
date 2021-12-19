import React from 'react';
import { Button, Card, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
// Redux
import { GridContainer } from 'components';
import { GridItem } from 'components';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: '15px'
  },
  primaryList: {
    color: theme.palette.secondary.dark,
    textAlign: 'center'
  }
}));

export default function PricingPlan({ plan }) {
  const classes = useStyles();

  return (
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
  );
}
