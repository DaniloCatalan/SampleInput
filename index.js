const fs = require('fs');

function getData() {
  data = fs.readFileSync(`${__dirname}/simple-input.txt`, 'UTF-8');
  return data.split('\n');
}

function buildValues(from, numberOfElements, data) {
  let newArrayValues = [];
  let to = from + numberOfElements;

  for (let i = from; i < to; i++) {
    newArrayValues.push(data[i]);
  }

  return newArrayValues;
}

function handleData(data) {
  let numberOfCosts = 0;
  let numberOfLabels = 0;

  const result = {
    costs: [],
    labels: [],
    dailyCount: 0,
  };

  numberOfCosts = parseInt(data[0]);
  result.costs = buildValues(1, numberOfCosts, data);
  numberOfLabels = parseInt(data[result.costs.length + 1]);

  if (numberOfCosts !== numberOfLabels) {
    console.log('the cost number does not match the labels');
    return { ...result, status: 'fail' };
  }

  result.labels = buildValues(result.costs.length + 2, numberOfLabels, data);
  result.dailyCount = parseInt(data[data.length - 1]);

  return result
}

console.log(handleData(getData()));
