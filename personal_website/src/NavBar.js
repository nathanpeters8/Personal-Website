import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <div className="dropdown">
            <Link to="/projects">Projects</Link>
            <div className="dropdown-content">
              <Link to="/videogameprojects">Video Game Projects</Link>
              <Link to="/datascienceprojects">Data Science Projects</Link>
              <Link to="/gisprojects">GIS Projects</Link>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;