import React from 'react';
import { Grid } from '@mui/material';
import useStyles from '@/styles/productListModalStyle';
import StoreModal from '@/components/StoreModal';
import useStoreList from '@/hooks/useStoreList';

const StoresList: React.FC = () => {
  const classes = useStyles();
  const useData = useStoreList();
  const open = useData.open;
  const storesList = useData.storesList;
  const selectedProduct = useData.selectedProduct;
  const handleOpen = useData.handleOpen;
  const handleClose = useData.handleClose;


  return (
    <>
      <Grid container spacing={2}>
        {storesList.map((product) => (
          <Grid item xs={6} md={3} key={product.id}>
            <div
              className={classes.product}
              onClick={() => handleOpen(product)}
            >
              <img src={product.thumb}/>
            </div>
          </Grid>
        ))}
      </Grid>
      <StoreModal open={open} handleClose={handleClose} selectedProduct={selectedProduct}/>
    </>
  )
}

export default StoresList;