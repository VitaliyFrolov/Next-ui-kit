import { FC, createContext, useEffect, useState } from 'react';
import styles from './Slider.module.scss';
import { Arrows } from './components/Controls/Arrows/ui/Arrows';
import { SliderList } from './components/SliderList';
import { Dots } from './components/Controls/Dots';

interface SliderProps {
    autoPlay?: boolean;
    autoPlayTime?: number;
    width?: string;
    height?: string;
    data: any;
};

export const SliderContext = createContext({});

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
        setItems(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    const goToSlide = (number: number) => {
        setSlide(number % items.length);
    };

    const handleTouchStart = (e: any) => {
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
        <div
            style={{width, height}}
            className={styles.slider}
            onTouchStart={handleTouchStart}
            onTouchMove={handleToutchMove}
        >
            <SliderContext.Provider
                value={{
                    goToSlide,
                    changeSlide,
                    slideCount: items.length,
                    slideNumber: slide,
                    items
                }}
            >
                <Arrows />
                <SliderList />
                <Dots />
            </SliderContext.Provider>
        </div>
    );
};