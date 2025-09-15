import { useState } from 'react'
import './App.css'
import HelloWorld from './HelloWorld'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {<HelloWorld />}
    </div>
  )
}

export default App
