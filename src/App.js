import "./App.css";

function App() {
  const name = "React";
  return (
    <>
      <h1>{name} Hello!</h1>
      <h2>잘 보이니?</h2>
      <button onClick={() => console.log("1111")}>Test</button>
    </>
  );
}

export default App;
