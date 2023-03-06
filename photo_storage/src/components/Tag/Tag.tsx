import React from 'react';
import {CollectionType} from "../../types/CollectionType";

const Tag: React.FC<CollectionType> = ({data}) => {
    return (
        <div>
            <ul className="tags">
                {
                    data.categories && data.categories
                        .filter(e => e && e.name)
                        .map(e => <li key={e.name}> {e.name} </li>)
                }
            </ul>
        </div>
    );
};

export default Tag;