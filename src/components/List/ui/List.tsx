import styles from './List.module.scss';
import cn from 'classnames';

export interface ListProps<D> {
    data: D[];
    template: (item: D) => React.ReactElement;
    className?: string;
    isLoading?: boolean;
}

export const List = <D, >(props: ListProps<D>) => {
    const {
        data = [],
        template,
        className,
        isLoading,
    } = props;

    return (
        isLoading ? <div>Loading..</div> : 
        
        <ul className={cn([styles.list, className])}>
            {data.length > 0 ? data.map((item, index) => (
                <li key={index} className={styles.list__item}>
                    {template(item)}
                </li>
            )) : <div>Loading..</div>}
        </ul>
    )
};