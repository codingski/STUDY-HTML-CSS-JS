// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'yy', age: 3};
const person3 = {name: 'lili', age: 23};
// 이걸 언제 다 치고 있냐. 함수로 만들어서 넣으면 더욱 편리한데!!

const person4 = makePerson('yongchan', 24);
function makePerson(name, age) {
    return {
        name: name,
        age: age
    }
}
// 만약 key 와 value의 이름이 동일하다면, 한번만 적어도 됨

function makePerson(name, age) {
    return {
        name,
        age
    }
}

// 위의 makePerson 함수는 class 와 비슷한 기능을 함
// 그래서 이전의 JS에 class가 없을때는 위처럼 함수를 정의해서 작성함
// 다른 계산을 하지 않고 순수하게 object만 생산하는 함수들은 보통 함수 이름을 대문자로 만듬
// 아래와 같이 만든다
function Person(name, age) {
    // 이 함수에서 생략된 것은 this = {}; 를 만들어서
    this.name = name;
    this.age = age;
    // return this; 를 해주는 것임
}

// class 에서 object 를 만드는것 처럼 new 를 이용해서 생성함
// 그러면 JS가 알아서 object를 만들어줌
const person5 = new Person('yongpal2', 22);
console.log(person5);