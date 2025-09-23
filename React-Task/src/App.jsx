// import HelloWorld from "./components/HelloWorld";
// import Counter from "./components/Counter";
// import CounterClass from "./components/CounterClass";
import Button from "./components/Button";
import Input from "./components/Input";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* <HelloWorld />
      <Counter />
      <CounterClass /> */}
      <Input label="Name" placeholder="Enter your name" />
      <Input label="Email" placeholder="Enter your email" />

      <div className="buttons">
        <Button buttonText="Submit" variant="primary" />
        <Button buttonText="Cancel" variant="secondary" />
      </div>
    </div>
  );
}

export default App;