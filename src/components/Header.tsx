import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from '../multi-kill-clipper.module.css'
import HeaderButton from './HeaderButton';
import GitHubIcon from '@mui/icons-material/GitHub';


type HeaderProps = {
  className?: string;
}
export default function Header({ className }: HeaderProps) {
  return (
    <AppBar className={className} elevation={10}>
      <Toolbar className={styles.headerToolbar}>
        <div className={styles.appLogoCtn}>
          <a href="/" className={styles.appLogo}>
            <img className={styles.gwenIcon} src={`${process.env.PUBLIC_URL}/gwen-256x256.png`} alt="Gwen Champion" />
            <Typography variant="h2" component="div" fontSize={20} className={styles.appLogoText}>
              Multi Kill Clipper
            </Typography>
          </a>
        </div>
        <HeaderButton
          tooltipTitle="GitHub repository"
          href="https://github.com/austinmp/multi-kill-clipper"
          Icon={GitHubIcon}
        />
      </Toolbar>
    </ AppBar>
  );


}