// Promise is a JS object for asynchronous operation
// JS에서 제공하는, 비동기를 간편하게 처리할 수 있도록 도와주는 object
// state: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    // 바로 출력이 됨
    setTimeout(() => {
        resolve('ellie');
        reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers: then, catch, finally 를 이용해서 값을 받아올 수 있음
promise
    .then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => console.log('finally'));
    // finally 는 성공하든 실패하든 상관없이 어떤 기능을 마지막으로 수행하고 싶을때 쓰임

// 3. Promise chaining     Promise연결하기
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        })
    })
    .then(num => console.log(num));
