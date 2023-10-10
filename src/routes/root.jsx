import { Outlet } from "react-router-dom"
import Menu from "../components/menu"

export default function Root() {    
    return (
        <div style={{ border: 'solid 1px blue' }}>
            <h1>Root</h1>
            <Menu />
            <Outlet /> 
        </div>
    )
}