// Objects
// one of the Javascript's data types.
// a collection of related data and / or functionality.
// Nearly all objects in Javascript are instances of Object.
// obhect = {key : value}; 오브젝트는 키와 벨류의 집합체

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const yongchan = {name: 'yongchan', age: 24};
print(yongchan);

// JS 는 동적으로 타입이 RUNTIME 때 결정되는 언어
// Runtime: 프로그램이 동작하고 있을 때
// 그래서 아래와 같이 object 에 값을 추가 가능
// 하지만 유지보수하기 힘들고 error 발생할 수 있기 때문에 이것을 피해서 코딩하는 것이 좋음
yongchan.hasJob = true;
console.log(yongchan);

// 삭제도 가능
delete yongchan.hasJob;
console.log(yongchan);

// 2. Computed properties 계산된 프로퍼티
// key should be always string
console.log(yongchan['name']); // 오브젝트 안에 있는 변수의 이름을 string 형태로 접근 가능

yongchan['hasJob'] = true;
console.log(yongchan);

// 그렇다면 아래 두개는 어떤 상황일때 쓰일까?
console.log(yongchan.name);
// ↑ 코딩하는 그 순간 그 키에 해당하는 값을 받아오고 싶을때 씀
// 코딩할때는 그냥 닷을 사용함
console.log(yongchan['name']);
// 우리가 정확하게 어떤 키가 필요한지 모를 때
// 즉, runtime 에서 결정될 때 computed properties 를 씀
// 우리가 실시간으로 원하는 키의 값을 받아오고 싶을때 쓰임
// computed properties 예시
function prinValue(obj, key) {
    console.log(obj[key]);
}
console.log(prinValue(yongchan, 'name'));