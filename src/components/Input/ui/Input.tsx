import { FC, useRef, useState } from 'react';
import { InputProps } from '../type/IInputProps';
import { cn } from '@/libs/classNames';
import styles from './Input.module.scss';

//TODO: Добавить обработку нажатия на return key
export const Input: FC<InputProps> = ({
    handler,
    validation,
    className,
    placeholder,
    type,
    maxLength,
    mask
}) => {
    const [ value, setValue ] = useState<string>('');
    const [ alert, setAlert ] = useState<any>('empty');
    const [ outline, setOutline] = useState<any>('none');
    const inputRef = useRef(null);

    const updateAlertState = (value: string) => {  
        if (validation) {
            let valid = validation(value);

            setAlert(valid.alert);
        } else {
           setAlert('none')
        };
    };

    const handleValue = (e: any) => {
        e.stopPropagation();
        let value = e.target.value;
        updateAlertState(value);

        if (mask) {
            const maskedValue = mask(value, maxLength, inputRef);
            setValue(maskedValue.value);
        } else {
            setValue(value);
        }

        handler(value, alert, type);
    };

    const onBlurInput = (e: any) => {
        e.stopPropagation();
        handler(e.target.value, alert, type);
        updateAlertState(e.target.value);
        setOutline(alert);
    };

    return (
        <input
            className={cn([className, styles[`outline_${outline}`]])}
            placeholder={placeholder}
            type={type}
            name={type}
            maxLength={maxLength}
            onChange={(e) => handleValue(e)}
            value={value}
            onBlur={(e) => onBlurInput(e)}
            ref={inputRef}
        />
    )
};