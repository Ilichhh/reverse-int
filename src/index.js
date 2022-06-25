module.exports = function reverse (n) {
    let result = '';
    const strNumber = Math.abs(n).toString();
  
    for (let i=strNumber.length - 1; i >= 0; i--) {
      result += strNumber[i];
    }

    return result;
}
