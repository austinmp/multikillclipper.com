import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import { Box } from '@mui/material';
import styles from './multi-kill-clipper.module.css'
import HeroSection from './components/HeroSection';

function App() {
  return (
    <Box className={styles.container}>
      <Header />
      <HeroSection />
    </Box>
  );
}

export default App;
