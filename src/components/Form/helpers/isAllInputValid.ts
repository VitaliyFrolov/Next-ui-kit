export const isAllInputValid = (values: any[]) => {
    return values.every(value => value.alert === 'success');
};