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

interface FormProps {
    title: string;
    alert: InputAlert;
    type: string;
}

export const Form: FC<FormProps> = () => {
    const [ data, setData ] = useState<any>([
        {
            value: '',
            alert: 'none',
            type: 'text'
        },
        {
            value: '',
            alert: 'none',
            type: 'phone'
        },
        {
            value: '',
            alert: 'none',
            type: 'email'
        }
    ]);

    const submit = (e: any) => {
        e.preventDefault();

        if (isAllInputValid(data)) {
            console.log(data);
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
            <form className={styles.form} onSubmit={submit}>
                <Input
                    handler={handlerValue}
                    validation={nameValidation}
                    type='text'
                    placeholder='text'
                    maxLength={20}
                    className={styles.form__input}
                />
                <Input
                    handler={handlerValue}
                    validation={phoneValidation}
                    type='phone'
                    placeholder='phone'
                    mask={phoneMask}
                    maxLength={18}
                    className={styles.form__input}
                /> 
                <Input
                    handler={handlerValue}
                    validation={emailValidation}
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