import "./PostDetails.css"
import {useParams} from "react-router-dom";
import posts from "../../constants/data.json"
import formatDate from "../../helpers/formatDate.js";
import {Link} from "react-router-dom";

function PostDetails() {

    const {id} = useParams();
    const post = posts.find((post) => post.id === Number(id));
    console.log(post.author);
    console.log(post.title);
    console.log(post.readTime);

    return (
        <>
            <article>
            <h1>{post.title} ({post.readTime} minuten)</h1>
                <h2>{post.subtitle}</h2>
                <p>Geschreven door {post.author} op {formatDate(post.created)}</p>
                <p>{post.content}</p>
                <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                <p><Link to={"/blogoverzicht"}>Terug naar de overzichtspagina</Link></p>
            </article>
        </>
    );
}

export default PostDetails;