//
// this is just a stub for a function you need to implement
//
function getStats(txt) {
    return {
        nChars: txt.length,
        nWords: getWords(txt).length,
        nLines: txt.split('\n').length,
        nNonEmptyLines: nonEmptyLines(txt),
        averageWordLength: averageWordLength(txt),
        maxLineLength: txt.split('\n').reduce((acc,cur) => Math.max(acc, cur.length), 0),
        palindromes: palindromes(txt),
        longestWords: longestWords(txt),
        mostFrequentWords: mostFrequent(txt)
    };
}

function getWords(txt) {
    let regex = new RegExp(/[A-Za-z0-9]+/, 'mg')
    return txt.match(regex);
}

function nonEmptyLines(txt) {
    let regex = new RegExp(/[\S]+/); 
    return txt.split('\n').filter(l => regex.test(l)).length;
}

function averageWordLength(txt) {
    let words = getWords(txt);
    return words.reduce((acc, cur) => acc + cur.length, 0) / words.length;
}

function palindromes(txt) {
    return getWords(txt)
        .map(w => w.toLowerCase())
        .filter(w => w.length >= 2)
        .filter(w => isPalindrome(w));
}

function isPalindrome(word) {
    let chars = word.split('');
    let left = 0;
    right = chars.length - 1;
    while(left < right) {
        if(chars[left] !== chars[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function longestWords(txt) {
    return getWords(txt)
        .map(w => w.toLowerCase())
        .unique()
        .sort((a,b) => b.length - a.length)
        .slice(0, 10);
}

function mostFrequent(txt) {
    let words = getWords(txt).map(w => w.toLowerCase());
    let map = words
        .slice()
        .unique()
        .map(val => ({word: val, count: 0}));
    words.forEach(w => map.find(m => m.word === w).count++);
    return map
        .sort((a,b) => b.count - a.count)
        .slice(0, 10)
        .map(val => `${val.word}(${val.count})`);
}


Array.prototype.unique = function() {
    return [... new Set(this)];
}