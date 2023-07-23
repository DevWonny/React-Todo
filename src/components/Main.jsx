import "../components/Main.scss";
import Header from "./Header";
import AddItem from "./AddItem";
import ItemList from "./ItemList";

const Main = () => {
  return (
    <div className="main-wrap">
      <Header></Header>
      <AddItem></AddItem>
      <ItemList></ItemList>
    </div>
  );
};
export default Main;
