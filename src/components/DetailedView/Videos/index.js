import React from 'react';
import { GridItem } from 'components';
import { GridContainer } from 'components';

export default function DetailedViewVideos({ data }) {
  return (
    <GridContainer justifyContent="center">
      <GridContainer justifyContent="center" alignItems="center">
        {data.map((video, index) => (
          <GridItem key={video.key} marginRight={2}>
            <iframe
              width="500"
              height="300"
              src={`https://www.youtube.com/embed/${video.key}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen />
          </GridItem>
        ))}
      </GridContainer>
    </GridContainer>
  );
}
