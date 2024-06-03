export type InputState = "empty" | "error" | "warning" | "success" | "none";
export type InputType = string | undefined;
export type InputName = string | undefined;
export type ValidationResult = {
    value: string,
    state: InputState,
};