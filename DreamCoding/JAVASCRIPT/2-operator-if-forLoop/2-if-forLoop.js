// 8. Conditional operators: if
// if, else if, else
const name = 'df';
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder'){
    console.log('You are amazing coder');
} else {
    console.log('unknown')
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
// Ternary operator 를 계속해서 묶어서 사용하면 가독성이 떨어짐
// 그래서 간단한 경우에만 쓰임
console.log(name === 'ellie' ? 'yes' : 'no');
// 코드해석: 만약 name이 ellie면 yes 아니면 no

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('HI');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you');
        break;
    default:
        console.log('same all!');
        break;
}

// switch 는 if문에서 else, if, else, if를 많이 반복한다면
// switch를 사용하는 것을 고려해봐도 좋음

// 11. Loops
// while loop, while the codition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
// 먼저 do 안에 있는 블럭을 실행한 다음에 while 에 있는 조건이 맞는지 확인
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i -2 ){
    //inline variable declaration
    // 지역변수 i 를 for문안에 선언하는 것
    console.log(`inline variable for: ${i}`);
}

// nest loops
// O(n**2) 이기 때문에 CPU에 좋지 않음.
// 되도록이면 피하는게 좋음
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for(let i = 0; i < 11; i++){
    if(i % 2 !== 0){
        continue;
    }else{
        console.log(i);
    }
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for(let i = 0; i < 11; i++){
    if(i > 8){
        break;
    }else{
        console.log(i);
    }
}