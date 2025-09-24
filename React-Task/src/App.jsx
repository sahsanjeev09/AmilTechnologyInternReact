// import HelloWorld from "./components/HelloWorld";
// import Counter from "./components/Counter";
// import CounterClass from "./components/CounterClass";
// import Button from "./components/Button";
// import Input from "./components/Input";
// import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import HelloWorldPages from "./pages/task1/HelloWorldPages";
// import CounterPages from "./pages/task2/CounterPages";
// import FormPages from "./pages/task3/FormPages";
// import PropsLifting from "./pages/task4/PropsLifting";

// const routeList = [
//   { path: "/task1", label: "Task 1", element: <HelloWorldPages /> },
//   { path: "/task2", label: "Task 2", element: <CounterPages /> },
//   { path: "/task3", label: "Task 3", element: <FormPages /> },
//   { path: "/task4", label: "Task 4", element: <PropsLifting /> },
// ];

// function App() {
//   return (
//     <div className="app">
//       <HelloWorld />
//       <Counter />
//       <CounterClass />
//       <Input label="Name" placeholder="Enter your name" />
//       <Input label="Email" placeholder="Enter your email" />

//       <div className="buttons">
//         <Button buttonText="Submit" variant="primary" />
//         <Button buttonText="Cancel" variant="secondary" />
//       </div>

//       <Routes>
//         {routeList.map((route) => (
//           <Route
//             key={`key-${route.label}`}
//             path={route.path}
//             element={route.element}
//           />
//         ))}
//       </Routes>
//     </div>
//   );
// }

// export default App;



import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import HelloWorldPages from "./pages/task1/HelloWorldPages";
import CounterPages from "./pages/task2/CounterPages";
import FormPages from "./pages/task3/FormPages";
import PropsLifting from "./pages/task4/PropsLifting";

function App() {
  return (
    <Routes>
      {/* Default page → Task4 */}
      <Route path="/" element={<PropsLifting />} />
      <Route path="/task1" element={<HelloWorldPages />} />
      <Route path="/task2" element={<CounterPages />} />
      <Route path="/task3" element={<FormPages />} />
      <Route path="/task4" element={<PropsLifting />} />

      {/* Catch all unknown paths → redirect to Task4 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
