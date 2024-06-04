import { FC } from 'react';
import styles from './Slide.module.scss';

interface SlideProps {
    url: string;
    title: string;
};

export const Slide: FC<SlideProps> = (props) => {
    const {
        url,
        title,
    } = props;

    return (
        <div className={styles.slide}>
            <>Image</>
            <>Title</>
        </div>
    )
};