import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className='navbar'>
                <h1>The aKuma Blog</h1>
                <div className="links">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/create">New Blog</a></li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default Navbar
