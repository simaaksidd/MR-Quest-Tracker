import { useEffect, useState } from 'react';
import './styles/Unit.css'

function Unit({ title = "", onUnitClick }) {
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        fetch('./src/heroes.json')
        .then(response => response.json())
        .then(data => {
            const heroTypes = data.filter(hero => hero.type === title);
            setHeroes(heroTypes);
        })
        .catch(error => console.error('Error fetching heroes:', error));
    }, [title]);

    return (
        <div className="hero-wrapper">
            <h3 className="hero-title">{title}</h3>
            <div className="hero-container">
                <div className="hero-grid">
                    {heroes.map((hero) => (
                        <img 
                        src={hero.img} 
                        alt={hero.name}
                        key={hero.id} 
                        className="hero-box"
                        title={hero.name}
                        onClick={() => onUnitClick(hero)}
                        style={{ cursor: "pointer" }}>
                        </img>
                    ))}
                </div>
          </div> 
        </div>
    );
  }

export default Unit