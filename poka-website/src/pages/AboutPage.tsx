import React from 'react';
import { Typography, Container } from '@mui/material';

const AboutPage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        About
      </Typography>
      <Typography variant="body1">
        이 웹사이트는 POSTECH과 KAIST 간의 다양한 종목 대결 점수를 보여줍니다.
      </Typography>
    </Container>
  );
};

export default AboutPage;