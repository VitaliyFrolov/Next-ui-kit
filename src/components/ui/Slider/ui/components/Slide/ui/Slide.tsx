import { FC } from 'react';
import styles from './Slide.module.scss';
import { SlideImage } from '../../SlideImage';
import { SlideTitle } from '../../SlideTitle';

interface SlideProps {
   data: any
};

export const Slide: FC<SlideProps> = (props) => {
    const {
      data
    } = props;

    const {
        url,
        title
    } = data;

    return (
        <div className={styles.slide}>
            <SlideImage src={url} alt={title} />
            <SlideTitle title={title} />
        </div>
    )
};