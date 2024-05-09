export const isAllInputValid = (values: any[], quantityInputs: number) => {
    if (values.length === quantityInputs) {
        return values.every(value => value.alert === 'success');
    } else return false
};