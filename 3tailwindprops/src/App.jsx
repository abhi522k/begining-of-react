import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)
  let obj = {
    name: 'abhishek',
    role: 'employee'
  }

  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-xl mb-4'>Tailwind classes</h1>
      <Card username="Abhishek" someObj={obj} btnText="click me" />
      <Card username="Abhishek" />
    </>
  )
}

export default App
