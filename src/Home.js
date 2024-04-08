/* eslint-disable no-unused-vars */
import React from 'react'
import { useState, useEffect } from 'react'
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

    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setBlogs(data)
            })
    }, [])

    return (
        <div className='home'>
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    )
}

export default Home
