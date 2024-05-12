'use client'
import type { InputState, InputType } from '@/components/Input';
import { FC, SyntheticEvent, useState } from 'react';
import { Input } from '@/components/Input';
import { phoneMask } from '@/components/Input/lib/phoneMask';
import { Title } from '@/components/Title';
import { isAllInputValid } from '../helpers/isAllInputValid';
import { phoneValidation } from '@/components/Input/helpers/validation/phoneValidation';
import { emailValidation } from '@/components/Input/helpers/validation/emailValidation';
import { nameValidation } from '@/components/Input/helpers/validation/nameValidation';
import { errorHandler } from '../helpers/errorHandler';
import { getInputState } from '../helpers/getInputState';
import { FormModel } from '../type/FormTypes';
import styles from './Form.module.scss';

interface FormProps {
    model?: FormModel[];
};

export const Form: FC<FormProps> = (props) => {
    const {
        model = [],
    } = props;
    const [ data, setData ] = useState<FormModel[]>(model || []);

    const submit = (e: SyntheticEvent) => {
        e.preventDefault();


        if (isAllInputValid(data)) {
            console.log(data);
        } else {
            setData(errorHandler(data))
        }
    };

    const handlerValue = (
        value: string,
        inputState: InputState, 
        type: InputType | undefined,
    ) => {
        const updateData = data.map((item: FormModel) => {
            if (item.type === type) {
                return {
                    ...item,
                    value: value,
                    state: inputState
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
                    dataHandler={handlerValue}
                    validation={nameValidation}
                    errorState={getInputState(data, 'text')}
                    type='text'
                    placeholder='text'
                    maxLength={20}
                    className={styles.form__input}
                />
                <Input
                    dataHandler={handlerValue}
                    validation={phoneValidation}
                    errorState={getInputState(data, 'phone')}
                    type='phone'
                    placeholder='phone'
                    mask={phoneMask}
                    maxLength={18}
                    className={styles.form__input}
                /> 
                <Input
                    dataHandler={handlerValue}
                    validation={emailValidation}
                    errorState={getInputState(data, 'email')}
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