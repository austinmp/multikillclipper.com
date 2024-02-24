import styles from '../multi-kill-clipper.module.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BugReportIcon from '@mui/icons-material/BugReport';
import HelpIcon from '@mui/icons-material/Help';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Divider from '@mui/material/Divider';


type MaintContentProps = {
  className?: string;
}

export default function MainContent({ className }: MaintContentProps) {
  return (
    <div className={className}>

      <Divider className={styles.divider} />
      <div className={styles.appSummaryRow}>
        <div className={`${styles.appSummary} ${styles.justifyLeft}`}>
          <Typography variant="h2" >Automatic Multi-Kill Clips</Typography>
          <Typography component={"p"} className={styles.appSummaryText} >
            Just enter a summoner name, select the desired multi-kill types, and the app does the rest. Multi Kill Clipper allows you to search through your own games or explore the performances of any player within your region. Whether you're aiming to showcase your own skills, track a friend’s progress, or analyze plays from top-tier players and streamers, Multi Kill Clipper offers the simplest way to immortalize any multi-kill sequence.
          </Typography>

        </div>
        <div>
          <img className={styles.appSummaryIcon} src={`${process.env.PUBLIC_URL}/video-editor.png`} alt="Video Clip" />
        </div>
      </div>
      <Divider className={styles.divider} />
      <div className={styles.appSummaryRow}>
        <div>
          <img className={styles.appSummaryIcon} src={`${process.env.PUBLIC_URL}/video-folder.png`} alt="Video Folder" />
        </div>
        <div className={`${styles.appSummary} ${styles.justifyRight}`}>
          <Typography variant="h2">Effortless Clip Access and Management</Typography>
          <Typography component={"p"} className={styles.appSummaryText}>
            With Multi Kill Clipper, accessing and managing your clips is a breeze. The app automatically stores  your legendary plays in the default League of Legends Highlights folder. Easily review your victories and standout moments right from the app or directly within the League client, ensuring your highlights are always just a click away.
          </Typography>
        </div>
      </div>
      <Divider className={styles.divider} />
      <div className={styles.appSummaryRow}>
        <div className={`${styles.appSummary} ${styles.justifyLeft}`}>
          <Typography variant="h2"> Seamless Integration with the League of Legends Client</Typography>
          <Typography component={"p"} className={styles.appSummaryText} >
            Multi Kill Clipper connects automatically to your League client, utilizing Riot's API for precise, automatic capture of key moments. Experience streamlined recording of your best plays without the hassle of sifting through endless match history and replay footage.
          </Typography>
        </div>
        <div >
          <img className={styles.appSummaryIcon} src={`${process.env.PUBLIC_URL}/wizard.png`} alt="Wizard" />
        </div>
      </div>
      <Divider className={styles.divider} />
      <div className={styles.gitHubIssuesCtn}>
        <Typography variant="h2" align='center'>Feedback & Support</Typography>

        <div className={styles.gitHubIssues}>
          <Button
            size="large"
            variant="outlined"
            href={"https://github.com/austinmp/multi-kill-clipper/issues/new/choose"}
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<BugReportIcon />}
            className={styles.gitHubIssuesBtn}
          >
            <Typography>Bug Report</Typography>
          </Button>

          <Button
            size="large"
            variant="outlined"
            href="https://github.com/austinmp/multi-kill-clipper/discussions/categories/general"
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<HelpIcon />}
            className={styles.gitHubIssuesBtn}
          >
            <Typography>Question</Typography>
          </Button>
          <Button
            size="large"
            variant="outlined"
            href="https://github.com/austinmp/multi-kill-clipper/discussions/categories/ideas"
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<LightbulbIcon />}
            className={styles.gitHubIssuesBtn}
          >
            <Typography>Feature Request</Typography>
          </Button>

        </div>
      </div>
    </div >

  )
}