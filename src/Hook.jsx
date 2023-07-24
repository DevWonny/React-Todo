import { useState, useEffect } from "react";

const Hook = () => {
  // state
  const [value, setValue] = useState(0);
  const [name, setName] = useState("");

  // * useEffect
  // * 기본적으로 렌더링이 되고 난 직후마다 실행.
  // * 두번째 파라미터 배열에 무엇을 넣는지에 따라 실행조건이 달라짐
  // * 컴포넌트가 Unmount 되기 전이나, 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면 cleanup 함수를 반환

  // effect
  // 해당 컴포넌트에서 어떤 값이 바뀌든 계속 동작
  useEffect(() => {
    console.log("rendering complete!");
    console.log(name, value);
  });

  // 해당 컴포넌트 마운트 시에만 동작
  useEffect(() => {
    console.log("Mount 시에만 동작");
  }, []);

  // 특정 값이 변경될 때에만 동작
  useEffect(() => {
    console.log("name 변경시 동작!");
  }, [name]);

  // clean up
  useEffect(() => {
    console.log("cleanup test");
    console.log(name);
    return () => {
      console.log("cleanup!");
      console.log(name);
    };
  }, [name]);

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
