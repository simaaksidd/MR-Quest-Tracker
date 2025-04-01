import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Board from './components/board'
import Unit from './components/Unit'
import TeamUp from './components/TeamUp';

function App() {
  const [teamUnits, setTeamUnits] = useState(Array(6).fill({id: null}));
  const [enemyUnits, setEnemyUnits] = useState(Array(6).fill({id: null}));
  // const [teamUp, setTeamUp] = useState([]);
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
    <div className='top-input'>
      <TeamUp teamUnits={teamUnits} enemyUnits={enemyUnits} isTeam={isTeam}></TeamUp>
      <div className='top-section'>
        <h1>Team Builder</h1>
        <div className='top-panel'>
          <div className='button-container'>  
            <button className='team-button' onClick={() => setIsTeam(!isTeam)}>
                {isTeam ? 'Team' : 'Enemy'}
            </button>
            <button className='team-button' onClick={() => {
                setTeamUnits(Array(6).fill({id: null}));
                setEnemyUnits(Array(6).fill({id: null}));
            }}>
                Reset
            </button>
          </div>
          <Board teamUnits={teamUnits} enemyUnits={enemyUnits} onUnitClick={handleUnitClick} isTeam={isTeam}></Board>
        </div>
      </div>
    </div>
    <div className='game-information'>
      <div className="hero-section">
        <Unit title="Vanguard" onUnitClick={handleUnitClick}></Unit>
        <Unit title="Duelist" onUnitClick={handleUnitClick}></Unit>
        <Unit title="Strategist" onUnitClick={handleUnitClick}></Unit>
      </div>
    </div>
    <footer className="footer">
      <p>
        Rivals.tools isn't endorsed by NetEase Games and doesn't reflect the views or opinions of NetEase Games or anyone officially involved in producing or managing NetEase Games properties. NetEase Games, and all associated properties are trademarks or registered trademarks of NetEase Games, Inc.
      </p>
    </footer>
    </>
  )
}
export default App
