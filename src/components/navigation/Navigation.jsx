import "./Navigation.css"
import {NavLink} from "react-router-dom";
import logo from "../../assets/logo-medium.png"

function Navigation() {
    return (
        <nav>
            <img className="nav-image" src={logo} alt="Company logo"/>
            <ul>
                <li>
                    <NavLink to="/"
                             className={({isActive}) => isActive === true ? "active-link" : "default-link"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/blogoverzicht"
                             className={({isActive}) => isActive === true ? "active-link" : "default-link"}>Alle
                        posts</NavLink>
                </li>
                <li>
                    <NavLink to="/post-plaatsen"
                             className={({isActive}) => isActive === true ? "active-link" : "default-link"}>Nieuwe
                        post</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;

// 'Alle posts'
// 'Nieuwe post'

// Deze menu-balk moet altijd bovenaan iedere pagina staan. Zorg ervoor dat het in
// het menu zichtbaar is wat de actieve pagina is.