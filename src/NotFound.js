import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='not-found'>
            <h2>Oops, you got us!</h2>
            <br />
            <p>The page cannot be found.</p>
            <br />
            <Link to='/'>Back to the homepage.</Link>
        </div>
    )
}

export default NotFound
