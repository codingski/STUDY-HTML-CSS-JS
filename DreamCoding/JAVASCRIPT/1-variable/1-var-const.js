// 1. Use strict
// added in ES 5
// use this for Vanila Javascript.

'use strict';

// 2. Variable: 변경될 수 있는 값
// let (added in ES6)

let name = 'yongchan';
console.log(name);
name = 'hello';
console.log(name);


// Block scope VS Global Scope
let globalName = 'global name'; // Global Scope
// 블럭 안과 밖에서 모두 볼 수 있음.

{   // Block scope
    // 블럭 안에 작성하면 블럭 밖에서는 더이상 블럭 안의 내용을 볼 수 없음
    let name = 'yongchan';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}

console.log(name);
console.log(globalName);

// hoisting
// 어디에 선언했는지에 상관 없이 항상 제일 위로 선언을 끌어 올려주는 것.

// var (don't ever use this!!)
// var hoisting (move declaration from bottom to top)
// has no block scopr

// 3. Constant 한번 할당하면 값이 절대 바뀌지 않는 것
// Mutable Type: 값이 계속 변경될 수 있는 것
// Immutable Type: 값이 변경될 수 없는 것
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes