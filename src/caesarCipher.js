function caesarCipher(str, cipherFactor) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode((charCode - 65 + cipherFactor + 26) % 26 + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode((charCode - 97 + cipherFactor + 26) % 26 + 97);
    } else {
      result += str[i];
    }
  }
  return result;
}

export default caesarCipher;