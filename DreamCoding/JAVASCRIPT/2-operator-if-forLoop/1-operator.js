// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(1 % 1); // remainder
console.log(1 ** 1); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
//counter = counter + 1; counter에 1을 더해 counter의 값을 할당 
// preIncrement = counter; 그 다음에 preIncrement라는 변수에 counter을 할당

const postIncrement = counter++;
// postIncrement = counter; 먼저 이 변수의 값(counter)을 postIncrement에 할당 한 다음
// counter = counter + 1; 그뒤에 counter의 값을 1을 증가시키는 것

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// Logical operators: || (or), &&(and), ! (not)
const value1 = false;
const value2 = 4 < 2;
function check(){
    for(let i = 0; i < 10; i++){
        // check 함수는 쓸데없이 시간을 낭비하는 함수
        console.log('haha');
    }
    return true;
}

// || (or), finds the first truthy value
// && (and), finds the first falsy value
console.log(`or: ${value1 || value2 || check()}`)

// or이나and 는 앞의 값부터 차례대로 true OR false 평가를 하기 때문에
// 제일 가벼운 value 부터 차례대로 써야된다.

// ! (not) 반대!!
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
// 즉, 타입을 변경해서 검사를 함 (유연하게)
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strick equality, no type conversion
// 즉, 타입을 변경하지 않고 엄격하게 검사함.
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // false 각각 다른 reference가 저장되어 있기 때문에 false
console.log(ellie1 === ellie2); // false 똑같은 type이든 아니든 reference 값이 다르기 때문에 false
console.log(ellie1 === ellie3); // true ellie1이 가지고 있는 reference value를 ellie3으로 할당했기 때문에 true

//equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // 0은 boolean type 이 아니기 때문에 false
console.log('' == false); // true
console.log('' === false); // ''는 boolean type 이 아님
console.log(null == undefined); // true
console.log(null === undefined); // false
