import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className='navbar'>
                <h1>The aKuma Blog</h1>
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
