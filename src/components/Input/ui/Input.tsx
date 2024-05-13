import { FC, useEffect, useRef, useState } from 'react';
import { InputProps } from '../type/IInputProps';
import { cn } from '../../../libs/classNames';
import { InputState } from '../type/InputTypes';
import { useKeyPress } from '../../../hooks/useKeyPress';
import styles from './Input.module.scss';

export const Input: FC<InputProps> = ({
    dataHandler,
    validation,
    errorState = false,
    className,
    placeholder,
    type,
    maxLength,
    mask
}) => {
    const [ value, setValue ] = useState<string>('');
    const [ inputState, setInputState ] = useState<InputState>('empty');
    const [ outline, setOutline] = useState<InputState>('none');
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleValue = (e: any) => {
        e.stopPropagation();
        let newValue = e.target.value;
    
        if (mask) {
            const maskedValue = mask(newValue, maxLength, inputRef);
            newValue = maskedValue.value;
        }
    
        setValue(newValue);
    };    

    const updateInputState = (value: string) => {  
        if (validation) {
            let validValue = validation(value);
            setInputState(validValue.state);
        } else {
           setInputState('none')
        };
    };

    const onBlurInput = (e: React.FocusEvent<HTMLInputElement>) => {
        e.stopPropagation();
        dataHandler(e.target.value, inputState, type);
        updateInputState(e.target.value);
        setOutline(inputState);
    };

    const onKeyDown = () => {
        setOutline(inputState);
    };
    
    useKeyPress('Enter', onKeyDown)

    useEffect(() => {
        const validValue: any = validation ? validation(value) : { state: 'none' };
        setInputState(validValue.state);
        dataHandler(value, validValue.state, type);
    }, [value]);

    useEffect(() => {
        if (errorState === true) {
            setInputState('error');
            setOutline('error');
        }
    }, [errorState]);

    return (
        <input
            className={cn([className, styles[`outline_${outline}`]])}
            placeholder={placeholder}
            type={type}
            name={type}
            maxLength={maxLength}
            onChange={(e) => handleValue(e)}
            onBlur={(e) => onBlurInput(e)}
            value={value}
            ref={inputRef}
        />
    )
};