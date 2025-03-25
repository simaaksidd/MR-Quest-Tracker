import "./styles/Board.css";

function Board() {
    const dots = Array.from({ length: 10 });
    return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div className="board-container">
            <div className="dots-grid">
              {dots.map((_, index) => (
                <div key={index} className="dot"></div>
              ))}
            </div>
        </div>    
    </div>
  );
}

export default Board