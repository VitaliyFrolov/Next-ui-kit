import { getCursorPosition } from "../helpers/getCursorPosition";

export function phoneMask(
    value: string,
    _maxLength: number,
    ref: any
) {
    let phone = value
        .replace(/\D/g, "")
        .replace(/^[78]/, "+7 ")
        .replace(/^(\d)/, "+7 ($1")
        .replace(/^\+7\s(\d{1,2})/, "+7 ($1")
        .replace(/^(\+7\s\(\d{3})(\d)/, "$1) $2")
        .replace(/(\d{3})(\d{1,4})/, "$1-$2")
        .replace(/(-\d{2})(\d{1,3})/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1");

    const cursorPosition = getCursorPosition(ref);

    ref.current.value = phone;
    ref.current.setSelectionRange(cursorPosition, cursorPosition);
    
    return {
        value: phone,
    }
};