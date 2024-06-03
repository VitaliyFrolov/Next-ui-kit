import { FormModel } from "../type/FormTypes";

export const isAllInputValid = (values: FormModel[]) => {
    return values.every(value => value.state === 'success');
};