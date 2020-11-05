// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.

const print = function () { // anonymous function 이름이 없는 함수
                            // function expression 방식
                            // 특징은 hoisting이 안됨!!
    console.log('print');
};
/*
const print = function print() { // named function 이름이 있는 함수
                                 // function declaration 방식
                                 // hoisting 이 가능함
                                 // named function은 디버깅할때 or
                                 // recursion 할때 (함수 안에서 함수 자신 스스로를 부르는것) 사용됨
    console.log('print');
};*/
print();
const printAgain = print;
printAgain(); // 다른 변수에 함수를 할당하면 사용 가능