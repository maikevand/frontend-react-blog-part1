import "./NewPost.css"
import FormInput from "../../components/FormInput/FormInput.jsx";
import React from "react";
import calculateReadTime from "../../helpers/calculateReadTime.js";
import {Link} from "react-router-dom";
import axios from "axios";

function NewPost() {
    const [titleValue, setTitleValue] = React.useState("");
    const [subtitleValue, setSubtitleValue] = React.useState("");
    const [authorValue, setAuthorValue] = React.useState("");
    const [contentValue, setContentValue] = React.useState("");
    const [error, setError] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [createdPostId, setCreatedPostId] = React.useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");

        try {
            if (
                titleValue === "" ||
                subtitleValue === "" ||
                authorValue === "" ||
                contentValue === ""
            ) {
                setError("Vul alle velden in.");
                return;
            }

            if (contentValue.length < 300) {
                setError("Het bericht moet minimaal 300 karakters lang zijn.");
                return;
            }

            if (contentValue.length > 2000) {
                setError("Het bericht mag maximaal 2000 karakters lang zijn.");
                return;
            }
            setError("");

            const newPost = {
                title: titleValue,
                subtitle: subtitleValue,
                content: contentValue,
                author: authorValue,
                created: new Date().toISOString(),
                readTime: calculateReadTime(contentValue),
                comments: 0,
                shares: 0,
            };

            setLoading(true);

            const response = await axios.post("https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/",
                newPost,
                {
                    headers: {
                        "novi-education-project-id": "d17b3fdb-9491-4065-b047-efe9ea4b773c",
                    },
                }
            );

            setCreatedPostId(response.data.id);
            setIsSubmitted(true);

        } catch (e) {
            setError("Er is iets misgegaan bij het verzenden van het bericht.");
        } finally {
            setLoading(false);
        }
    }

    if (isSubmitted) {
        return (
            <p>
                Je blog is succesvol toegevoegd. Je kunt deze{" "}
                <Link to={`/blogs/${createdPostId}`}>hier</Link> bekijken.
            </p>
        );
    }
    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <FormInput
                fieldname="title"
                text="Titel"
                type="text"
                value={titleValue}
                setValue={setTitleValue}
            />
            <FormInput
                fieldname="subtitle"
                text="Subtitel"
                type="text"
                value={subtitleValue}
                setValue={setSubtitleValue}
            />
            <FormInput
                fieldname="author"
                text="Auteur"
                type="textarea"
                value={authorValue}
                setValue={setAuthorValue}
            />
            <div className="content-section">
                <label htmlFor="content">Bericht</label>
                <textarea
                    id="content"
                    name="content"
                    rows="10"
                    cols="30"
                    value={contentValue}
                    onChange={(e) => setContentValue(e.target.value)}>
            </textarea>
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" disabled={loading}>{loading ? "Bezig met verzenden..." : "Verzenden"}</button>
        </form>
    );
}

export default NewPost;