// props 없을 경우
const Header = (props) => {
  return (
    <>
      <div>{props.title}</div>
    </>
  );
};

Header.defaultProps = {
  title: "Default",
};

export default Header;
