import "./PostDetails.css"
import {useParams} from "react-router-dom";
import posts from "../../constants/data.json"
import formatDate from "../../helpers/formatDate.js";
import {Link} from "react-router-dom";
import axios from "axios";
import {useEffect} from "react";

function PostDetails() {
    const {id} = useParams();
    const endpoint = `https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/${id}`;
    async function fetchPostDetails() {
        try {
            const result = await axios.get(endpoint, {
                headers: {
                    "novi-education-project-id": "d17b3fdb-9491-4065-b047-efe9ea4b773c"
                }
            });
            console.log(result.data);
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
       fetchPostDetails();
    }, []);


    // const post = posts.find((post) => post.id === Number(id));

    return (
        <>

            {/*<article className="single-blog">*/}
            {/*    <div className="blog-header">*/}
            {/*        <h1>{post.title}</h1>*/}
            {/*        <p>({post.readTime} minuten)</p>*/}
            {/*    </div>*/}
            {/*    <h2>{post.subtitle}</h2>*/}
            {/*    <p>Geschreven door {post.author} op {formatDate(post.created)}</p>*/}
            {/*    <p>{post.content}</p>*/}
            {/*    <p>{post.comments} reacties - {post.shares} keer gedeeld</p>*/}
            {/*    <p><Link to={"/blogoverzicht"}>Terug naar de overzichtspagina</Link></p>*/}
            {/*</article>*/}
        </>
    );
}

export default PostDetails;