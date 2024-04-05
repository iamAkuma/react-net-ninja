/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import BlogList from './BlogList'

const Home = () => {
    // const [name, setName] = useState('mario')
    // const [age, setAge] = useState(25)

    // const handleClick = () => {
    //     setName('luigi')
    //     setAge(30)
    // }

    // const handleClickAgain = (name, e) => {
    //     console.log('hello ' + name, e.target)
    // }

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    return (
        <div>
            <BlogList blogs={blogs} title="All Blogs" />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')}
                title="Mario's Blogs" />
            {/* <h1>HomePage</h1>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click me</button> */}
            {/* <button onClick={(e) =>
                handleClickAgain('Saral', e)
            }>Click Me Again</button> */}
        </div>
    )
}

export default Home
