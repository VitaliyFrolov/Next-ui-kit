import { FormModel } from "../type/FormTypes";

export function getInputState(values: FormModel[] = [], type: string) {
    const value = values.find((value: FormModel) => value.type === type);

    if (value !== undefined) {
        if (value.state === 'error') {
            return true
        } else false
    }
};