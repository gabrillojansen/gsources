import React, { useContext } from 'react';
import { Context } from '../context/Context';
import { Item } from './Item';

export const Content = (props) => {
    const { ITEMS } = useContext(Context);

    return (
      <div className="w-full flex items-center justify-center">
        <div className="mt-12 max-w-[1290px] m-auto grid justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {ITEMS.map((ITEM) => {
                if (props.category === "/" || props.category === ITEM.category) {
                    return <Item key={ITEM.id} itemData={ITEM} />;
                } else {
                  return null;
                }
            })}
        </div>
      </div>
    );
};
