// Remove blanks
function removeBlanks(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            newStr += str[i];
        }
    }
    return newStr;
}
console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));

// Get Digits
function getDigits(str) {
    let digits = "";
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(Number(str[i]))) {
            digits += str[i];
        }

    }
    return digits;

}
console.log(getDigits("abc8c0d1ngd0j0!8"));
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

// Acronyms
function acronym(str) {
    let acrnm = "";
    let arrStr = str.split(" ");

    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i].length > 0) {
            acrnm += arrStr[i][0].toUpperCase();
        }
    }
    return acrnm;
}
console.log(acronym(" there's no free lunch - gotta pay yer way. "));
console.log(acronym("Live from New York, it's Saturday Night!"));

// Count Non-Spaces
function countNonSpaces(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            count++;
        }
    }
    return count;
}
console.log(countNonSpaces("Honey pie, you are driving me crazy"));
console.log(countNonSpaces("Hello world !"));

// Remove Shorter Strings
function removeShorterStrings(arr, num) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= num) {
            newArr.push(arr[i])
        }
    }
    return newArr

}
console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3));



