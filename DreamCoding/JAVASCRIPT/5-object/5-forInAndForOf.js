// 6. for..in vs for..of
// for (key in obj)
const yongchan = {name: 'yongchan', age: 24};

// for..in
// obj의 key 들을 출력함
for (key in yongchan) {
    console.log(key);
}

// for (value of iterable)
// obj 를 쓰는 것이 아니라 배열같은 iterable 에 쓰임

//이전 방식
const array = [1, 2, 3, 4, 5];
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

// 현재 방식
for(value of array){
    console.log(value);
}