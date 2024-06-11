import { FC } from 'react';
import styles from './Card.module.scss';
import { mokaDataProps } from '../type/data';
import { Title } from '../../Title';

export const Card: FC<mokaDataProps> = (item) => {
    return (
        <div className={styles.card} key={item.id}>
            <Title
                size='m'
                tag='h2'
            >
                {item.title}
            </Title>
            <p>
                {item.description}
            </p>
        </div>
    )
};