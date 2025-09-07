function countVowels (str){
    let count = 0;
    let vowels = ['a','e','i','o','u']

    for(let char of str){
        let lowerChar = char.toLowerCase();

        if (vowels.includes(lowerChar)){
            count++;
        }
    }
    return count;
}
console.log(countVowels('sangamShingDhami'))