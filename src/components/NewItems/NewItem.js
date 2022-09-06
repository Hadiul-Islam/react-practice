import React from 'react';
import Card from '../UI/Card';
import ItemForm from './ItemForm';

const NewItem = (props) => {

    const saveItemHandler = (enteredItemData) => {
        const itemData = {
            ...enteredItemData,
            id: Math.random().toString()
        };
        props.onSaveData(itemData);
    };


    return (
        <Card className='new-items'>
            <ItemForm onSaveData={saveItemHandler} />
        </Card>
    );
}

export default NewItem;
