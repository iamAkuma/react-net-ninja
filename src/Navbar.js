import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className='navbar'>
                <h1><a href="/">The aKuma Blog</a></h1>
                <div className="links">
                    <ul>
                        <a href="/">Home</a>
                        <a href="/create" style={{
                            color: "white",
                            backgroundColor: "#f1356d",
                            borderRadius: '8px'
                        }}>New Blog</a>
                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default Navbar
