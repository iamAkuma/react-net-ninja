import React from 'react'
import { useState } from 'react'

const Home = () => {
    const [name, setName] = useState('mario')
    const [age, setAge] = useState(25)

    const handleClick = () => {
        setName('luigi')
        setAge(30)
    }

    // const handleClickAgain = (name, e) => {
    //     console.log('hello ' + name, e.target)
    // }
    return (
        <div>
            <h1>HomePage</h1>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click me</button>
            {/* <button onClick={(e) =>
                handleClickAgain('Saral', e)
            }>Click Me Again</button> */}
        </div>
    )
}

export default Home
