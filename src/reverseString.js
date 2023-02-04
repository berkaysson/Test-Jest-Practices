function reverseString(str){
    let arr = str.split("");
    str = arr.reverse().join("");
    return str
}

export default reverseString;