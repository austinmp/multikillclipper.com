import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import { Box } from '@mui/material';
import styles from './multi-kill-clipper.module.css'
import HeroSection from './components/HeroSection';
import { createTheme, ThemeProvider } from '@mui/material';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
// Create a custom MaterialUI theme
const theme = createTheme({
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontSize: '2.5rem',
      fontFamily: "'DM Sans', sans-serif",
      // Include other styles as needed
    },
    h2: {
      fontFamily: "'DM Sans', sans-serif",
      // Include other styles as needed
    },
    h3: {
      fontFamily: "'DM Sans', sans-serif",
    },
    h4: {
      fontFamily: "'DM Sans', sans-serif",
    },
    h5: {
      fontFamily: "'DM Sans', sans-serif",
    },
    h6: {
      fontFamily: "'DM Sans', sans-serif",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className={styles.app}>
        <Header className={styles.header} />
        <HeroSection className={styles.heroSection} />
        <MainContent className={styles.mainContent} />
        <Footer className={styles.footer} />

      </Box>

    </ThemeProvider>
  );

}

export default App;
