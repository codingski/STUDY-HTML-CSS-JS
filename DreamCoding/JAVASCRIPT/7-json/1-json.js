// HTTP
// Hypertext Transfer Protocal
// Client 들이 어떻게 Sever와 통신할 수 있는지를 정의한 것
// 어떻게 Hypertext를 서로 주고받을 수 있는지 규약한 Protocal 중 하나

// AJAX
// 웹페이지에서 동적으로 서버에게 데이터를 주고 받을 수 있는 기술
// 대표적으로 XMLHttpRequest 라는 object 가 있음
// XHR 은 브라우저 API에서 제공하는 object 중 하나

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // JS 자체에 들어있는 특별한 데이터는 JSON에 포함되지 않음
    symbol: Symbol("id"),
    // 함수는 object에 있는 데이터가 아니기 때문에 제외됨 
    jump : () => {
        console.log(`${this.name} can jump!!`);
    }
};

json = JSON.stringify(rabbit);
console.log(json);


// JSON으로 변환되는 것을 조건을 통해 통제하고 싶다면
json = JSON.stringify(rabbit, ["name"]);
console.log(json); // 출력값: {"name":"tori"};

// 두번째 인자에 목록 선택 가능
json = JSON.stringify(rabbit, ["name", "color"]);

// 콜백함수도 가능
json = JSON.stringify(rabbit, (key, value) => {
    return key === 'name' ? 'yongchan' : value;
});
console.log(json);


// 2 JSON to Object
// parse(json)
console.log('////////////////////');

json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump() 는 존재하지 않음
// 왜냐하면 아까 함수는 JSON으로 만들지 못한다고 했기 때문 

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());