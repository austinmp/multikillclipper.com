import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styles from '../multi-kill-clipper.module.css'
import DownloadIcon from '@mui/icons-material/Download';

export default function HeroSection() {
	return (
		<Box className={styles.heroSection}>
			<Button size="large" component="label" variant="contained" startIcon={<DownloadIcon />}>
				Download
			</Button>

		</Box >
	);
}