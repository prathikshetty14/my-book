import {NavLink, Outlet} from "react-router-dom";
import "../index.css"

export default function Navbar(){
    return(
        <>
        <nav className="bg-zinc-800 p-4">
            <NavLink to="/">
            <div className="container mx-auto flex items-center justify-center">
                <div className="text-white text-xl font-bold">
                    My Book
                </div>
            </div>
            </NavLink>
        </nav>
        <Outlet />
        </>
    )
}