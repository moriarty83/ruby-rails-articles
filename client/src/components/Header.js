import { Route, Switch } from "react-router-dom";

function Header(props){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><a  className="nav-link"   href="/">Home</a></li>
          <li className="nav-item"><a  className="nav-link"  href="/articles">Articles</a></li>
          {
            localStorage.getItem("jwt") ?
              <li className="nav-item"><a  className="nav-link" href="/logout">Log Out</a></li>
            :
              <li className="nav-item"><a  className="nav-link"  href="/login">Log In</a></li>
          }
        </ul>
      </nav>
    )
}

export default Header