import React from 'react';
import { Box, Typography } from '@mui/material';
import useStyles from '@/styles/productListModalStyle';
import StoreList from '@/components/StoresList';

const Store: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h3" component="h3" className={classes.descHeader}>
        Food stores
      </Typography>
      <StoreList/>
    </Box>
  )
}

export default Store
