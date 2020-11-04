// 4.Variable types
// primitive, single item: 더이상 작아질 수 없는 한가지 아이템
// number, string, boolean, null, undifined, symbol

// objet, box container
// 위에서 이야기한 single item들을 여러개 묶어서 한 박스로 관리할 수 있게 해주는 것

// function, first-class function
// JS에서는 function도 데이터타입 중 하나이다
// first-class function 의 정의↓
// function도 다른 데이터타입처럼 변수에 할당이 가능하고
// 그렇기 때문에 함수의 인자로도 전달이 가능하고, 함수의 return 타입으로도 function을 return 할 수 있다.
 
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0; // 출력값: infinity
const negativeInfinity = -1 / 0; // 출력값: -infinity
const nAn = 'not a number' / 2; // 출력값: NaN

// string
const char = 'c';
const brenden = 'brenden';
const greeting = 'hello ' + brenden; // 이러면 자동적으로 'hello brenden' 으로 합쳐져서 할당됨
const helloBob = `hi ${brenden}!` // template literals OR tempate string
console.log(greeting);
console.log(helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`val: ${canRead}, type: ${typeof canRead}`);
console.log(`val: ${test}, type: ${typeof test}`);


// null
let nothing = null; // null 이라고 할당하면 메모리가 텅텅 비어있는 값이라고 당당하게 지정해 주는 것
console.log(`val: ${nothing}, type: ${typeof nothing}`);

// undefined
let x; // 선언은 되었지만 아무것도 값이 지정되어 있지 않은 것, 즉 아직 정해지지 않은 것

console.log(`val: ${x}, type: ${typeof x}`);

// symbol 고유한 식별자가 필요하거나 동시다발적으로 일어날 수 있는 코드에서 우선순위를 주고 싶을때 사용됨
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
// Symbol은 주어지는 string에 상관없이 고유한 식별자를 만듬
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value ${symbol1.description}, type: ${typeof symbol1.description}`);

// object, real=life object, data structure
const ellie = {name: 'ellie', age: 20};
ellie.age = 21; // object 안의 값은 const라고 해도 변경 가능

// 5.Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
// 이런 Dynamic한 JS때문에 TypeScript 가 나오게 됨.