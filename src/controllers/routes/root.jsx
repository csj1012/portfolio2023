import { Outlet } from "react-router-dom"
import MainMenu from "@components/MainMenu"

export default function Root() {    
    return (
        <div style={{ border: 'solid 1px blue' }}>
            <h1>Root</h1>
            <MainMenu />
            <Outlet /> 
        </div>
    )
}