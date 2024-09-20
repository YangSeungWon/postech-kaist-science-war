import React from 'react';
import { Typography, Container, Grid, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/system';

const StyledLink = styled(RouterLink)(({ theme }) => ({
  display: 'block',
  padding: theme.spacing(2),
  fontSize: '1.2rem',
  width: '100%',
  marginBottom: theme.spacing(2),
  textAlign: 'center',
  textDecoration: 'none',
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const HomePage: React.FC = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="sm">
      <Typography variant="h2" gutterBottom align="center">
        포스텍 카이스트<br/>학생 대제전
      </Typography>
      <Typography variant="body1" paragraph align="center">
        포카전 관련 정보를 확인하세요!
      </Typography>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <StyledLink to="/scores">
            점수 현황
          </StyledLink>
        </Grid>
        <Grid item>
          <StyledLink to="/notices" style={{ backgroundColor: theme.palette.secondary.main }}>
            긴급 공지사항
          </StyledLink>
        </Grid>
        <Grid item>
          <StyledLink to="/links">
            관련 링크
          </StyledLink>
        </Grid>
        <Grid item>
          <StyledLink to="/about">
            About
          </StyledLink>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;