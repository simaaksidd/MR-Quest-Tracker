import React from 'react';
import './styles/Unit.css'

function Unit({ title = ""}) {
    const [filteredHeroes, setFilteredHeroes] = React.useState([]);

    React.useEffect(() => {
        fetch('./src/heroes.json')
        .then(response => response.json())
        .then(data => {
            const heroes = data.filter(hero => hero.type === title);
            setFilteredHeroes(heroes);
        })
        .catch(error => console.error('Error fetching heroes:', error));
    }, [title]);
    return (
        <div className="hero-wrapper">
            <h3 className="hero-title">{title}</h3>
            <div className="hero-container">
                <div className="hero-grid">
                    {filteredHeroes.map((hero, index) => (
                        <img src={hero.img} key={index} className="hero-box" alt={hero.name}></img>
                    ))}
                </div>
          </div> 
        </div>
    );
  }

export default Unit