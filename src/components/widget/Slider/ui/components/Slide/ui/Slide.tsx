import { FC } from 'react';
import styles from './Slide.module.scss';
import { SlideImage } from '../../SlideImage';
import { SlideTitle } from '../../SlideTitle';
import { sliderItem } from '@/components/ui/Slider/types/sliderTypes';

interface SlideProps {
   data: sliderItem;
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