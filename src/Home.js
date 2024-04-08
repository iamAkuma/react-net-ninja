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
    const [error, setError] = useState(null)
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogss')
                .then(res => {
                    console.log(res)
                    if (!res.ok) {
                        throw Error('Could not fetch the data.')
                    }
                    return res.json()
                })
                .then(data => {
                    setBlogs(data)
                    setIsPending(false)
                    setError(null)
                })
                .catch(err => {
                    setIsPending(false)
                    setError(err.message)
                })
        }, 1000)
    }, [])

    return (
        <div className='home'>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    )
}

export default Home
