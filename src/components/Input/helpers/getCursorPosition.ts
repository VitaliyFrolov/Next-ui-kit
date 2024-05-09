import React from 'react';

/**
 * Get the cursor position within an input element.
 *
 * @param {React.RefObject<HTMLInputElement>} ref - The reference to the input element.
 * @return {number} The cursor position within the input element.
 */

export const getCursorPosition = (ref: React.RefObject<HTMLInputElement>): number => {
    const input = ref.current;
    if (input) {
        const cursorPosition = input.selectionStart;
        return cursorPosition ? cursorPosition  : 0;
    }
    return 0;
};
