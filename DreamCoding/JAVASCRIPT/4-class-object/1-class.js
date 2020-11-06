// object-oriented programming
// class: template
// object: instance of class
// JavaScript classes
// - introduced in ES6
// - syntatical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor
    constructor (name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak () {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 24);

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName =lastName;
        this.age = age;
    }

    get age() {
        return this.age;
    }
    set age(value) {
        return this.value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);