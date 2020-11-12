// 1. Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);

// 3. Looping over an array
// print all fruits
// a. for
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// b. for of
for(let key of fruits){
    console.log(key);
};

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('orange');

// pop: remove an item from the end
fruits.pop();

// unshift: add an item to the beginning
fruits.unshift('potato');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// 앞에있는 데이터를 넣다 뺏다 하려면 전체 배열을 옮겨야 하기때문에
// shift 와 unshift는 비교적 느림

// splice: remove an item by index position

fruits.push('lemon', 'peach', 'a', 'b');
console.log(fruits);
fruits.splice(2, 2);
console.log(fruits);

// conbine two arrays
const fruits2 = ['bb', 'cc'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.log(fruits);
console.log(fruits.indexOf('apple'));

// includes
console.log(fruits.includes('banana'));

// lastIndexOf
// 만약 fruits 에 apple 이 2개 있다면
// lasrIndexOf 를 사용하면 제일 마지막에 있는 값을 출력
fruits.push('apple');
console.log(fruits);
console.log(fruits.lastIndexOf('apple'));