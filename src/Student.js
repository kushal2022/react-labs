import React from "react";
import { useState } from "react";

const Student = (props) => {
  const { id, img, name, major } = props;

  const [isButtons, setIsButtons] = useState(false);

  const [textBoxName, setTextBoxName] = useState(null);
  const [myName, setMyName] = useState(name);

  const changeNameHandler = (val) => {
    setMyName(val);
  };

  const studentHandler = () => {
    if (isButtons) {
      setIsButtons(false);
    } else {
      setIsButtons(true);
    }
  };

  return (
    <section className="student" onClick={studentHandler}>
      <p style={{ color: "red" }}>STUDENT</p>
      <img src={img} alt="" />
      <h4 style={{ color: "green" }}>Id : {id}</h4>
      <h4 style={{ color: "grey", fontSize: "15px" }}>Name : {myName}</h4>
      <h4 style={{ color: "green" }}>Major : {major}</h4>

      <p className="enterName">Enter name:</p>
      <input
        type="text"
        id="textArea"
        onChange={(e) => setTextBoxName(e.target.value)}
      />
      <button type="button" onClick={() => changeNameHandler(textBoxName)}>
        Update
      </button>

      {isButtons ? (
        <div>
          <button className="btnEdit">edit</button>
          <button className="btnDelete">delete</button>
        </div>
      ) : null}
    </section>
  );
};

export default Student;
