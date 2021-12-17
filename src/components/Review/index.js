import React, { useState } from 'react';
import { GridContainer } from 'components';
import { Button, Typography } from '@mui/material';
import { ThumbUp, Reply, Share } from '@mui/icons-material';
import { GridItem } from 'components';
import { makeStyles } from '@mui/styles';
import dayjs from 'dayjs';
import CustomButton from 'components/CustomButton';
import ReactMarkdown from 'react-markdown';

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: '15px'
  }
}));

export default function Review({ data }) {
  const [likes, setLike] = useState(0);
  const [seeMore, setSeeMore] = useState(false);
  const classes = useStyles();

  const seeMoreHandler = () => {
    setSeeMore(prev => !prev);
  }

  const likesHandler = () => {
    setLike(prev => prev += 1);
  }

  const renderContent = () => {
    if (data.content.length > 300) {
      if (seeMore) {
        return (
          <Typography variant="subtitle1">
            <GridContainer paddingLeft={1}><ReactMarkdown children={data.content} /></GridContainer>
            {seeMore && <Button onClick={seeMoreHandler} style={{ color: 'orange', textTransform: 'capitalize' }}>Hide</Button>}
          </Typography>);
      } else {
        return (
          <Typography variant="subtitle1">
            <GridContainer paddingLeft={1}><ReactMarkdown children={data.content.substring(0, 300) + '...'} /></GridContainer>
            {!seeMore && <Button onClick={seeMoreHandler} style={{ color: 'orange', textTransform: 'capitalize' }}>See more</Button>}
          </Typography>);
      }
    } else {
      return (<Typography variant="subtitle1">
        <GridContainer paddingLeft={1}><ReactMarkdown children={data.content} /></GridContainer>
      </Typography>);
    }
  }

  return (
    <>
      <GridContainer justifyContent="space-between" alignItems="center" marginTop={4}>
        <GridItem>
          <GridContainer alignItems="center">
            <GridItem style={{ width: '75px', height: '75px', display: 'flex', alignItems: 'center' }}>
              <img
                src={data.author_details.avatar_path && data.author_details.avatar_path.replace('/', '')}
                alt="Avatar"
                style={{ width: '100%', borderRadius: '50%' }} />
            </GridItem>
            <GridItem>
              <Typography variant="h4" fontStyle="italic">{data.author}</Typography>
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem>
          <Typography color="orange">{dayjs(data.created_at).format("MMM DD YYYY, HH:mm")}</Typography>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem style={{ width: '90px' }} />
        <GridItem xs>{renderContent()}</GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem style={{ width: '90px' }} />
        <GridItem xs marginTop={4}>
          <CustomButton title="Like" icon={ThumbUp} onClick={likesHandler} buttonClassName={classes.button}>
            <Typography variant="subtitle2" color="orange" marginLeft={1}>{likes}</Typography>
          </CustomButton>
          <CustomButton title="Reply" icon={Reply} buttonClassName={classes.button} />
          <CustomButton title="Share" icon={Share} buttonClassName={classes.button} />
          <hr style={{ marginTop: '1.25rem' }} />
        </GridItem>
      </GridContainer>
    </>
  );
}
