import { FC, useRef, ReactElement, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useKeyPress } from '@/hooks/useKeyPress';
import { scrollBlocker } from '../helpers/scrollBlocker';
import styles from './Overlay.module.scss';

export interface OverlayProps {
    root: string,
    active: boolean,
    shading?: string,
    close: () => void,
}

export const Overlay: FC<OverlayProps> = ({
    root,
    active,
    shading = 20,
    close,
}) => {
    const ref = useRef<Element | null>(null);
    const background = useRef<HTMLDivElement>(null);

    useEffect(() => {
        ref.current = document.querySelector<HTMLElement>(root)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const overlay: ReactElement | null = <div ref={background} style={{backgroundColor: `rgba(0, 0, 0, ${shading}%`}} className={styles.overlay} onClick={() => close()}> </div>;
    scrollBlocker(active);
    useKeyPress("Escape", close);

    return (active && ref.current) ? createPortal(overlay, ref.current): null
}