function removeMark(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '!') {
            newStr += str[i];
        }
    }
    return newStr;
}

console.log(removeMark('gi!orgi!!!!!'));