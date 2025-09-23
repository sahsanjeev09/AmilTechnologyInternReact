import HelloWorld from "./components/HelloWorld";
import Counter from "./components/Counter";
import CounterClass from "./components/CounterClass";
import "./App.css";

function App() {
  return (
    <div className="app">
      <HelloWorld />
      <Counter />
      <CounterClass />
    </div>
  );
}

export default App;