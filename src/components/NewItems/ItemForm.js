import React, { useState } from "react";

const ItemForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredDay, setEnteredDay] = useState("");

  const nameHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const dayHandler = (e) => {
    setEnteredDay(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const itemData = {
      name: enteredName,
      todo: enteredDay,
    };

    props.onSaveData(itemData);
    setEnteredName("");
    setEnteredDay("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="row">
      <div className="col-md-6">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={enteredName}
            onChange={nameHandler}
            id="name"
            placeholder="Enter Name"
            className="form-control"
            required
          />
        </div>
      </div>

      <div className="col-md-6">
        <div>
        <label htmlFor="name">Select Day</label>

          <select value={enteredDay} onChange={dayHandler}>
            <option value="Sat">Sat</option>
            <option value="Sun">Sun</option>
            <option value="Mon">Mon</option>
            <option value="Tue">Tue</option>
            <option value="Wed">Wed</option>
            <option value="Thu">Thu</option>
            <option value="Fri">Fri</option>
          </select>
        </div>
      </div>

      </div>

      <div className="input-actions mt-3">
        <button type="submit" className="btn btn-lg btn-info main-teal">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ItemForm;
