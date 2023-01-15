import React from 'react';
import { Stack, Grid, Modal, Button, Typography, Link } from '@mui/material';
import useStyles from '@/styles/productListModalStyle';
import { StoreInfo } from '@/hooks/useStoreList';

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  selectedProduct: StoreInfo;
};

const StoreModal: React.FC<ModalProps> = ({ open, handleClose, selectedProduct }: ModalProps) => {
  const classes = useStyles();

  return(
    <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Grid container className={classes.modalContent}>
          <Grid item xs={4} className={classes.modalContentItem}>
            <img src={selectedProduct ? selectedProduct.image : ""} className={classes.modalContentImg}/>
          </Grid>
          <Grid item xs={8} className={classes.modalContentArticle}>
            <Stack direction="row" justifyContent="end" mb={2}>
              <Button onClick={handleClose} variant="outlined">×</Button>
            </Stack>
            <Typography variant="h4" component="h2">{selectedProduct && selectedProduct.name}</Typography>
            <Typography variant="body1">{selectedProduct && selectedProduct.description}</Typography>
            {selectedProduct && selectedProduct.url && 
              <Link href={selectedProduct.url} target="_blank" variant="body2">
                홈페이지 열기
              </Link> }
          </Grid>
        </Grid>
      </Modal>
  );
}

export default StoreModal;