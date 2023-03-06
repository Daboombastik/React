import React from 'react';
import {CollectionType} from "../../types/CollectionType";

const Collection: React.FC<CollectionType> = ({data, search}) => {

    const collection_big = (photos: string[]) => photos.filter(url => url)[0]
    const collection_small = (photos: string[]) => photos.slice(0, 3)
        .map(url => <img className="collection__mini" src={url} alt="Item"/>)

    return (
        <div className="collection">
            {data.collections
                .filter(({name}) => name?.toLowerCase().includes(search.toLowerCase()))
                .map(({name, photos}) => (
                        <>
                            <img className="collection__big"
                                 src={photos ? collection_big(photos) : ""} alt="Item"/>
                            <div className="collection__bottom">
                                {photos ? collection_small(photos) : ""}
                            </div>
                            <h4>{name}</h4>
                        </>
                    )
                )}
        </div>
    );
}

export default Collection;