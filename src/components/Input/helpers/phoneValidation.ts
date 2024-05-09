export function phoneValidation(value: string) {
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