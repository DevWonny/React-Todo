import "./Item.scss";

const Item = (props) => {
  return (
    <div className="item-container">
      <div className="check-box"></div>
      <div className="todo-item">{props.name}</div>
      <div className="delete">-</div>
    </div>
  );
};

export default Item;
