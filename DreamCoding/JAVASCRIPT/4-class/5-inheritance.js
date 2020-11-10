// inheritance
// a way for one class to extend another class.

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

// extends 라는 키워드를 이용해서 class 를 연장할 수 있다
// 하지만 삼각형의 넓이는 나누기2를 해야하므로 오버라이딩한다
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

const rectangle = new Rectangle(20, 20, 'black');
console.log(rectangle.width);
rectangle.draw();

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());