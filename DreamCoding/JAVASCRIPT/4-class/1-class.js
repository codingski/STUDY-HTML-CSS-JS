// object-oriented programming
// class: template
// object: instance of class
// class 를 이용해서 새로운 instance를 생성하면 object가 됨
// JavaScript classes
// - introduced in ES6
// - syntatical sugar over prototype-based inheritance

// 1. Class declarations
// class 는 field 와 method가 묶여있는 것이다!
// class 안에 field 만 묶여있는 것이 있는데, 그것을 Data Class 라고 한다.
class Person {
    // constructor 생성자 -> 나중에 object를 만들때 필요한 Data를 전달
    constructor (name, age) {
        // 속성(fields)
        // 전달받은 data를 fields 에 할당
        this.name = name;
        this.age = age;
    }

    // 행동(methods)
    speak () {
        console.log(`${this.name}: hello!`);
    }
}
