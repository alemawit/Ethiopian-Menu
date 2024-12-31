import { useState } from 'react'

import FoodItem from './Components/FoodItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <FoodItem/>
    </>
  )
}

export default App
