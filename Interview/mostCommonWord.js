let mostCommonWord = function mostCommonWord(inputString) {
    let wordsCounter = {};
    let mostCommonCounter = 0;
    let mostCommonWord = "elegant";
    inputString.split(" ").forEach((word)=>{
        wordsCounter[word] = wordsCounter[word] || 0;
        wordsCounter[word]++;
    });
    Object.keys(wordsCounter).forEach((word)=>{
        if (wordsCounter[word] > mostCommonCounter) {
            mostCommonWord = word;
            mostCommonCounter = wordsCounter[word];
        }
    });
    return mostCommonWord;
}

console.log("mostCommonWord",mostCommonWord)
