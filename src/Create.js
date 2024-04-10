import { useState } from "react"

const Create = () => {
    const [title, setTitle] = useState('')
    return (
        <div>
            <div className="create">
                <h2>Add a New Blog</h2>
                <form action="">
                    <label htmlFor="">
                        Blog title:
                    </label>
                    <input type="text" value={title} required />
                    <label htmlFor="">Blog body:</label>
                    <textarea required></textarea>
                    <label htmlFor="">Blog Author: </label>
                    <select>
                        <option value="mario">mario</option>
                        <option value="yoshi">yoshi</option>
                    </select>
                    <button>Add Blog</button>
                </form>
            </div>
        </div>
    )
}

export default Create
