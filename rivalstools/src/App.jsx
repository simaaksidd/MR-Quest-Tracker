//import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Board from './components/board'
import Unit from './components/Unit'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <h1>Rivals Tools</h1>
    <Board></Board>
    <div className='game-information'>
      <div className="hero-section">
        <Unit title="Vanguard" boxCount={9}></Unit>
        <Unit title="Duelist" boxCount={20}></Unit>
        <Unit title="Strategist" boxCount={8}></Unit>
      </div>
    </div>
    </>
  )
}

export default App
