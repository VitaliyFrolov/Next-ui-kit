import { ValidationResult } from "../../type/InputTypes"

export function phoneValidation(value: string): ValidationResult {
    if (value.length <= 3) {
        return {
            value: value,
            state: 'empty'
        }
    } else if (value.length < 18) {
        return {
            value: value,
            state: 'warning'
        }
    } else {
        return {
            value: value,
            state: 'success'
        }
    }
};