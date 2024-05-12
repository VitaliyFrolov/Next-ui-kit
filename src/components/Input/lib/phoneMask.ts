import { getCursorPosition } from "../helpers/getCursorPosition";

export function phoneMask(
    value: string,
    _maxLength: number | undefined,
    ref: React.RefObject<HTMLInputElement>
) {
    let phone = value
   
    const cursorPosition = getCursorPosition(ref);

    if (ref.current) {
        ref.current.value = phone;
        ref.current.setSelectionRange(cursorPosition, cursorPosition);
    }
    
    return {
        value: phone,
    }
};