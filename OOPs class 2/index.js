"use strict";
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
    constructor(width, height) {
        this.width = 0;
        this.height = 0;
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
    constructor(width, height, radius) {
        super(width, height);
        this.radiuss = 0;
        this.radiuss = radius;
    }
    getArea() {
        this.getArea;
        return this.radiuss * this.height;
    }
}
const circle = new Circle(2, 2, 5);
const result = circle.getArea();
console.log(result);
// multilevel inheritance
class cube extends Shape {
    constructor(width, height, third) {
        super(width, height);
        this.third = 0;
        this.third = third;
    }
}
