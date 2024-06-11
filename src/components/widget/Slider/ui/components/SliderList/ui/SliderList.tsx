import { FC, useContext } from "react";
import { SliderContext } from "../../../Slider";
import styles from './SliderList.module.scss';
import { Slide } from "../../Slide/ui/Slide";
import { SliderContextValue, sliderItem } from "@/components/ui/Slider/types/sliderTypes";

export const SliderList: FC = () => {
    const { slideNumber, items } = useContext<SliderContextValue>(SliderContext);

    return (
        <div
            className={styles.list}
            style={{ transform: `translateX(-${slideNumber * 100}%)`}}
        >
            {items.map((slide: sliderItem, index: number) => (
                <Slide key={index} data={slide} />
            ))}
        </div>
    )
};  