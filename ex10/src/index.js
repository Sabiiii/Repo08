
function mathTest(x, y) {

   console.log(mathTest(2, 2));
   console.log(mathTest(2, 2));
   console.log(mathTest(-2, 2));
   console.log(mathTest(2, -2));
   console.log(mathTest(2, 8));
   console.log(mathTest(3, 3));
   console.log(mathTest(0, 0));
    
    if (x < 0 || y < 0) {

        return undefined;
    } else { 
        return Math.round(Math.pow(Math.sqrt(x) + Math.sqrt(y), 2));
        }

}

mathTest();

module.exports = mathTest;
