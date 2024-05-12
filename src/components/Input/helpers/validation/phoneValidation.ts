import { ValidationResult } from "../../type/InputTypes"

export function phoneValidation(value: string): ValidationResult {
    if (value.length <= 3) {
        return {
            value: value,
            alert: 'empty'
        }
    } else if (value.length < 18) {
        return {
            value: value,
            alert: 'warning'
        }
    } else {
        return {
            value: value,
            alert: 'success'
        }
    }
};