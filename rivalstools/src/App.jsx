import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Board from './components/board'
import Unit from './components/Unit'

function App() {
  const [teamUnits, setTeamUnits] = useState(Array(6).fill({id: null}));
  const [enemyUnits, setEnemyUnits] = useState(Array(6).fill({id: null}));
  const [isTeam, setIsTeam] = useState(true);

  const handleUnitClick = (hero) => {
    if (isTeam) {
      setTeamUnits((prev) => {
        const newUnits = [...prev];
        const index = newUnits.findIndex(sameHero => sameHero.id === hero.id);
        if (index !== -1 && index !== 0) {
          newUnits[index] = {id: null};
        }
        else if (index === -1) {
          const emptyIndex = newUnits.findIndex((empty, idx) => empty.id === null && idx !== 0);
          if (emptyIndex !== -1) {
            newUnits[emptyIndex] = {...hero};
          }
        }
        return newUnits;
      });
    } else {
      setEnemyUnits((prev) => {
        const newUnits = [...prev];
        const index = newUnits.findIndex(sameHero => sameHero.id === hero.id);
        if (index !== -1) {
          newUnits[index] = {id: null};
        }
        else {
          const emptyIndex = newUnits.findIndex(empty => empty.id === null);
          if (emptyIndex !== -1) {
            newUnits[emptyIndex] = {...hero};
          }
        }
        return newUnits;
      });
    }
  };

  return (
    <>
    <Navbar></Navbar>
    <h1>Team Builder</h1>
    <div className='button-section'>
      <div className='button-container'>  
        <button className='team-button' onClick={() => setIsTeam(!isTeam)}>
            {isTeam ? 'Team' : 'Enemy'}
        </button>
      </div>
      <Board teamUnits={teamUnits} enemyUnits={enemyUnits} onUnitClick={handleUnitClick}></Board>
    </div>
    <div className='game-information'>
      <div className="hero-section">
        <Unit title="Vanguard" onUnitClick={handleUnitClick}></Unit>
        <Unit title="Duelist" onUnitClick={handleUnitClick}></Unit>
        <Unit title="Strategist" onUnitClick={handleUnitClick}></Unit>
      </div>
    </div>
    </>
  )
}

export default App
