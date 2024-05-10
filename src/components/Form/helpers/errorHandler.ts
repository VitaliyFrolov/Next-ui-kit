export const errorHandler = (data: any[]) => {
    const values =  data.map((item: any) => {
        if (item.alert !== 'success') {
            return { ...item, alert: 'error' };
        }
        return item;
    });

    return values;
};