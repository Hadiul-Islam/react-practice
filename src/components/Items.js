import React, {useState} from 'react';
import FilterItem from './FilterItem';
import Item from './Item';
import Card from './UI/Card';

const Items = (props) => {
    const [filterDay, setFilterDay] = useState('Mon');

    const filterChangeHandler = (selectDay) => {
        setFilterDay(selectDay);
    };

    const filteredItems = props.items.filter(item => {
        console.log(item.todo);
        return item.todo === filterDay;
        
    });

    let itemContent = <p>No items found. Maybe create one?</p>;

    if (filteredItems.length > 0) {
        itemContent = filteredItems.map((item) => {
            return ( <Item 
                key={item.id} 
                name={item.name} 
                day={item.todo} 
                />)
        });
    }


    return (
        <Card>
            <FilterItem
                selected={filterDay}
                onChangeFilter={filterChangeHandler}
            />
            {itemContent}
        </Card>
    );
}

export default Items;
