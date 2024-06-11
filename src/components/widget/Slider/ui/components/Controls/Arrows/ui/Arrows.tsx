import { FC, useContext } from 'react';
import styles from './Arrows.module.scss';
import { SliderContext } from '../../../../Slider';
import { SliderContextValue } from '@/components/ui/Slider/types/sliderTypes';

export const Arrows: FC = () => {
    const { changeSlide } = useContext<SliderContextValue>(SliderContext);

    return (
        <div className={styles.arrows}>
            <div
                className={styles.arrow_left}
                onClick={() => changeSlide(-1)}
            />
            <div
                className={styles.arrow_right}
                onClick={() => changeSlide(1)}
            />
        </div>
    )
};