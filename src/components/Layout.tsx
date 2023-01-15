import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Box } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <Box minHeight="100vh" paddingTop="70px">
      <Header />
         <Box minHeight="80vh">
            {children}
          </Box>
      <Footer />
    </Box>
  )
}

export default Layout;
