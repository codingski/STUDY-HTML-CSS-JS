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
// 이것이 shorthand
function makePerson(name, age) {
    return {
        name,
        age
    }
}
