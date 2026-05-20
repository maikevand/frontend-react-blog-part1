function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    return date.toLocaleDateString("nl-NL", options);
}

export default formatDate;