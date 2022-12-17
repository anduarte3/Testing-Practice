
function getSum(array) {
    let result = 0;
    for (let i=0; i<array.length; i++) {
        result += array[i];
    }
    return result
}

function getMin(array) {
    let min = Math.min(...array);
    return min
}

function getMax(array) {
    let max = Math.max(...array);
    return max
}

function analyze(array) {
    const object = {
      average: getSum(array) / array.length,
      min: getMin(array),
      max: getMax(array),
      length: array.length,
    }
    return object;
}

module.exports = analyze;