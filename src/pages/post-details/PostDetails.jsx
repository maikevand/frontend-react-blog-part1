import "./PostDetails.css"
import {useParams} from "react-router-dom";
// import {useState} from "react";

function PostDetails() {

    const {id} = useParams();
    // const [post, setPost] = useState({});

    // async function fetchPostData () {
    //     try {
    //         const result = posts.find((post) => {
    //            if (post.id === id){
    //                return post;
    //            }
    //         });
    //         setPost(result);
    //     } catch (e) {
    //         console.error(e)
    //     }
    // }

    return (
        <>
            <h1>Id van de blog: {id} </h1>
        </>
    );
}

export default PostDetails;