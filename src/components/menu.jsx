import { Link } from "react-router-dom"

export default function Menu() {
    return (
        <div>
            <h2>Menu</h2>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
                <li><Link to={'/projects/1'}>Test Project 1</Link></li>
            </ul>
        </div>
    );
}