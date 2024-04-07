const BlogList = ({ blogs, title, handleDelete }) => {


    // const blogs = props.blogs;
    // const title = props.title;

    // console.log(props, blogs)

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            <div className="home">
                {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                        <button onClick={() => handleDelete(blog.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogList
