const isAlphabeticalCharacter = char => {
    const code = char.charCodeAt(0);

    return (code > 64 && code < 91) || (code > 96 && code < 123);
};

const mockInput = str => {
    if (typeof str !== 'string' || str.length === 0) {
        throw new TypeError('Invalid Input.');
    }

    return str
        .split("")
        .map(char => isAlphabeticalCharacter(char) ? (Math.random() >= 0.5 ? char.toLowerCase() : char.toUpperCase()) : char)
        .join("");
}

module.exports = {
    isAlphabeticalCharacter,
    mockInput
};