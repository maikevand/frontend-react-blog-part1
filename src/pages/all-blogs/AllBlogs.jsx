import "./AllBlogs.css"
import posts from "../../constants/data.json"
import {Link} from "react-router-dom";

function AllBlogs() {
    console.log(posts);

    return (
        <>
            <h1>Totale hoeveelheid blogs: {posts.length} </h1>
            {posts.map((post) => (
                <article key={post.id}>
                    <h2><Link to={`/posts/${post.id}`}>{post.title}</Link></h2>
                    <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                </article>
            ))}
        </>
    );
}

export default AllBlogs;