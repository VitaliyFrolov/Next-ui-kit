import { FC } from "react";

export interface IconProps {
    className?: string;
    id: string;
    spriteURL: string;
    width?: number;
    height?: number;
}

export const Icon: FC<IconProps> = (props) => {
    const {
        className,
        id,
        spriteURL,
        width = 50,
        height = 50,
    } = props;

    return (
        <svg width={`${width}px`} height={`${height}px`} className={className}>
            <use xlinkHref={`${spriteURL}#${id}`} />
        </svg>
    );
}
