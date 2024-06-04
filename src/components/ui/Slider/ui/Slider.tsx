import { FC, createContext, useEffect, useState } from 'react';
import styles from './Slider.module.scss';

interface SliderProps {
    autoPlay?: boolean;
    autoPlayTime?: number;
    width?: '%' | 'px';
    height?: '%' | 'px';
    data: any;
};

export const SliderContext = createContext(null);

export const Slider: FC<SliderProps> = (props) => {
    const {
        autoPlay,
        autoPlayTime,
        width,
        height,
        data
    } = props;

    const [ items, setItems ] = useState([]);
    const [ slide, setSlide ] = useState(0);
    const [ touchPosition, setTouchPosition ] = useState(null);

    const changeSlide = (direction: number = 1) => {
        let slideNubmer = 0;

        if (slide + direction < 0) {
            slideNubmer = items.length - 1;
        } else {
            slideNubmer = (slide + direction) % items.length;
        }

        setSlide(slideNubmer);
    };

    useEffect(() => {
        setItems(data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const goToSlide = (number: number) => {
        setSlide(number % items.length);
    };

    const hendleTouchStart = (e: any) => {
        const touchDown = e.touches[0].clientX;

        setTouchPosition(touchDown);
    };

    const handleToutchMove = (e: any) => {
        if (touchPosition === null) {
            return;
        }

        const currentPosition = e.touches[0].clientX;
        const direction = touchPosition - currentPosition;

        if (direction > 10) {
            changeSlide(1);
        }
        
        if (direction < -10) {
            changeSlide(-1);
        }

        setTouchPosition(null);
    };

    useEffect(() => {
        if (!autoPlay) return

        const interval = setInterval(() => {
            changeSlide(1);
        }, autoPlayTime);

        return () => {
            clearInterval(interval);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items, slide]);

    return (
        <div>
            slider
        </div>
    );
};