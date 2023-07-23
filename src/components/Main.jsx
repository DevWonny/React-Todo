import "../components/Main.scss";
import Header from "./Header";
import AddItem from "./AddItem";
import Item from "./Item";

const Main = () => {
  return (
    <div className="main-wrap">
      <Header></Header>
      <AddItem></AddItem>

      <div className="item-list-container">
        {/* list -> map */}
        <Item></Item>
      </div>
    </div>
  );
};
export default Main;
