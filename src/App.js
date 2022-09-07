import React, { useState } from "react";
import Items from "./components/Items";
import NewItem from "./components/NewItems/NewItem";
import { MdDarkMode, MdLightbulbOutline } from "react-icons/md";
import { CgDanger } from "react-icons/cg";
import ErorrModal from "./components/UI/ErorrModal";
import Button from "./components/UI/Button";

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
  const [erorr, setErorr] = useState(false);

  const saveItemHandler = (enteredItemData) => {
    setItems((prevItems) => {
      return [enteredItemData, ...prevItems];
    });
  };

  const changeMode = () => {
    setDark(!dark);
  };

  const showModal = () => {
    setErorr(true);
  }

  const modalCloseHandler = () => {
    setErorr(false)
  }

  const itemDeleteHandler = (itemId) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== itemId);
    });
  };

  return (
    <>
      { erorr === true ? <ErorrModal onCloseModal={modalCloseHandler} erorr="Something went wrong!"  /> : ''}
      <div className={dark === true ? "dark" : "light"}>
        <Button onClick={changeMode}>
          {dark === true ? (
            <MdLightbulbOutline color="white" size={30} />
          ) : (
            <MdDarkMode size={30} />
          )}
        </Button>
        <Button onClick={showModal}><CgDanger size={30} color="red" /></Button>
        <div className="container my-5 wd">
          <NewItem onSaveData={saveItemHandler} />
          <Items items={items} onDeleteItem={itemDeleteHandler} />
        </div>
      </div>
    </>
  );
};

export default App;
