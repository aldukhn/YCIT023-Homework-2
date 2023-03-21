let numbers = [];
const arrayLength = 100;

for (let i = 0; i < arrayLength; i++) {
    numbers.push(Math.floor(Math.random() * 100) + 1);
}

let sum = 0;
let min = numbers[0];
let max = numbers[0];
let evenCount = 0;
let oddCount = 0;

for (const number of numbers) {
    sum += number;

    if (number < min) {
        min = number;
    }

    if (number > max) {
        max = number;
    }

    if (number % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

const average = sum / arrayLength;



showOnHtml(`Average:${average}
Highest number:${max}
Lowest number:${min}
Even count:${evenCount}
Odd count:${oddCount}`)

function showOnHtml(outPut) {
    document.getElementById('outPut').textContent = outPut;
}