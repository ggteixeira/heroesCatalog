import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="flex items-center justify-between bg-gray-printi">
            <div className="p-3 font-bold">
                <Link to="/">Heroes Catalog</Link>
            </div>
            <div className="p-3">
                <Link to="/about">About</Link>
            </div>
        </header>
    )
}

export default Header