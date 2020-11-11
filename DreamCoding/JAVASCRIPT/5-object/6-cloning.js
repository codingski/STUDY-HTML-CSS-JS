// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'yongchan', age: 24};
const user2 = user;
user2.name ='coder';
console.log(user2.name);

// 완전히 복사하는법 old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}

console.log(user3);

// new way
const user4 = {};
Object.assign(user4, user);
console.log(user4);
// 더 간단하게 만들면 아래와 같다.
const user5 = Object.assign({}, user);
console.log(user5);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);