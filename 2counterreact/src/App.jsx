import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount] = useState(0)

  const addCount = () => {
    if (count < 20) {
      setCount(count + 1)
    }else{
      alert("Counter will not go up more than 20")
    }
  }

  const removeCount = () => {
    if (count > 0) {
      setCount(count - 1)
    } else{
      alert("Counter will not go down less than 0")
    }
  }

  return (
    <>
      <h1>Counter </h1><h3>by abhishek</h3>
      <h2>Counter: {count}</h2>
      <button onClick={addCount}>Add count {count}</button>
      <br /><br />
      <button onClick={removeCount}>Remove count {count}</button>
    </>
  )
}

export default App
