import Header from './components/Header'
import { Box } from '@mui/material';
import styles from './multi-kill-clipper.module.css'
import HeroSection from './components/HeroSection';
import { createTheme, ThemeProvider } from '@mui/material';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import MailchimpSignup from './components/EmailForm';

const theme = createTheme({
  palette: {
    text: {
      primary: '#212121',
    }
  },
  typography: {
    allVariants: {
      color: 'text.primary',
      fontSize: '1.25rem'
    },
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontSize: '4.0rem',
      fontFamily: "'DM Sans', sans-serif",
    },
    h2: {
      fontSize: '3.5rem',
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: "bold",
    },
    h3: {
      fontSize: '2.0rem',
      fontFamily: "'DM Sans', sans-serif",
    },
    h4: {
      fontFamily: "'DM Sans', sans-serif",
    },
    h5: {
      fontFamily: "'DM Sans', sans-serif",
    },
    h6: {
      fontSize: '0.6rem',
      fontFamily: "'DM Sans', sans-serif",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className={styles.app}>
        <Box className={styles.appInnerContent}>
          <Header className={styles.header} />
          <HeroSection className={styles.heroSection} />
          <MailchimpSignup />
          <MainContent className={styles.mainContent} />
          <Footer className={styles.footer} />
        </Box>

      </Box>

    </ThemeProvider>
  );

}

export default App;
