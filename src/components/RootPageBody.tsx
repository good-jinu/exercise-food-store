import React from 'react';
import Link from 'next/link';
import { Box, Typography } from '@mui/material'
import { Button } from '@mui/material';

const RootPageBody = () => {
    return (
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        padding: "10vh 0 0 0",
        alignContent: "center"
      }}>
        <Typography variant='h2' component='h1' align='center'>
          당신의 맛집을 <br/> 찾으세요
        </Typography>
        <Typography my="20px" component='p' align='center'>
          한국의 맛집들이 있습니다. 한번 찾아보세요!
        </Typography>
        <Box sx={{
          display: "flex",
          justifyContent: "center",
        }}>
          <Link href="Store" style={{textDecoration: "none", color: "inherit"}}>
            <Button variant="contained">맛집 찾기 ➤</Button>
          </Link>
        </Box>
      </Box>
    )
}

export default RootPageBody;