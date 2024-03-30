import { FC, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';

export interface ModalProps {
    root: string,
    children: React.ReactElement;
    active: boolean;
    onClise?: () => void;
    backgroundColor?: string;
}

export const Modal: FC<ModalProps> = (props) => {
    const {
        root,
        children,
        active,
        onClise,
    } = props;

    const ref = useRef<Element | null>(null);

    useEffect(() => {
        ref.current = document.querySelector<HTMLElement>(root)
    }, [])

    const layout = (
        <div className={styles.modal}>
            <div
                className={styles.overlay}
                onClick={onClise}
            >
                <div className={styles.window} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>  
            </div>
        </div>
    )

    return (active && ref.current) ? createPortal(layout, ref.current) : null
};