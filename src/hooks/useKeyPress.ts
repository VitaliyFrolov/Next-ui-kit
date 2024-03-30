import { useEffect } from "react";

export const useKeyPress = (key: string, callBack: any): null => {
    const handleKeyDown = (event: KeyboardEvent): void => {
        if (event.key === key && callBack) {
            callBack();
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [key, callBack]); 

    return null;
};