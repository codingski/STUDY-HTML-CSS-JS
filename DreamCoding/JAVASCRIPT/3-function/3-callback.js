// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

const printYes = function () {
    console.log('YES!!');
}

const printNo = function () {
    console.log('NO!!');
}

randomQuiz('haha', printYes, printNo);