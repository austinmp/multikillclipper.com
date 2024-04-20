import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from '../multi-kill-clipper.module.css';
import MicrosoftIcon from '@mui/icons-material/Microsoft'; import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper'; // or '@material-ui/core/Paper' depending on the version


type HeroSectionProps = {
	className?: string;
}

export default function HeroSection({ className }: HeroSectionProps) {
	return (
		<Box className={className}>
			<div className={styles.downloadCtn}>
				<Typography variant="h1">Download Multi Kill Clipper</Typography>
				<Typography fontSize={32}>Discover, create, and showcase your <b className={styles.goldText}>League of Legends</b> multi-kills with unparalleled ease.</Typography>
				<Button
					size="large"
					variant="contained"
					startIcon={<MicrosoftIcon />}
					className={styles.downloadBtn}
					href='https://github.com/austinmp/multi-kill-clipper/releases/latest/download/MultiKillClipper.zip'
				>
					<Typography fontSize={24}>Windows 64-bit</Typography>
				</Button>
			</div>
			<div>
				<Paper
					component="img"
					elevation={20}
					className={styles.appScreenshot}
					src={`${process.env.PUBLIC_URL}/app-screenshot.png`}
					alt="Screen grab of the application interface"
				/>
			</div>
		</Box >
	);
}