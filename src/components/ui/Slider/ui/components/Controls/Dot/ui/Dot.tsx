import { FC, useContext } from 'react';
import styles from './Dot.module.scss';
import { SliderContext } from '../../../../Slider';

interface DotProps {
    number: number;
};

export const Dot: FC<DotProps> = (props) => {
    const {
        number
    } = props;

    const { goToSlide, slideNumber } = useContext<any>(SliderContext);

    return (
        <div
            className={`${styles.dot} ${slideNumber === number ? styles.selected : ""}`}
            onClick={() => goToSlide(number)}
        />
    );
};