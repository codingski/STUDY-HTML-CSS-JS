// Funtion
// - fundamental building block in the program
// - subprogram can be used multiple times
// performs a task of calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello(){
    console.log('Hello');
// 이렇게 만들경우 'hello' 출력밖에 못함
// 그래서 파라미터(인자)를 사용해보자
}

function log(message) {
    console.log(message);
    // message에 들어가는 어떤 인자든 출력 가능!
}

console.log('1' == 1);

// JS는 인자에 어떤 type이 들어가는지 정확하게 명시되어 있지 않기 때문에
// 그것을 보안하고자 TypeScript 가 나옴

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
// 사용자가 parameters 를 정의하지 않을때 인자 옆에있는 값이 대체되어서 사용됨
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('hi!');

// 4. Rest parameters (added in ES6)
// ...을 작성하면 인자들이 배열 형태로 전달됨
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args){
        // 위의 for loop 를 for of 문법을 이용해 간단하게 더욱 출력 가능
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
    // forEach 함수형 언어를 이용해서 더더욱 간단하게 이용 가능
}
printAll('dream', 'coding', 'ellie');

// 맨 처음에 'JS 에서 함수는 object의 일종이다' 라고 이야기했다.
// 예를들어 printAll. 을 하면 함수가 object로 전환이 되기 때문에
// printall의 속성값들을 확인해볼 수 있다.

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
}
printMessage();
// 이런 스코프는 딱 하나의 개념에서 파생된건데 이 한문장만 외우자!!
// '밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다!'
// 중첩된 함수에서 자식의 함수가 부모의 함수에 정의된 변수에 접근이 가능한 것이 closure


// 6. Return a value
// function에 Return 을 넣어주지 않으면 undifined로 나옴

// 7. Early return, early exit

// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// 이렇게 하지 말고 아래코드처럼 조건이 맞지 않을때는 빨리 return해서 종료하고
// 조건이 맞을 경우 진행하도록 코드를 짜서 효율적으로 만드는 것 

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

