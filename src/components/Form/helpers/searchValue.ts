export function searchValue(values: any[], type: string) {
    const value = values.find((value: any) => value.type === type);
    
    if (values.length !== 0) {
        return value.value; 
    } else {
        return '';
    }
};