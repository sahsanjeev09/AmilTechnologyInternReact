import { useState } from 'react'
import './App.css'
import HelloWorld from './HelloWorld'
import Counter from './counter.jsx'

function App() {

  return (
    <div className="App">
      {<HelloWorld />}
      {<Counter />}
    </div>
  )
}

export default App

