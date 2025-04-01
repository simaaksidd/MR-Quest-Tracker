import './styles/TeamUp.css';

function TeamUp({ teamUnits, enemyUnits, isTeam }) {
  return (
    <div className='team-up-section'>
        <h2 className='team-up-heading'> Team Up Abilities</h2>
        {isTeam ? teamUnits.map((hero, index) => (
            hero.id && (
                <div key={index} className='team-up-container'>
                    <img
                        src={hero.img}
                        alt={hero.name}
                        title={hero.name}
                        className='team-up-icon'/>
                    <span className='team-up-info'>{hero.name}</span>
                </div>
            )
        ))
        : enemyUnits.map((hero, index) => (
            hero.id && (
                <div key={index} className='team-up-container'>
                    <img
                        src={hero.img}
                        alt={hero.name}
                        title={hero.name}
                        className='team-up-icon'/>
                    <span className='team-up-info'>{hero.name}</span>
                </div>
            )
        ))}
    </div>
  )
}

export default TeamUp;