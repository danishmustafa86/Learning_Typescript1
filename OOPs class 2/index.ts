// class
// inheritance
class Parent {
title:string="ali"
}
class Child extends Parent {
description:string="any descrition"
}
const aObject=new Child()
console.log(aObject.title);

class Shape{
    width:number=0
    height:number=0
    constructor(width:number, height:number){      
          this.width=width;
        this.height=height;
    }
    getArea():number{
        return this.width*this.height
    }
}
const shaped=new Shape(10,20)
console.log("area of shape is "+shaped.getArea())
class Circle extends Shape{
    radiuss:number=0
    constructor(width:number, height:number,radius:number){
super(width,height)
this.radiuss = radius;
    }

    getArea(): number {
        this.getArea
         return this.radiuss*this.height
    }
}

const circle=new Circle(2,2,5)
const result=circle.getArea()
console.log(result);

// multilevel inheritance


class cube extends Shape{
    third:number=0
    constructor(width:number, height:number,third:number){
super(width,height)
this.third = third;
    }
}


