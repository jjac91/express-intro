function handleNums(string) {
  let splitString = string.split(",");
  let result = [];
  for (let i = 0; i < splitString.length; i++) {
    let unvalNum = Number(splitString[i]);

    if (Number.isNaN(unvalNum)) {
      return new Error(
          `the value ${unvalNum} at index ${i} is not a valid number`
      );
    }

    result.push(unvalNum);
  }
  return result;
}

function findMean(array) {
  let total = 0;
  for (number of array) {
    total += number;
  }
  return total / array.length;
}

function findMedian(array) {
  array.sort((a, b) => a - b);
  let middleIndex = Math.floor(array.length / 2);
  if (array.length % 2 === 0) {
    return (array[middleIndex] + array[middleIndex - 1]) / 2;
  } else return array[middleIndex];
}

function frequencyCounter(array) {
  return array.reduce(function (accum, current) {
    accum[current] = (accum[current] || 0) + 1;
    return accum;
  }, {});
}
function findMode(array) {
  let frequency = frequencyCounter(array);
  let mostFrequent = 0;
  let count= 0;
  
  for (let key in frequency) {
      console.log(frequency[key])
    if (frequency[key] > count) {
      mostFrequent = key;
      console.log(mostFrequent)
      count = frequency[key];
    }
  }

  return +mostFrequent;
}
module.exports = { handleNums, findMean, findMedian, findMode };
