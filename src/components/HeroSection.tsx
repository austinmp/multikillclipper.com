import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styles from '../multi-kill-clipper.module.css';
import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button';


type HeroSectionProps = {
	className?: string;
}

export default function HeroSection({ className }: HeroSectionProps) {
	return (
		<Box className={className}>
			<Typography variant="h1" sx={{ padding: 1 }}>Download Multi Kill Clipper</Typography>
			<p>Quickly find and create clips of your League of Legends multi kills earned by you or any other player within your region.</p>
			<Button
				size="large"
				component="label"
				variant="contained"
				startIcon={<DownloadIcon />}
				className={styles.downloadBtn}
			>
				<Typography><b>Download</b></Typography>
			</Button>
		</Box >
	);
}