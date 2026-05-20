import "./NewPost.css"
import FormInput from "../../components/FormInput/FormInput.jsx";
import React from "react";
import calculateReadTime from "../../helpers/calculateReadTime.js";
import {useNavigate} from "react-router-dom";

function NewPost() {
    const [titleValue, setTitleValue] = React.useState("");
    const [subtitleValue, setSubtitleValue] = React.useState("");
    const [authorValue, setAuthorValue] = React.useState("");
    const [contentValue, setContentValue] = React.useState("");
    const [error, setError] = React.useState("");

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

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
            setError("Het bericht mag maximaal 2000 karakters lang zijn.")
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
        console.log(newPost);
        navigate("/blogoverzicht");
    }

    return (
        <form onSubmit={handleSubmit}>
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
            <label htmlFor="content">Bericht</label>
            <textarea
                id="content"
                name="content"
                rows="4"
                cols="30"
                value={contentValue}
                onChange={(e) => setContentValue(e.target.value)}>
            </textarea>
            {error && <p>{error}</p>}
            <button type="submit">Verzenden</button>
        </form>
    );
}

export default NewPost;