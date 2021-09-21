function convertToInt(str) {
    
   return parseInt(str, 16);
}

convertToInt("BA");
convertToInt("BA");
convertToInt("F1");
convertToInt("JeffBezos");

console.log(convertToInt("BA"));
console.log(convertToInt("BA"));
console.log(convertToInt("F1"));
console.log(convertToInt("JeffBezos"));

module.exports = convertToInt;


