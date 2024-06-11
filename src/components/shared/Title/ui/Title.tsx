import { FC } from "react";
import cn from 'classnames';
import styles from './Title.module.scss';

export interface TitleProps {
    className?: string;
    children: string;
    size?: 'm' | 'l' | 's';
    tag?: 'h1' | 'h2' | 'h3' | 'h4';
};

export const Title: FC<TitleProps> = (props) => {
    const {
        className,
        children,
        size = 'm',
        tag: Tag = 'h2'
    } = props;

    return (
        <Tag className={cn([styles.nativeTitle, className, styles[`size-${size}`]])}>
            {children}
        </Tag>
    );
};