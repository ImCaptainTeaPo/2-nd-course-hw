// 1
let array1 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array1.length; i++) {
  console.log(array1[i]);
  if (array1[i] === 10) {
    break;
  }
}


// 2
let array2 = [1, 5, 4, 10, 0, 3];

let index = array2.indexOf(4);

console.log(index);


// 3
let array3 = [1, 3, 5, 10, 20];

let result = array3.join(' ');

console.log(result);


// 4
let multiArray = [];

for (let i = 0; i < 3; i++) {
  let innerArray = [];
  for (let j = 0; j < 3; j++) {
    innerArray.push(1);
  }
  multiArray.push(innerArray);
}

console.log(multiArray);


// 5
let array5 = [1, 1, 1];

array5.push(2, 2, 2);

console.log(array5);


// 6
let array6 = [9, 8, 7, 'a', 6, 5];

array6.sort();

let filteredArray = array6.filter(item => item !== 'a');

console.log(filteredArray6);


// 7
let array7 = [9, 8, 7, 6, 5];

let userGuess = prompt("Угадайте число из массива [9, 8, 7, 6, 5]");
userGuess = Number(userGuess);

if (array7.includes(userGuess)) {
  alert("Угадал");
} else {
  alert("Не угадал");
}


// 8
let str = 'abcdef';

let reversedStr = str.split('').reverse().join('');

console.log(reversedStr);


// 9
let array9 = [[1, 2, 3], [4, 5, 6]];

let flatArray9 = array9.flat();

console.log(flatArray9);


// 10
let array10 = [3, 7, 2, 9, 4];

for (let i = 0; i < array10.length - 1; i++) {
  let sum = array10[i] + array10[i + 1];
  console.log(`Сумма элементов ${array10[i]} и ${array10[i + 1]}: ${sum}`);
}


// 11
function getSquares(array) {
    return array.map(number => number ** 2);
  }
  
  // Пример использования:
  let numbers = [1, 2, 3, 4, 5];
  let squares = getSquares(numbers);
  
  console.log(squares);


// 12
function getWordLengths(words) {
    return words.map(word => word.length);
  }
  
  // Пример использования:
  let strings = ["apple", "banana", "cherry"];
  let lengths = getWordLengths(strings);
  
  console.log(lengths);


// 13
function getNegativeNumbers(numbers) {
    return numbers.filter(number => number < 0);
  }
  
  // Пример использования:
  let array13 = [4, -1, 0, -7, 5, -3];
  let negativeNumbers = getNegativeNumbers(array13);
  
  console.log(negativeNumbers);


// 14
let array14 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));

let evenNumbers = array14.filter(number => number % 2 === 0);

console.log("Исходный массив:", array14);
console.log("Массив с четными значениями:", evenNumbers);


// 15
let array = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1);

let sum = array.reduce((acc, number) => acc + number, 0);

let average = sum / array.length;

console.log("Массив:", array);
console.log("Среднее арифметическое:", average.toFixed(2));
