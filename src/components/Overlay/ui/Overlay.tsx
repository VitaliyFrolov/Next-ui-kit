import { FC, useRef, ReactElement, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useKeyPress } from '../../../hooks/useKeyPress';
import { scrollBlocker } from '../helpers/scrollBlocker';
import styles from './Overlay.module.scss';

interface OverlayProps {
    active: boolean,
    esc: () => void,
}

export const Overlay: FC<OverlayProps> = ({
    active,
    esc,
}) => {
    const ref = useRef<Element | null>(null);
    const background = useRef<HTMLDivElement>(null);

    useEffect(() => {
        ref.current = document.querySelector<HTMLElement>('#body')
    }, [])

    const overlay: ReactElement | null = <div ref={background} className={styles.overlay} onClick={() => esc()}> </div>;
    scrollBlocker(active);
    useKeyPress("Escape", esc);

    return (active && ref.current) ? createPortal(overlay, ref.current): null
}