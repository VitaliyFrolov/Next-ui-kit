import { FC, useContext } from 'react';
import { SliderContext } from '../../../../Slider';
import { Dot } from '../../Dot/ui/Dot';
import styles from './Dots.module.scss';
import { SliderContextValue } from '@/components/ui/Slider/types/sliderTypes';

export const Dots: FC = () => {
    const {slideCount } = useContext<SliderContextValue>(SliderContext);

    const renderDots = () => {
        const dots = [];
        for (let i = 0; i < slideCount; i++) {
            dots.push(<Dot key={`dot-${i}`} number={i} />)
        }

        return dots;
    };

    return <div className={styles.dots}>{renderDots()}</div>;
}; 