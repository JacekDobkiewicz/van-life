import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {

    const activeStyle = {
        textDecoration: "underline",
        fontWeight: "bold",
        color: "#161616"
    }

    return (
        <>
            <nav className="host-nav">
                <NavLink 
                    to="."
                    end
                    style={({isActive}) => isActive ? activeStyle : null}
                >
                    Dashboard
                </NavLink>
                <NavLink 
                    to="income"
                    end
                    style={({isActive}) => isActive ? activeStyle : null}
                >
                    Income
                </NavLink>
                <NavLink 
                    to="vans"
                    end
                    style={({isActive}) => isActive ? activeStyle : null}
                >
                    Vans
                </NavLink>
                <NavLink 
                    to="reviews"
                    end
                    style={({isActive}) => isActive ? activeStyle : null}
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}