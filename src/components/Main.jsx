import { useState } from "react";
import "../components/Main.scss";
import Header from "./Header";
import AddItem from "./AddItem";
import Item from "./Item";

const Main = () => {
  const [testList, setTestList] = useState(["test1", "test2", "test3"]);
  return (
    <div className="main-wrap">
      <Header></Header>
      <AddItem></AddItem>

      <div className="item-list-container">
        {/* list -> map */}
        {testList.map((el, index) => (
          <Item name={el} key={index}></Item>
        ))}
      </div>
    </div>
  );
};
export default Main;
