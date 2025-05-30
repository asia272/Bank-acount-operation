import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./Navbar.css"

const Navbar = () => {
    let [isMenu, setIsMenu] = useState(false);

    let menuToggle = () => {
        setIsMenu((prev) => !prev)
    }
    return (
        <nav>
            <div className="logo">
                <h3>React Redux Bank</h3>
            </div>
            <div className='toggle-menu'>
                <button onClick={menuToggle}>
                    {isMenu ? <CloseIcon /> : <MenuIcon />}
                </button>
            </div>
            <ul className={isMenu ? "active" : ""}>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/signup"}>Signup</Link>
                </li>
                <li>
                    <Link to={"/login"}>Login</Link>
                </li>
                <li>
                    <Link to={"/logout"}>Logout</Link>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar
