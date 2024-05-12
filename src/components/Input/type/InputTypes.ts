export type InputState = "empty" | "error" | "warning" | "success" | "none";
export type InputType = "text" | "email" | "phone";
export type ValidationResult = {
    value: string,
    state: InputState,
};