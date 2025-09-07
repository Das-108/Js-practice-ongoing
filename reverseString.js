function revrse(str){
    let charArray = str.split('')
    charArray.reverse();

    let reversedStr = charArray.join('')
    return reversedStr;
}
console.log(revrse("hello"))