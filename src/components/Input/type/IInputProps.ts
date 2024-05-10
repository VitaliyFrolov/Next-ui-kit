export type InputAlert = "empty" | "error" | "warning" | "success" | "none";

export interface InputProps {
    handler: any;
    validation?: any;
    error?: boolean;
    className?: string;
    outline?: string;
    placeholder?: string;
    type?: string;
    maxLength?: number;
    mask?: any;
};

export interface HandlerValueProps {
    value: string;
    alert: InputAlert;
    type: string;
};