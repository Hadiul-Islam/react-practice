import React from 'react';

const FilterItem = (props) => {

    const dropDownHandler = (e) => {
        props.onChangeFilter(e.target.value);
    }


    return (
        <div className='filter-item'>
            <h6>Filter item by <span className='day'>Day</span></h6>
            <select value={props.selected} onChange={dropDownHandler}>
                <option value="Sat">Sat</option>
                <option value="Sun">Sun</option>
                <option value="Mon">Mon</option>
                <option value="Tue">Tue</option>
                <option value="Wed">Wed</option>
                <option value="Thu">Thu</option>
                <option value="Fri">Fri</option>
            </select> 
        </div>
    );
}

export default FilterItem;
