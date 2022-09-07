import Calculator from "./components/Calculator";
import Header from "./components/Header";

function App() {
  return (
    <main>
      <div className="container">
        <Header text="splitter" />
        <Calculator />
      </div>
    </main>
  );
}

export default App;
