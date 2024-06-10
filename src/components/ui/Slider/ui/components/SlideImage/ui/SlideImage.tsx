import { FC } from 'react';
import styles from './SlideImage.module.scss';

interface SlideImageProps {
    src: string;
    alt: string;
};

export const SlideImage: FC<SlideImageProps> = (props) => {
    const {
        src,
        alt
    } = props;

    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={src}
            alt={alt}
            className={styles.image}
        />
    );
};