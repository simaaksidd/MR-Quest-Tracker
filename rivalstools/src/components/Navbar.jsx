import "./styles/Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li><a href="#Home" className="nav-link">Home</a></li>
                <li><a href="#stats" className="nav-link">Stats</a></li>
                <li><a href="#players" className="nav-link">Players</a></li>
                <li><a href="#team-builder" className="nav-link">Team Builder</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
