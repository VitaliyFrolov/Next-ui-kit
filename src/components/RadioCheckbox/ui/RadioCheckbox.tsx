import { FC } from 'react';
import { cn } from '../../../libs/classNames';
import styles from './RadioCheckbox.module.scss';

export interface RadioCheckboxProps {
    label?: string,
    onClick?: () => void
    className?: string
}

export const RadioCheckbox: FC<RadioCheckboxProps> = ({
    label,
    onClick,
    className,
}) => {
    return (
        <label className={styles.label}>
            <input
                type='checkbox'
                className={cn([styles.checkbox, className])}
                onClick={onClick}
            />
            <span
                className={styles.fakeCheckbox}
            />
            <span>
                {label}
            </span>
        </label>
    )
};