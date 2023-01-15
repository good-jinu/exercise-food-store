import React from 'react';
import { Box, Stack, Container, Typography, Link} from '@mui/material';

const AboutPageBody: React.FC = () => {
  return (
    <Box pt={15}>
      <Container maxWidth="md">
        <Stack flexDirection="row" justifyItems="center" alignItems="center">
          <Stack flexDirection="column" justifyItems="center">
            <Typography variant="h3">맛있고 멋진<br/>가게들을<br/>소개합니다.</Typography>
            <Typography variant="body1">
              Awesome food store는 트렌디하고 맛좋은 레스토랑과 카페들을 보여드립니다.
              가게의 데이터들을 사용자가 보기 좋게 만들어서 화면에 보여드리고 해당 홈페이지로 안내를 합니다.
            </Typography>
            <Typography variant="body1">
              개발dp 관한 내용은 &nbsp;
              <Link href="https://github.com/good-jinu" target="_blank" rel="noopener noreferrer">
                깃헙 레포지토리
              </Link>
              에서 확인하실 수 있습니다.
            </Typography>
          </Stack>
          <Box sx={{
            display: {xs: 'none', md: 'block'}
          }}>
            <img src="/logo.svg"/>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};


export default AboutPageBody;