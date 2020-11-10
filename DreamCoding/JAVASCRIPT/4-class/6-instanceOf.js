class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw(); // 부모의 draw 함수를 호출
        console.log('This is triangle'); // 우리가 오버라이딩한 메소드 호출
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}

// 6. Class checking: instanceOf 오퍼레이터
// 왼쪽에 있는 object 가 오른쪽에 있는 class 의 instance인지 판별하는 것
// true OR false
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
