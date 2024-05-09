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
import { searchValue } from '../helpers/searchValue';
import styles from './Form.module.scss';

export const Form: FC = () => {
    const [ data, setData ] = useState<any>([]);

    const submit = (e: any) => {
        e.preventDefault();
        if (isAllInputValid(data, 3)) {
            console.log({
                name: searchValue(data, 'text'),
                phone: searchValue(data, 'phone'),
                email: searchValue(data, 'email')
            });
        }
    };

    const handlerValue = (
        value: string,
        alert: InputAlert, 
        type: string
    ) => {

        setData((prevData: any[]) => {
            const existingEntryIndex = prevData.findIndex(item => item.type === type);
            if (existingEntryIndex >= 0) {
                const newData = [...prevData];
                newData[existingEntryIndex] = { ...newData[existingEntryIndex], value, alert };
                return newData;
            } else {
                return [...prevData, { type, value, alert }];
            }
        });
    };

    return (
        <div className={styles.form__wrapper}>
            <Title className={styles.form__title}>
                Form
            </Title>
            <form className={styles.form} onSubmit={submit}>
                <Input
                    handler={handlerValue}
                    // validation={nameValidation}
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