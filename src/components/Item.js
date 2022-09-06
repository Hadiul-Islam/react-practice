import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Item = (props) => {
    const deleteHandler = () => {
        props.onDelete(props.id);
        toast.error("Item deleted successfully", {autoClose: 1000})
    }

    return (
        <div className='item' onClick={deleteHandler}>
            <h1>{props.name}</h1>
            <h2>{props.todo}</h2>
        </div>
    );
}

export default Item;
