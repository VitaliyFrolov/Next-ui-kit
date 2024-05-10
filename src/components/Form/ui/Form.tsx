'use client'
import { FC, useState } from 'react';
import { Input } from '@/components/Input';
import { InputAlert } from '@/components/Input/type/IInputProps';
import { phoneMask } from '@/components/Input/lib/phoneMask';
import { Title } from '@/components/Title';
import { isAllInputValid } from '../helpers/isAllInputValid';
import { phoneValidation } from '@/components/Input/helpers/phoneValidation';
import { emailValidation } from '@/components/Input/helpers/emailValidation';
import { nameValidation } from '@/components/Input/helpers/nameValidation';
import styles from './Form.module.scss';
import { errorHandler } from '../helpers/errorHandler';
import { getInputState } from '../helpers/getInputState';

interface FormProps {
    model?: any;
};

export const Form: FC<FormProps> = (props) => {
    const {
        model = [],
    } = props;
    const [ data, setData ] = useState<FormProps["model"]>(model);
    const [ warrning, setWarrning ] = useState<boolean>(false);

    const submit = (e: any) => {
        e.preventDefault();

        if (isAllInputValid(data)) {
            console.log(data);
            setWarrning(false);
        } else {
            setData(errorHandler(data))
            setWarrning(true);
        }
    };

    const handlerValue = (
        value: string,
        alert: InputAlert, 
        type: string
    ) => {
        const updateData = data.map((item: any) => {
            if (item.type === type) {
                return {
                    ...item,
                    value: value,
                    alert: alert
                }
            }

            return item;
        });

        setData(updateData);
    };

    return (
        <div className={styles.form__wrapper}>
            <Title className={styles.form__title}>
                Form
            </Title>
            {warrning ? <span>не вспе поля заполнены</span> : null}
            <form className={styles.form} onSubmit={submit}>
                <Input
                    handler={handlerValue}
                    validation={nameValidation}
                    error={getInputState(data, 'text')}
                    type='text'
                    placeholder='text'
                    maxLength={20}
                    className={styles.form__input}
                />
                <Input
                    handler={handlerValue}
                    validation={phoneValidation}
                    error={getInputState(data, 'phone')}
                    type='phone'
                    placeholder='phone'
                    mask={phoneMask}
                    maxLength={18}
                    className={styles.form__input}
                /> 
                <Input
                    handler={handlerValue}
                    validation={emailValidation}
                    error={getInputState(data, 'email')}
                    type='email'
                    placeholder='email'
                    maxLength={20}
                    className={styles.form__input}
                />
                <button className={styles.form__button} type='submit'>
                    submit
                </button> 
            </form>
        </div>
    )
};