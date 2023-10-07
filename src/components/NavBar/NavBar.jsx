import { useState } from 'react'
import './NavBar.css'
import { NavLink, Link } from 'react-router-dom'
import BurguerIcon from '../BurguerIcon/BurguerIcon'

function NavBar() {
    const [showMenu, setShowMenu] = useState(false)

    const handleClick = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header className="NavBar">
            <Link to='/' className="logo-link">
                <img className='logo' src="/public/black-python.svg" alt="logo" />
            </Link>
            <nav className={`nav-links ${showMenu ? 'show' : ''}`}>
                <ul>
                    <li>
                        <NavLink exact to='/' activeClassName='active' className='NavLink' onClick={() => {if (showMenu) handleClick()}}>Provisional</NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/' activeClassName='active' className='NavLink' onClick={() => {if (showMenu) handleClick()}}>Provisional</NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/' activeClassName='active' className='NavLink' onClick={() => {if (showMenu) handleClick()}}>Provisional</NavLink>
                    </li>
                </ul>
            </nav>
            <div className={`nav-links-bg ${showMenu ? 'show' : ''}`}></div>
            <div className='burguer'>
                <BurguerIcon clicked={showMenu} handleClick={handleClick} />
            </div>
        </header>
    )
}

export default NavBar