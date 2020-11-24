// JavaScript is synchronous
// Execute the code block in order after hoisting
// hoisting: var, function declaration 이 자동적으로 맨 위로 올라가는 것


console.log('1');
setTimeout(() => console.log('2'), 2000);
console.log('3');


//Synchronous callback
function printImmediately(print) {
    print();
}

printImmediately(() => console.log('4'));

//Asynchronous callback

function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(() => console.log(5), 3000);