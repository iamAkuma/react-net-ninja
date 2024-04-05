import React from 'react'
import { useState } from 'react'

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
            <div className="home">
                {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>

                    </div>
                ))}
            </div>
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
