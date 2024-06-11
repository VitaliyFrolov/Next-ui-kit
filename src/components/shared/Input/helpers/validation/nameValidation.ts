import { ValidationResult } from "../../type/InputTypes"

export function nameValidation(value: string): ValidationResult {
    if (value.length === 0) {
        return {
            value: value,
            state: 'empty'
        }
    } else {
        return {
            value: value,
            state: 'success'
        }
    }
};