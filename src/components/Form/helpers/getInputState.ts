export function getInputState(values: any[] = [], type: string) {
    const value = values.find((value: any) => value.type === type);

    if (value.alert === 'error') {
        return true
    } else false
};