// import { useState } from 'react'
// import './App.css'
// import HelloWorld from './HelloWorld'
// import Counter from './counter.jsx'

// function App() {

//   return (
//     <div className="App">
//       {<HelloWorld />}
//       {<Counter />}
//     </div>
//   )
// }

// export default App


import './App.css'
import Button from './Button'
import Input from './Input'

function App() {
  return (
    <div className="App">
       {/* Inputs */}
      <Input label="Username" placeholder="Enter your username" />
      <Input placeholder="Only placeholder" />

      {/* Buttons */}
      <Button buttonText="Submit" variant="primary" />
      <Button buttonText="Cancel" variant="secondary" />
    </div>
  )
}

export default App
