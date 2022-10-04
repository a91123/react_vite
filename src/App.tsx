import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Text from '@/Pages/Text'
function App() {
  const [count, setCount] = useState(0)

  return (
    <h1 className="text-red-500">
      Hello, World!
      <Text></Text>
    </h1>
  )
}

export default App
