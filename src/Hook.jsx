import { useState } from "react";

const Hook = () => {
  const [value, setValue] = useState(0);
  const [name, setName] = useState("");

  const onIncrease = () => {
    setValue(value + 1);
  };

  const onDecrease = () => {
    setValue(value - 1);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <div>현재 초기값 : {value}</div>

      <button onClick={onIncrease}>INCREASE</button>
      <button onClick={onDecrease}>DECREASE</button>

      <input type="text" value={name} onChange={onChangeName} />
      <p>NAME : {name}</p>
    </>
  );
};

export default Hook;
