import { ValidationResult } from "../../type/InputTypes";

export function emailValidation(value: string): ValidationResult {
    const regex = /^(?:[a-z0-9!#$%&'*+/=?^_{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    const email = regex.test(value);

    const result: ValidationResult = {
        value: value,
        state: 'none'
    };


    if (value.length === 0) {
        return {
            value: value,
            state: 'empty'
        }
    } else if (email === false) {
        return {
            value: value,
            state: 'warning'
        }
    } else if (email === true) {
        return {
            value: value,
            state: 'success'
        }
    }

    return result;
};