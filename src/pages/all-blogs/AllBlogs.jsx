import "./AllBlogs.css"
import {Link} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

function AllBlogs() {
// npm
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const endpoint = "https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts";

    async function fetchBlogPosts() {
        setLoading(true);
        setError("");
        try {
            const result = await axios.get(endpoint, {
                headers: {
                    "novi-education-project-id": "d17b3fdb-9491-4065-b047-efe9ea4b773c"
                }
            });
            setBlogs(result.data);
        } catch (e) {
            setError("Helaas, er ging iets mis.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchBlogPosts();
    }, []);

    return (
        <>
            {error && <p>{error}</p>}

            {!loading && !error && blogs.length > 0 && (<h2>Totale hoeveelheid blogs: {blogs.length}</h2>)}
            <div className="card-section">
                {!loading && !error && blogs.length > 0 && blogs.map((blog) => (
                    <article className="blog-card" key={blog.id}>
                        <h2><Link to={`/blogs/${blog.id}`}>{blog.title}</Link></h2>
                        <p>{blog.comments} reacties - {blog.shares} keer gedeeld</p>
                    </article>
                ))}
            </div>
        </>
    );
}

export default AllBlogs;