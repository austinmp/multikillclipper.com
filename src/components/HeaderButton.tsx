import React from 'react';
import Button from '@mui/material/Button';
import styles from '../multi-kill-clipper.module.css'
import Tooltip from '@mui/material/Tooltip';

type HeaderButtonProps = {
    Icon: React.ElementType;
    className?: string;
    tooltipTitle?: string;
    href?: string;

}
export default function HeaderButton({ Icon, className, tooltipTitle, href }: HeaderButtonProps) {

    return (
        <Tooltip title={tooltipTitle}>
            <Button
                size="small"
                className={styles.headerBtn}
                variant="contained"
                href={href || ""}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Icon />
            </Button >
        </Tooltip>
    );


}