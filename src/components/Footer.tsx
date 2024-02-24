import { Typography } from '@mui/material';
import styles from '../multi-kill-clipper.module.css'
import Divider from '@mui/material/Divider';

type FooterProps = {
    className?: string;
}

export default function Footer({ className }: FooterProps) {
    return (
        <div>
            <Divider className={styles.divider} />
            <footer className={className}>
                <Typography className={styles.disclaimer} fontSize={14}>
                    Multi Kill Clipper isn't endorsed by Riot Games and doesn't reflect the
                    views or opinions of Riot Games or anyone officially involved in
                    producing or managing Riot Games properties. Riot Games, and all
                    associated properties are trademarks or registered trademarks of Riot
                    Games, Inc.
                </Typography>
                <Typography component="div" className={styles.linkContainer} fontSize={14}>
                    <a href="https://www.flaticon.com/free-icons/video" title="video icons" className={styles.linkStyle}>
                        Video icons created by Freepik - Flaticon
                    </a>
                    <span className={styles.separator}>|</span>
                    <a href="https://www.flaticon.com/free-icons/wizard" title="wizard icons" className={styles.linkStyle}>
                        Wizard icons created by Freepik - Flaticon
                    </a>
                    <span className={styles.separator}>|</span>
                    <a href="https://www.flaticon.com/free-icons/video-folder" title="video folder icons" className={styles.linkStyle}>
                        Video folder icons created by juicy_fish - Flaticon
                    </a>
                </Typography>
                <div>
                    <Typography fontSize={14}>Copyright © 2024 Austin Pinto. All rights reserved. 🚀</Typography>
                </div>
            </footer>
        </div >
    )
}