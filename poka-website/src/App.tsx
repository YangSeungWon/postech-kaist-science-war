import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, ThemeProvider, createTheme } from '@mui/material';
import HomePage from './pages/HomePage';
import ScoresPage from './pages/ScoresPage';
import AboutPage from './pages/AboutPage';
import LinksPage from './pages/LinksPage';
import NoticePage from './pages/NoticePage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#C80150', // POSTECH Red
    },
  },
  typography: {
    fontFamily: '"Noto Sans KR", sans-serif',
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: 'pointer',
        },
      },
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>포카전</Link>
            </Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/scores">Scores</Button>
            <Button color="inherit" component={Link} to="/notices">Notices</Button>
            <Button color="inherit" component={Link} to="/links">Links</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
          </Toolbar>
        </AppBar>
        <Container style={{ marginTop: '2rem' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/scores" element={<ScoresPage />} />
            <Route path="/links" element={<LinksPage />} />
            <Route path="/notices" element={<NoticePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;