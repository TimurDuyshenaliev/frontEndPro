function delSymbols2(str, chars){
    let newArr = []
    for(let chars of str.split('')){
        if(!chars.includes(chars)){
            newArr.push(chars)
        }
    }
    return newArr.join('')
}
console.log(delSymbols2("hello world",['l','d']))