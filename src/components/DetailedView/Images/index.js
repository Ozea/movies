import React from 'react';
import { GridContainer, GridItem } from 'components';
import { formatMovieUrl } from 'utils/movies';

export default function Images({ data }) {
  return (
    <GridContainer justifyContent="center">
      <GridContainer justifyContent="center" alignItems="center">
        {data.map((image, index) => (
          <GridItem key={index} marginRight={2}>
            <div style={{
              backgroundImage: `url(${formatMovieUrl(image.file_path)})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: '300px',
              width: '500px'
            }} />
          </GridItem>
        ))}
      </GridContainer>
    </GridContainer>
  );
}
