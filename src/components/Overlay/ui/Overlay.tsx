import { FC, useRef, ReactElement, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useKeyPress } from '../../../hooks/useKeyPress';
import { scrollBlocker } from '../helpers/scrollBlocker';
import styles from './Overlay.module.scss';

export interface OverlayProps {
    root: string,
    active: boolean,
    close: () => void,
}

export const Overlay: FC<OverlayProps> = ({
    root,
    active,
    close,
}) => {
    const ref = useRef<Element | null>(null);
    const background = useRef<HTMLDivElement>(null);

    useEffect(() => {
        ref.current = document.querySelector<HTMLElement>(root)
    }, [])

    const overlay: ReactElement | null = <div ref={background} className={styles.overlay} onClick={() => close()}> </div>;
    scrollBlocker(active);
    useKeyPress("Escape", close);

    return (active && ref.current) ? createPortal(overlay, ref.current): null
}