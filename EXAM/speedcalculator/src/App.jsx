
import { Route, Routes } from 'react-router-dom'
import './App.css'
import SpeedCalculator from './SpeedCalculator'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element ={<SpeedCalculator/>}/>
      </Routes>
    </>
  )
}

export default App
