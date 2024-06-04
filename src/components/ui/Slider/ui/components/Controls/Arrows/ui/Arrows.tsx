import { FC, useContext } from 'react';
import styles from './Arrows.module.scss';
import { SliderContext } from '../../../../Slider';

export const Arrows: FC = () => {
    const { changeSlide } = useContext<any>(SliderContext);

    return (
        <div className={styles.arrows}>
            <div
                className={styles.arrows_left}
                onClick={() => changeSlide(-1)}
            />
            <div
                className={styles.arrows_right}
                onClick={() => changeSlide(1)}
            />
        </div>
    )
};