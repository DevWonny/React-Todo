import "./AddItem.scss";

const testClick = () => {
  console.log("click!");
};
const AddItem = () => {
  return (
    <>
      <div className="add-item-wrap">
        <input
          type="text"
          className="add-item"
          id="add"
          placeholder="할 일을 입력하세요."
        />
        <label htmlFor="add" onClick={testClick}>
          +
        </label>
      </div>
    </>
  );
};

export default AddItem;
