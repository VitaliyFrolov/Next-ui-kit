import { FormModel } from "../type/FormTypes";

export const errorHandler = (data: FormModel[]): FormModel[] => {
    const values: FormModel[] = data.map((item: FormModel) => {
        if (item.state !== 'success') {
            return { ...item, state: 'error' };
        }
        return item;
    });

    return values;
};