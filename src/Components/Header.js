import React from 'react'
// import About from './About'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <header className="flex items-center justify-between white-printi">
            {/* border-b font-bold p-3 */}
            {/* Left side */}
            <div className="p-3 font-bold">
                <Link to="/">Heroes Catalog</Link>
            </div>

            {/* Right side */}
            <div className="p-3">
                <Link to="/about">About</Link>
            </div>
        </header>
    )
}

export default Header