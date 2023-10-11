import { NavLink } from "react-router-dom"

export default function Menu({ 
    items, 
    title, 
    ItemComponent = ({ text }) => text 
}) {       
    const menuItems = items.map(item => {        
        return (
            <li key={ item.href }>
                <NavLink to={ item.href }>
                    <ItemComponent { ...item } />                    
                </NavLink>
            </li>
        )
    })

    return (
        <div>
            <h2>{ title }</h2>
            <ul>
                { menuItems }      
            </ul>
        </div>
    )
}