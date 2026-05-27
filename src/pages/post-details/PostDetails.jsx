import "./PostDetails.css"
import {useParams} from "react-router-dom";
import formatDate from "../../helpers/formatDate.js";
import {Link} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

function PostDetails() {
    const [postDetails, setPostDetails] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const {id} = useParams();
    const endpoint = `https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/${id}`;

    async function fetchPostDetails() {
        setLoading(true);
        setError("");
        try {
            const result = await axios.get(endpoint, {
                headers: {
                    "novi-education-project-id": "d17b3fdb-9491-4065-b047-efe9ea4b773c"
                }
            });
            setPostDetails(result.data);
        } catch (e) {
            setError("Helaas, er ging iets mis.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPostDetails();
    }, []);


    // const post = posts.find((post) => post.id === Number(id));

    return (
        <>
            {error && <p>{error}</p>}

            {!loading && !error && postDetails && (

                <article className="single-blog">
                    <div className="blog-header">
                        {postDetails?.title && <h1>{postDetails.title}</h1>}
                        <p>({postDetails.readTime} minuten)</p>
                    </div>
                    <h2>{postDetails.subtitle}</h2>
                    <p>Geschreven door {postDetails.author} op {formatDate(postDetails.created)}</p>
                    <p>{postDetails.content}</p>
                    <p>{postDetails.comments} reacties - {postDetails.shares} keer gedeeld</p>
                    <p><Link to={"/blogoverzicht"}>Terug naar de overzichtspagina</Link></p>
                </article>
            )}
        </>
    );
}

export default PostDetails;