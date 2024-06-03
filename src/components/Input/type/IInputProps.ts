import { RefObject } from "react";
import { InputName, InputState, InputType, ValidationResult } from "./InputTypes";

export interface InputProps {
    dataHandler: (value: string, inputState: InputState, type: InputType | undefined) => void;
    validation?: (data: string) => ValidationResult;
    errorState?: boolean;
    className?: string;
    placeholder?: string;
    type?: InputType;
    name: InputName;
    maxLength?: number | undefined;
    mask?: (value: string, maxLength: number | undefined, ref: RefObject<HTMLInputElement>) => { value: string };
};