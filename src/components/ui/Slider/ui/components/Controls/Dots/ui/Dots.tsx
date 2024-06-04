import { FC, useContext } from 'react';
import { SliderContext } from '../../../../Slider';
import { Dot } from '../../Dot/ui/Dot';
import styles from './Dots.module.scss';

export const Dots: FC = (props) => {
    const { slidersCoutn } = useContext<any>(SliderContext);

    const renderDots = () => {
        const dots = [];
        for (let i = 0; i < slidersCoutn; i++) {
            dots.push(<Dot key={`dot-${i}`} number={i} />)
        }

        return dots;
    };

    return <div className={styles.dots}>{renderDots()}</div>;
};