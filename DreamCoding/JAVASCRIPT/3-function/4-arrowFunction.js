// Arrow function
// always anonymous function !!!!!

const simplePrint = function () {
    console.log('simplePrint!');
} // 이것을 Arrow function 으로 바꿔보자

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;

const simpleMultiply = (a, b) => {
    // 함수안에 처리해야될 과정이 많다면 블록을 사용하고 return 을 입력
    return a * b;
}

// IIFE: Immediately Invoked Function Expression
// 함수를 선언하고 바로 사용하고 싶은 경우
(function hello() {
    console.log('IIFE');
})();

// Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate (command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            return console.log('No!!');
    }
}