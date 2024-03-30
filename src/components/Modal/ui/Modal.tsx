import { FC, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';

export interface ModalProps {
    children: React.ReactElement;
    active: boolean;
    outsideClick?: () => void;
    backgroundColor?: string;
}

export const Modal: FC<ModalProps> = (props) => {
    const {
        children,
        active,
        outsideClick,
    } = props;

    const ref = useRef<Element | null>(null);

    useEffect(() => {
        ref.current = document.querySelector<HTMLElement>('#body')
    }, [])

    const layout = (
        <div className={styles.modal}>
            <div
                className={styles.overlay}
                onClick={outsideClick}
            >
                <div className={styles.window} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>  
            </div>
        </div>
    )

    return (active && ref.current) ? createPortal(layout, ref.current) : null
};