import React, { useState } from "react";
import Items from "./components/Items";
import NewItem from "./components/NewItems/NewItem";
import { MdDarkMode, MdLightbulbOutline } from "react-icons/md";

const data = [
  {
    id: 1,
    name: "Sat Iitem",
    todo: "Sat",
  },
  {
    id: 2,
    name: "Mon Iitem",
    todo: "Mon",
  },
];

const App = () => {
  const [dark, setDark] = useState(false);
  const [items, setItems] = useState(data);
  const saveItemHandler = (enteredItemData) => {
    setItems((prevItems) => {
      return [enteredItemData, ...prevItems];
    });
  };

  const changeMode = () => {
    console.log("test");
    setDark(!dark);
  };

  const itemDeleteHandler = (itemId) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== itemId);
    });
  };

  return (
    <div className={dark === true ? "dark" : "light"}>
      <button onClick={changeMode}>
        {dark === true ? (
          <MdLightbulbOutline size={30} />
        ) : (
          <MdDarkMode size={30} />
        )}
      </button>
      <div className="container my-5 wd">
        <NewItem onSaveData={saveItemHandler} />
        <Items items={items} onDeleteItem={itemDeleteHandler} />
      </div>
    </div>
  );
};

export default App;
