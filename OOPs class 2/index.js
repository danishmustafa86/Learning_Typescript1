// class
// inheritance
// class Parent {
// title:string="ali"
// }
// class Child extends Parent {
// description:string="any descrition"
// }
// const aObject=new Child()
// console.log(aObject.title);
class Shape {
    width = 0;
    height = 0;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const shaped = new Shape(10, 20);
console.log("area of shape is " + shaped.getArea());
class Circle extends Shape {
    radiuss = 0;
    constructor(width, height, radius) {
        super(width, height);
        this.radiuss = radius;
    }
    getArea() {
        this.getArea;
        return this.radiuss * this.height * 3.14;
    }
}
const circle = new Circle(2, 2, 5);
const result = circle.getArea();
console.log(result);
// multilevel inheritance
class cube extends Shape {
    third = 0;
    constructor(width, height, third) {
        super(width, height);
        this.third = third;
    }
}
class car {
    color = "black";
    weight = "100kg";
    constructor(color, weight) {
        this.color = color;
        this.weight = weight;
    }
    getcombination() {
        return `${this.color}+${this.weight}`;
    }
}
class sportsCar extends car {
    speed = "220kmph";
    constructor(speed, color, weight) {
        super(color, weight);
        this.speed;
    }
}
let normalCar = new sportsCar("220kmph", "black", "2500kg");
console.log("extending as", normalCar);
export {};
