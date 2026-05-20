function countWords(word) {
    const words = word.split(" ");
    return words.length;
}

function calculateReadTime(text) {
    const amountOfWords = countWords(text);
    const minutes = (amountOfWords / 100) * 0.3;

    return Math.max(1, Math.ceil(minutes));
}

export default calculateReadTime;