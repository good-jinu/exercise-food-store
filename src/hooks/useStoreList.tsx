import React, { useState, useEffect } from "react";
import fetchToSetData from "@/utility/fetchToSetData";

export interface StoreInfo {
  id: number;
  name: string;
  url: string;
  description: string;
  image: string;
  thumb: string;
};

const useStoreList = () => {
  const [storesList, setStoresList] = useState<Array<StoreInfo>>([])
  const [selectedProduct, setSelectedProduct] = useState<StoreInfo>({id:1, name:'', url:'', description:'', image:'', thumb:'' })
  const [open, setOpen] = React.useState(false)

  const handleOpen = (product: StoreInfo) => {
    setSelectedProduct(product)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    let baseURL = 'http://' + window.location.hostname + ':9000/stores';
    fetchToSetData<Array<StoreInfo>>(baseURL, setStoresList);
  }, []);

  return {
    open,
    storesList,
    selectedProduct,
    handleOpen,
    handleClose
  };
};

export default useStoreList;