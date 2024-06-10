import { title } from 'process';
import styles from './SlideTitle.module.scss';
import { FC } from 'react';

interface SlideTitleProps {
    title: string;
};

export const SlideTitle: FC<SlideTitleProps> = (props) => {
    const {
        title,
    } = props;

    return (
        <h3
            className={styles.title}
        >
            {title}
        </h3>
    )
};