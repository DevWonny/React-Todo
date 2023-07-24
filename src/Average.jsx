import { useState, useMemo, useCallback } from "react";
// * useMemo
// * 컴포넌트 내부에서 발생하는 연산을 최적화 할 수 있음!
// * 렌더링하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고, 특정 값이 변하지 않았다면 이전에 연산했던 결과를 다시 사용하는 방식

// ! useCallback
// ! 주로 렌더링 성능을 최적화해야 하는 상황에서 사용
// ! 만들어 두었던 함수를 재사용할 수 있음
// ! 첫 번째 파라미터에는 생성하고 싶은 함수를, 두 번째 파라미터에는 배열을 넣으면 됨.
// ! 두 번째 파라미터 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 명시.

const getAverage = (numbers) => {
  console.log("평균값 계산중...");

  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  // const onChange = (e) => {
  //   setNumber(e.target.value);
  // };

  // useCallback으로 최적화
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 해당 컴포넌트가 처음 렌더링될 때만 함수 생성

  // const onInsert = (e) => {
  //   const nextList = list.concat(parseInt(number));

  //   setList(nextList);
  //   setNumber("");
  // };

  // useCallback 으로 최적화
  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));

      setList(nextList);
      setNumber("");
    },
    [number, list]
  ); // number || list 가 바뀌었을 때만 함수 생성

  // useMemo
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input type="text" value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>

      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>

      <div>
        <b>평균 : </b>
        {avg}
      </div>
    </div>
  );
};

export default Average;
