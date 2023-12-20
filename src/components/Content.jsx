import React, { useContext } from 'react';
import { Context } from '../context/Context';
import { Item } from './Item';

export const Content = (props) => {
    const { ITEMS } = useContext(Context);

    // Filter ITEMS based on category
    const filteredItems = ITEMS.filter(ITEM => props.category === "/" || props.category === ITEM.category);

    return (
        <div className="w-full flex items-center justify-center">
            <div className="mt-16 max-w-[1290px] m-auto grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {filteredItems.map((ITEM) => (
                    <Item key={ITEM.id} itemData={ITEM} />
                ))}
            </div>
        </div>
    );
};
