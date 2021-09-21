
function randomRangeNumber(maxNumber, minNumber) {

    Math.floor(Math.random() * (maxNumber - minNumber) + 1);

    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

}

randomRangeNumber(1, 10);

console.log(randomRangeNumber(minNumber, maxNumber));

module.exports = randomRangeNumber;
