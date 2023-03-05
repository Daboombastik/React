import React, {Component, FC} from 'react';

interface ListProps<T> {
    items: T[],
    renderItem: (item: T) => React.ReactNode

}

export function List<T> (props: ListProps<T>) {
    return (
        <div>
            <p>{props.items.map(props.renderItem)}</p>
        </div>
    );

}
