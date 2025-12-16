import { useState } from 'react'
import './App.css'
import moduleName from 'module'
import MainPage from './MainPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <MainPage />
      </div>

    </>
  )
}

export default App
