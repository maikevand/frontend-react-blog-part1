import "./AllBlogs.css"
import posts from "../../constants/data.json"
import {Link} from "react-router-dom";

function AllBlogs() {
    console.log(posts);

    return (
        <>
            <h2>Totale hoeveelheid blogs: {posts.length} </h2>
            <div className="card-section">
            {posts.map((post) => (
                <article className="blog-card" key={post.id}>
                    <h2><Link to={`/posts/${post.id}`}>{post.title}</Link></h2>
                    <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                </article>
            ))}
            </div>
        </>
    );
}

export default AllBlogs;