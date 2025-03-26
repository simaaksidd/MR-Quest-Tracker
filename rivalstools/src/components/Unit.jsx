import './styles/Unit.css'

function Unit({ title = "", boxCount = 0 }) {
    const boxes = Array.from({ length: boxCount });
    return (
        <div className="hero-wrapper">
            <h3 className="hero-title">{title}</h3>
            <div className="hero-container">
                <div className="hero-grid">
                    {boxes.map((_, index) => (
                        <img src={'./public/hero_icons/adam_warlock.png'} key={index} className="hero-box"></img>
                    ))}
                </div>
          </div> 
        </div>
    );
  }

export default Unit