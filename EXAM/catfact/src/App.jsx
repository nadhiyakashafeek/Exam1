
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CatFact from './CatFact'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element ={<CatFact/>}/>
    </Routes>
    </>
  )
}

export default App
