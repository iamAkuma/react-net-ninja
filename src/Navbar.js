import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav className='navbar'>
                <h1><a href="/">The aKuma Blog</a></h1>
                <div className="links">
                    <ul>
                        <Link to="/">Home</Link>
                        <Link to="/create" style={{
                            color: "white",
                            backgroundColor: "#f1356d",
                            borderRadius: '8px'
                        }}>New Blog</Link>
                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default Navbar
