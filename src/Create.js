import { useState } from "react"

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author }
        console.log(blog)
    }
    return (
        <div>
            <div className="create">
                <h2>Add a New Blog</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">
                        Blog title:
                    </label>
                    <input type="text"
                        value={title}
                        required
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label htmlFor="">Blog body:</label>
                    <textarea
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    >
                    </textarea>
                    <label htmlFor="">Blog Author: </label>
                    <select
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value="mario">mario</option>
                        <option value="yoshi">yoshi</option>
                    </select>
                    <button>Add Blog</button>
                    <p>{title}</p>
                    <p>{body}</p>
                    <p>{author}</p>
                </form>
            </div>
        </div>
    )
}

export default Create
