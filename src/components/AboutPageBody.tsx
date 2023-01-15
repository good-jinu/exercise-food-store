import React from 'react';
import { Container, Typography } from '@mui/material';

const AboutPageBody: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h5">About Page</Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod 
        augue id augue tincidunt, at finibus urna feugiat.
      </Typography>
    </Container>
  );
};


export default AboutPageBody;