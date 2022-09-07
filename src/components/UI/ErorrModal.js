import React from "react";
import Button from "./Button";
import "./ErrorModal.css";

const ErorrModal = (props) => {

    const closeHandler = () =>{
        props.onCloseModal();
    }

  return (
    <div>
        <div className="back-overly" />
      <div className="erorr-modal">
        <Button onClick={closeHandler} className="btn-warning">Close</Button>
        <div className="erorr-content">
          <h1>{props.erorr}</h1>
        </div>
      </div>
    </div>
  );
};

export default ErorrModal;
