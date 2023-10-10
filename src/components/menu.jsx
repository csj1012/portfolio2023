import { NavLink } from "react-router-dom"

export default function Menu() {
    return (
        <div>
            <h2>Menu</h2>
            <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/projects'}>Projects</NavLink></li>
                <li><NavLink to={'/contact'}>Contact</NavLink></li>            
            </ul>
        </div>
    );
}