import "./styles/Board.css";

function Board({ teamUnits, enemyUnits, onUnitClick, isTeam }) {

  return (
  <div className="board-section">
    <div className="board-container">
      <div className="board-team">
        <div className="dots-grid">
          {teamUnits.map((hero, index) => (
            <div key={index} className="hero-box-board">
              {index === 0 ? <img 
              src="./marvel_rivals_logo.png" 
              alt="You"
              title="You"
              className="board-unit">
              </img>
              : hero.id ? <img 
              src={hero.img} 
              alt={hero.name}
              title={hero.name}
              className="board-unit"
              onClick={() => isTeam && onUnitClick(hero)}
              style={{ cursor: "pointer" }}>
              </img>
              : <img
              src="./nohero.png"
              alt="empty"
              title="empty"
              className="board-unit">
              </img>}
            </div>
          ))}
        </div>
      </div>
      <div className="board-team">
        <div className="dots-grid">
          {enemyUnits.map((hero, index) => (
          <div key={index} className="hero-box-board">
            {hero.id ? <img 
            src={hero.img} 
            alt={hero.name}
            title={hero.name}
            className="board-unit"
            onClick={() => isTeam && onUnitClick(hero)}
            style={{ cursor: "pointer" }}>
            </img>
            : <img
            src="./nohero.png"
            alt="empty"
            title="empty"
            className="board-unit">
            </img>}
          </div>
          ))}
        </div>
      </div>
    </div>    
  </div>
  );
}

export default Board