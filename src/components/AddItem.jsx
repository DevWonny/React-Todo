/* eslint-disable array-callback-return */
import "./AddItem.scss";
import { useState, useEffect, useMemo } from "react";

const AddItem = () => {
  // state
  const [text, setText] = useState("");
  const [itemArray, setItemArray] = useState([]);

  // click event
  const onAddClick = (e) => {
    setItemArray((prev) => [...prev, text]);
  };

  useEffect(() => {
    itemArray.map((el, _index) =>
      localStorage.setItem(`todoItems-${_index}`, el)
    );
  }, [itemArray]);
  return (
    <>
      <div className="add-item-wrap">
        <input
          type="text"
          className="add-item"
          id="add"
          placeholder="할 일을 입력하세요."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="button" onClick={onAddClick}>
          +
        </button>
      </div>
    </>
  );
};

export default AddItem;
