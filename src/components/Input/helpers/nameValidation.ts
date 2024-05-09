export function nameValidation(value: string) {
    if (value.length === 0) {
        return {
            value: value,
            alert: 'empty'
        }
    } else {
        return {
            value: value,
            alert: 'success'
        }
    }
};