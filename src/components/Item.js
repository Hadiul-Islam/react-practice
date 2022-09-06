import React from 'react';

const Item = (props) => {
    const deleteHandler = () => {
        props.onDelete(props.id);
    }

    return (
        <div className='item' onClick={deleteHandler}>
            <h1>{props.name}</h1>
            <h2>{props.todo}</h2>
        </div>
    );
}

export default Item;
