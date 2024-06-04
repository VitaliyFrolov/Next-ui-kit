import { FC, useContext } from "react";
import { SliderContext } from "../../../Slider";
import styles from './SliderList.module.scss';

export const SliderList: FC = () => {
    const { slideNumber, items } = useContext<any>(SliderContext);

    return (
        <div
            className={styles.list}
            style={{ transform: `translateX(-${slideNumber * 100}%)`}}
        >
            {items.map((slide: any, index: number) => (
                <div key={index}>
                    
                </div>
            ))}
        </div>
    )
};  