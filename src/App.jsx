import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'
import Message from './Components/Message'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter />

      {/* <Message /> */}
    </>
  )
}

export default App
